import { Form } from "../../components/Form";
import { Layout } from "../../components/Layout";

import { Content } from "./styles";

function UpdateUser() {
  return (
    <Layout>
      <Content>
        <h2>Update User</h2>

        <Form type="update" />
      </Content>
    </Layout>
  );
}

export { UpdateUser };
