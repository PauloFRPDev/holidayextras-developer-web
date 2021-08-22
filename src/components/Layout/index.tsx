import { ReactNode } from "react";

import { SideBar } from "../SideBar";

import { Container } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <SideBar />

      {children}
    </Container>
  );
}

export { Layout };
