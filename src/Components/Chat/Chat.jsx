import { useContext, useEffect, useRef, useState } from "react";
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../Lib/notificationStore";
import { deleteChat } from "../../Lib/loaders";

function Chat({ chats, setChats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [chatToDelete, setChatToDelete] = useState(null);

  const messageEndRef = useRef();

  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  const handleDeleteClick = (e, chatId) => {
    e.stopPropagation();
    setChatToDelete(chatId);
    setIsDeleteModalOpen(true);
  };

  const fetchChats = async () => {
    try {
      const res = await apiRequest.get("/chats");
      setChats(res.data);
    } catch (err) {
      console.log("Failed to fetch chats:", err);
    }
  };

  const handleDeleteChat = async () => {
    try {
      await apiRequest.delete("/chats/" + chatToDelete);
      fetchChats(); // Refresh the list of chats
      setIsDeleteModalOpen(false);
    } catch (err) {
      console.log("Failed to delete chat:", err);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver?.avatar || "/noavatar.jpg"} alt="" />
            <span>{c.receiver?.username || "Unkown User"}</span>
            <p>{c.lastMessage}</p>

            {/* Delete button */}
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete Chat"
              size="sm"
              onClick={(e) => handleDeleteClick(e, c.id)}
              colorScheme="red"
            />
          </div>
        ))}
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver?.avatar || "noavatar.jpg"} alt="" />

              {chat.receiver?.username || "Unkown User"}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={handleCancelDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this chat? This action cannot be
            undone.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleDeleteChat}>
              Yes, Delete
            </Button>
            <Button variant="ghost" onClick={handleCancelDelete}>
              No, Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Chat;
