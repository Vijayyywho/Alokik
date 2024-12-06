import { Await, defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest(`/posts/${params.id}`);
  if (!res || !res.data) {
    throw new Response("Post not found", { status: 404 });
  }
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  console.log(request);
  const query = request.url.split("?")[1];
  const postPromise = apiRequest(`/posts?${query}`);

  const response = await postPromise;
  console.log(response.data);

  return defer({
    postResponse: response.data || [],
  });
};

export const deleteChat = async (chatId) => {
  try {
    const response = await apiRequest.delete(`/chats/${chatId}`);
    return response.data;
  } catch (err) {
    throw new Error("Error deleting chat");
  }
};

export const fullMapLoader = async () => {
  // Fetch the items data from your API (adjust the endpoint as necessary)
  const response = await apiRequest("/posts"); // Example endpoint
  if (!response || !response.data) {
    throw new Response("No data found", { status: 404 });
  }

  return defer({
    postResponse: response.data || [], // The data will be available as postResponse
  });
};

export const profilePageLoader = async ({ request, params }) => {
  const postPromise = apiRequest("/users/profilePosts");
  let chatPromise = apiRequest("/chats");

  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const deleteChatId = urlParams.get("deleteChatId");

  if (deleteChatId) {
    try {
      const updatedChats = await deleteChat(deleteChatId);

      chatPromise = Promise.resolve(updatedChats);
    } catch (err) {
      console.log("Failed to delete chat:", err);
    }
  }

  return defer({
    postResponse: await postPromise,
    chatResponse: await chatPromise,
  });
};
