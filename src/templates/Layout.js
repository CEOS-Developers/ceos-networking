import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function Layout({ children, alignItems, justifyContent }) {
  return (
    <Wrapper>
      <Header></Header>
      <Content style={{ alignItems, justifyContent }}>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 6%;
`;
