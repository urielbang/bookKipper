import React, { useState } from "react";
import "./style.css";
import { users, books } from "../../../config/data";

export default function AddUser() {
  const [allUsers, setAllUsers] = useState(users);
  const [allBooks, setAllBooks] = useState(books);
  const [name, setName] = useState({});
  const [id, setId] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    const nameFound = allUsers.filter((user) => {
      return user.name === name.name;
    });
    if (nameFound.length) {
      console.log("the user alreade exist");
    } else {
      setAllUsers([...allUsers, name]);

      console.log(allUsers);
    }
  };
  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value, id: id, borrowed: [] });
  };
  const handleChangeDelete = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const findNaame = allUsers.find((user) => {
      return user.name == name;
    });
    if (findNaame) {
      const filterdUsers = allUsers.filter((user) => {
        return user.id !== name.id;
      });
      setAllUsers(filterdUsers);
      console.log(filterdUsers);
    } else {
      console.log("there is not such user");
    }
  };
  const handleBorrwed = (e) => {
    e.preventDefault();
    const bookFound = allBooks.find((book) => {
      return book.id == name.bookId;
    });

    const userFound = allUsers.find((user) => {
      return user.id == name.userID;
    });

    const addToUserBrowed = allUsers.map((user) => {
      if (user.name == userFound.name) {
        user.borrowed.push(bookFound);
      }
      return user;
    });
    console.log(addToUserBrowed);
    setAllUsers(addToUserBrowed);
  };

  return (
    <div className="containerUser">
      <section className="form-section">
        <div className="form-wrapper">
          <h1 className="title">Sign up</h1>
          <form onSubmit={handleSubmit} className="form" action="post.php">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <span className="sr-only">First Name</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="First Name"
                    className="form-input"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="Submit" className="form-submit" />
            </div>

            <footer className="form-footer">
              <div>
                <a href="#" className="form-link">
                  Forgot password?
                </a>
              </div>
              <div>
                Already have an account?
                <a href="#" className="form-link">
                  Log in
                </a>
              </div>
            </footer>
          </form>
        </div>
      </section>
      <section className="form-section">
        <div className="form-wrapper">
          <h1 className="title">delete User by id</h1>
          <form onSubmit={handleDelete} className="form" action="post.php">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <span className="sr-only">First Name</span>
                  <input
                    onChange={handleChangeDelete}
                    type="text"
                    name="id"
                    placeholder="user Id"
                    className="form-input"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="Delete" className="form-submit" />
            </div>
          </form>
        </div>
      </section>
      <section className="form-section">
        <div className="form-wrapper">
          <h1 className="title">borrwed book</h1>
          <form onSubmit={handleBorrwed} className="form" action="post.php">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <span className="sr-only">First Name</span>
                  <input
                    onChange={handleChangeDelete}
                    type="text"
                    name="userID"
                    placeholder="user Id"
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <span className="sr-only">First Name</span>
                  <input
                    onChange={handleChangeDelete}
                    type="text"
                    name="bookId"
                    placeholder="book Id"
                    className="form-input"
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="borrwed" className="form-submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
