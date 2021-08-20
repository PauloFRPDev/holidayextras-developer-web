import { Form } from "../../components/Form";

import { Container, Content } from "./styles";

function Home() {

  return (
    <Container>
      <Content>
        <h2>Create User</h2>

        <small>IT LOOKS LIKE YOU DON'T HAVE ANY USERS CREATED YET</small>

        <Form />
      </Content>
    </Container>
  );
}

export { Home };
