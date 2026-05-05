import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Login = (props) => {
  const [user, setUser] = useState({ name: "", id: "" });

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const login = () => {
    props.login(user);
    props.history.push("/movies");
  };

  return (
    <Container className="mt-3">
      <h4>Login</h4>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            value={user.name}
            onChange={onChangeUser}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            required
            name="id"
            value={user.id}
            onChange={onChangeUser}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={!user.name.trim() || !user.id.trim()}
          onClick={login}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
