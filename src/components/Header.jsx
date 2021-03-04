import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../assets/logo.png";

export default function Header() {
  const history = useHistory();
  return (
    <Wrapper>
      <Logo
        src={logoImage}
        onClick={() => {
          history.push("/");
        }}
      ></Logo>
      <NewProfileButton
        onClick={() => {
          history.push("/new-profile");
        }}
      >
        프로필 작성하기
      </NewProfileButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 5%;
  height: 55px;

  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

const NewProfileButton = styled.button`
  all: unset;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: var(--ceos);
  color: white;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
`;
