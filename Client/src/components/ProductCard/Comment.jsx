import { useState, useEffect } from "react";
import axios from "axios";

const Comment = (props) => {
  const [cmt, setCmt] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch existing comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${props.perfumeComment._id}/comments`
        );
        setComments(response.data); // Update comments with the response data
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleComment = async () => {
    const payload = {
      _id: props.perfumeComment._id,
      text: cmt,
      uploadedAt: Date.now(),
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/products/comments",
        payload
      );
      setComments(response.data); // Update comments with the new comment
      setCmt(""); // Clear the input
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="min-h-170 bg-gray-50 flex flex-col items-center p-8">
      {/* Comment Section */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Reviews</h2>

        {/* Comments Display */}
        <div
          className="border-t border-gray-300 p-4 bg-gray-50 rounded-lg space-y-4"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-gray-700 text-lg">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Add Comment */}
        <div className="mt-6 flex flex-col">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            placeholder="Add your comment..."
            rows={5}
            value={cmt}
            onChange={(e) => setCmt(e.target.value)}
          ></textarea>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleComment}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
