import { Link } from "react-router-dom";

import { Container } from "./styles";

function SideBar() {
  return (
    <Container>
      <span>Users</span>

      <div>
        <Link to="/">
          Create Users
        </Link>

        <Link to="/list_users">
          List Users
        </Link>
      </div>
    </Container>
  );
}

export { SideBar };
