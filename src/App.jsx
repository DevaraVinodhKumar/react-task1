import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import styles from "./userDetails.module.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  // Fetching user data
  useEffect(() => {
    fetch("https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-22/db_720032.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
     
  }, []);

  // Sorting function
  const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => {
      return sortAsc
        ? a.first_name.localeCompare(b.first_name)
        : b.first_name.localeCompare(a.first_name);
    });
    setSortAsc(!sortAsc);
    setUsers(sortedUsers);
  };

  return (
    <div className={styles.app}>
      <button onClick={sortUsers}>
        Sort by First Name ({sortAsc ? "Asc" : "Desc"})
      </button>
      <div className={styles.userList}>
        {users.map((user) => (
          <UserDetails key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default App;








