import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    console.log("UserList mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <h3>Loading users...</h3>;
    }

    if (error) {
      return <h3 style={{ color: "red" }}>Error: {error}</h3>;
    }

    return (
      <div>
        <h2>User List (componentDidMount)</h2>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
