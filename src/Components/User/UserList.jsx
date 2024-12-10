// src/Components/UserList.js
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://xeavgjmnzautfzxwxprx.supabase.co", // Replace with your Supabase project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYXZnam1uemF1dGZ6eHd4cHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MzYwNTAsImV4cCI6MjA0NTQxMjA1MH0.Bc-dAAMPIs6adirJDu3nGlG22IwIM-5rUFJ-qA_GuD8" // Replace with your Supabase public key
);

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Function to fetch users from Supabase
  const fetchUsers = async () => {
    try {
      setLoading(true); // Set loading to true
      const { data, error } = await supabase.from("users").select("*"); // Fetch all users

      if (error) throw error; // Handle any errors

      setUsers(data); // Set the fetched users
    } catch (error) {
      setError(error.message); // Set the error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Use effect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Render loading, error, or user list
  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.auth0_id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
