import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://effective-space-spork-r474x5rw9wwr25v69-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="text-primary">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item">{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
