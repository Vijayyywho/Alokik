import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // If you use routing
import apiRequest from "../../Lib/apiRequest"; // Adjust import based on your API utility
import AuthContext from "../../Context/AuthContext"; // Auth context for current user

const CustomerReviews = ({ postId, title }) => {
  const { currentUser } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await apiRequest.get(`/reviews/${postId}`);
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [postId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (newReview.trim() === "" || rating === 0) return;

    const avatar = currentUser?.avatar || "/noavatar.jpg";
    const username = currentUser?.username || localStorage.getItem("username");

    if (!username) {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false); // Hide the message after 7 seconds
      }, 3000);
      return;
    }

    const newReviewData = {
      comment: newReview.trim(),
      stars: rating,
      username: username.trim(),
      avatar: avatar,
      postId: postId,
    };

    try {
      const { data } = await apiRequest.post(
        `/reviews/${postId}`,
        newReviewData
      );

      if (data) {
        setReviews((prevReviews) => [...prevReviews, data]);
        setNewReview("");
        setRating(0);
      } else {
        console.error("No review added, API response is empty");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const calculateAverageRating = () => {
    const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
    return (totalStars / reviews.length).toFixed(1);
  };

  return (
    <div className="p-0 my-5 bg-white max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Overall Rating */}
      {reviews.length > 0 && (
        <div className="mb-6 flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg">
            Overall Rating: {calculateAverageRating()} / 5
          </button>
        </div>
      )}

      {/* Existing Reviews */}
      <div className="mb-6">
        {reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.slice(0, 4).map((review, index) => (
              <li
                key={index}
                className="border-b pb-4 flex items-start space-x-4 border rounded-lg p-5 hover:border-[#ff6d00]"
              >
                <img
                  src={review.avatar || "/noavatar.jpg"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.username}</p>
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < review.stars
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118L2.264 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.95z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800">{review.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to write one!
          </p>
        )}
      </div>

      {reviews.length > 4 && (
        <button
          onClick={() => setShowAllReviews(true)}
          className="mb-5 px-6 py-3 bg-[#ff6d00] text-white rounded-lg"
        >
          View All Reviews
        </button>
      )}

      {/* Add New Review */}
      <form onSubmit={handleReviewSubmit} className="mb-6">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full border rounded-lg p-3 mb-4"
        />
        <div className="flex items-center mb-4">
          <span className="mr-3 font-semibold text-lg">Your Rating:</span>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              onClick={() => setRating(index + 1)}
              className={`w-6 h-6 cursor-pointer ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118L2.264 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.95z" />
            </svg>
          ))}
        </div>
        <button
          type="submit"
          className="my-5 px-6 py-3 bg-[#ffffff] text-[#ff6d00] border border-[#ff6d00] rounded-lg hover:bg-[#ffe5cc] hover:text-[#ff6d00]"
        >
          Submit Review
        </button>
      </form>

      {/* Login Message */}
      {showLoginMessage && !currentUser && (
        <div
          className="fixed top-0 left-0 right-0 p-4 bg-red-500 text-white text-center"
          style={{ zIndex: 9999 }}
        >
          Please log in to submit a review!
        </div>
      )}

      {/* Modal for All Reviews */}
      {showAllReviews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex items-center justify-center"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white p-8 w-3/4 max-w-4xl rounded-lg relative max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">
              All Reviews:-&nbsp;
              <span className="text-[#ff6d00]">{title}</span>
            </h3>
            <button
              onClick={() => setShowAllReviews(false)}
              className="absolute top-3 right-3 p-3 bg-[#ff6d00] text-white rounded-full"
            >
              X
            </button>
            <ul className="space-y-4 mb-4">
              {reviews.map((review, index) => (
                <li
                  key={index}
                  className="border-b pb-4 flex items-start space-x-4 border rounded-lg p-5"
                >
                  <img
                    src={review.avatar || "/noavatar.jpg"}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{review.username}</p>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-5 h-5 ${
                            starIndex < review.stars
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118L2.264 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.95z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-800">{review.comment}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
