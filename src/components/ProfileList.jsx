import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const profiles = [
  {
    name: "정시원",
    gen: 12,
    part: ["개발", "프론트", "운영진"],
    keywords: ["iOS", "Android", "INTP"],
    interests: ["스타트업", "웹개발", "프론트엔드"],
    imgSrc: "https://picsum.photos/seed/picsum1/300/300",
  },
  {
    name: "김효진",
    gen: 13,
    part: ["기획", "부회장"],
    keywords: ["iOS", "Android", "ENFP"],
    interests: ["스타트업", "마케팅"],
    imgSrc: "https://picsum.photos/seed/picsum3/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
  {
    name: "이재용",
    gen: 13,
    part: ["디자인", "총무", "운영진"],
    keywords: ["iOS", "SwiftUI", "MBTI"],
    interests: ["아요", "맥북", "사과"],
    imgSrc: "https://picsum.photos/seed/picsum2/300/300",
  },
];

export default function ProfileList() {
  return (
    <Wrapper>
      {profiles.map((profile) => (
        <Profile profile={profile} key={profile.name} />
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
