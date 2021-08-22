import { useState, useEffect } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { api } from "../../service/api";

import { Container, Content, UserData } from "./styles";

interface UserProps {
  id: string;
  email: string;
  givenName: string;
  familyName: string;
}

function ListUsers() {
  const [users, setUsers] = useState<UserProps[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  const handleEdit = (user: UserProps) => {
    history.push(`/update_user/${user.id}`, {
      params: {
        user,
      },
    });
  };

  const handleDelete = async (user_id: string) => {
    await api.delete(`/users/${user_id}`);

    const updatedUsers = users.filter((user) => user.id !== user_id);

    setUsers(updatedUsers);
  };

  return (
    <Layout>
      <Container>
        <Content>
          {users.map((user) => (
            <UserData key={user.id}>
              <div>
                <span>
                  {user.givenName} {user.familyName}
                </span>
                <small>{user.email}</small>
              </div>
              <nav>
                <div onClick={() => handleEdit(user)}>
                  <FiEdit />
                </div>
                <div onClick={() => handleDelete(user.id)}>
                  <FiTrash />
                </div>
              </nav>
            </UserData>
          ))}
        </Content>
      </Container>
    </Layout>
  );
}

export { ListUsers };
