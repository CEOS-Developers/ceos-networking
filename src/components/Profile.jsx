import React from "react";
import styled from "styled-components";

const convertPartEnumToText = (partEnum) => {
  switch (partEnum) {
    case 'DEVELOP':
      return '개발'
    case 'PLAN':
      return '기획'
    case 'DESIGN':
      return '디자인'
  }
}

export default function Profile({ profile, children }) {
  return (
    <Wrapper>
      <ProfileImageContainer>
        <ProfileImage src={profile.image}></ProfileImage>
      </ProfileImageContainer>
      <ProfileContent>
        <ProfileMetadata>
          <ProfileTitle>
            <Name>{profile.name}</Name>
            <Part>
              {profile.gen}기/{convertPartEnumToText(profile.part)}
            </Part>
          </ProfileTitle>
          <KeywordList>
            {profile.keywords.map((keyword) => (
              <Keyword key={keyword.id}>#{keyword.name}</Keyword>
            ))}
          </KeywordList>
        </ProfileMetadata>
      </ProfileContent>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  all: unset;
  box-shadow: 1px 6px 19px -2px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 540px) {
    flex-direction: row;
    height: 110px;
  }
`;

const ProfileImageContainer = styled.div`
  width: 100%;
  height: 300px;

  overflow: hidden;
  @media only screen and (max-width: 540px) {
    width: 110px;
    height: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;

  @media only screen and (max-width: 540px) {
    width: unset;
    height: 100%;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const ProfileContent = styled.div`
  padding: 10px 12.5px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileMetadata = styled.div`
  height: 70px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 540px) {
    height: unset;
  }
`;

const ProfileFooter = styled.div`
  @media only screen and (max-width: 540px) {
  }
`;

const ProfileTitle = styled.div`
  margin-bottom: 3px;
`;

const Name = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 5px;
`;

const Part = styled.small`
  font-size: 0.8rem;
`;

const KeywordList = styled.div`
  display: flex;
  flex-direction: row;
`;

const Keyword = styled.span`
  font-size: 0.9rem;
  color: var(--coral);
  &:not(:last-child) {
    margin-right: 3px;
  }
`;

const InterestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 3px 0;
`;

const Interest = styled.span`
  display: inline-block;

  background-color: black;
  padding: 3px 5px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 3px;

  color: var(--coral);
  &:not(:last-child) {
    margin-right: 3px;
  }
`;
