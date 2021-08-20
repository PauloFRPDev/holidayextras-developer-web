import { useRef } from "react";
import { Container } from "./styles";

function Form() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    // todo
  }

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <label>
        Email <input type="text" placeholder="Please write your email" />
      </label>

      <label>
        Given Name <input type="text" placeholder="Please write your given name" />
      </label>

      <label>
        Family Name <input type="text" placeholder="Please write your family name" />
      </label>

      <button type="submit">CRIAR</button>
    </Container>
  );
}

export { Form };
