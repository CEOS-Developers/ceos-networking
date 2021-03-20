import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../fetchers";
import Profile from "./Profile";


export default function ProfileList() {
  // fetch profiles
  const { data: profiles, error } = useSWR("/api/v1/profiles", fetcher);
  console.log(profiles)
  return (
    <Wrapper>
      {profiles?.map((profile) => (
        <Profile profile={profile} key={profile.id} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
