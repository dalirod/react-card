import React, { useState } from "react";
import "../../styles/index.css";
import gravatar from "../../utils/gravatar.js";
const userInitialState = {
  name: "",
  email: "",
  github: "",
};

const Home = () => {
  const [user, setUser] = useState(userInitialState);
  const [allUser, setAllUser] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.name.trim() != "" &&
      user.email.trim() != "" &&
      user.github.trim() != ""
    ) {
      setAllUser([...allUser, user]);
      setUser(userInitialState);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="container mt-5">
        {allUser.map((card, index) => {
          return (
            <div key={index} className="row justify-content-center mb-3">
              <div className="col-12 col-md-6 border border-danger home__card">
                <div>
                  <img src={gravatar(card.email)} alt="" />
                </div>
                <div>
                  <p>Nombre: {card.name} </p>
                  <p>Email: {card.email} </p>
                  <p>Github: {card.github} </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {error && (
              <div className="alert alert-danger">
                Todos los campos son necesarios.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group my-2">
                <label>Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group my-2">
                <label>Github:</label>
                <input
                  type="text"
                  placeholder="Github"
                  className="form-control"
                  name="github"
                  value={user.github}
                  onChange={handleChange}
                />
              </div>

              <div className="my-3">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
