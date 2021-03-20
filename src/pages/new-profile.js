import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import MultiPillSelector from "../components/MultiPillSelector";
import SinglePillSelector from "../components/SinglePillSelector";
import CreatableSelect from "react-select/creatable";
import Layout from "../templates/Layout";
import useSWR from "swr";
import { fetcher } from "../fetchers";
import { initial } from "lodash";

const parts = [
  { value: "기획", label: "기획" },
  { value: "디자인", label: "디자인" },
  { value: "프론트", label: "프론트" },
  { value: "백", label: "백" },
];

export default function NewProfilePage() {
  // form inputs
  const { register, handleSubmit, watch, errors } = useForm();
  const [part, setPart] = useState(null);
  const [interests, setInterests] = useState([]);
  const [keywords, setKeywords] = useState([]);

  // set keywords
  let { data: initialKeywords, error } = useSWR("/api/v1/keywords", fetcher);
  initialKeywords = initialKeywords?.map((k) => ({ value: k.id, label: k.name }))

  useEffect(() => {}, []);
  return (
    <Layout alignItems="center">
      <Title>프로필 작성하기</Title>
      <SubTitle>프로필 작성을 통해 본인을 알려보세요!</SubTitle>
      <CustomForm
        onSubmit={handleSubmit((data) => {
          console.log({ ...data, part, interests, keywords });
        })}
      >
        <Question>
          <Label>이름</Label>
          <Input
            name="name"
            ref={register}
            placeholder="이름을 입력하세요"
            required
          ></Input>
        </Question>
        <Question>
          <Label>파트</Label>
          <CustomSelect
            name="part"
            options={parts}
            onChange={(data) => {
              setPart(data);
            }}
          ></CustomSelect>
        </Question>
        <Question>
          <Label>기수</Label>
          <Input
            name="gen"
            type="number"
            inputmode="numeric"
            pattern="[0-9]*"
            placeholder="기수를 입력하세요 (ex) 13"
            ref={register}
            required
          ></Input>
        </Question>
        <Question>
          <Label>키워드</Label>
          <CustomCreatableSelect
            isClearable
            name="keywords"
            isMulti
            placeholder="자신을 나타낼 수 있는 키워드"
            options={initialKeywords}
            onChange={(values) => {
              setKeywords(values);
            }}
          ></CustomCreatableSelect>
        </Question>
        <Question>
          <Label>간단한 자기소개</Label>
          <LongInput
            name="selfIntroduction"
            placeholder="3줄 이내로 간단하게"
            ref={register}
          />
        </Question>
        <Question>
          <Label>저는 이런 것을 좋아해요</Label>
          <LongInput
            name="interest"
            placeholder="3줄 이내로 간단하게"
            ref={register}
          />
        </Question>
        <SaveButton type="submit">저장하기</SaveButton>
      </CustomForm>
    </Layout>
  );
}

const Title = styled.h1`
  padding-top: 4vh;
  font-size: 7vw;
  margin: 0;
  margin-bottom: 2vw;
`;

const SubTitle = styled.span`
  font-size: 3vw;
  margin-bottom: 2vw;
`;

const CustomForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img``;

const Question = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 3vw;
`;

const Label = styled.label`
  font-size: 4vw;
  margin-bottom: 2.5vw;
`;

const Input = styled.input`
  all: unset;

  width: 100%;
  padding: 8px;
  font-size: 4vw;
  text-align: center;
  border-radius: 4px;

  border: 1px solid hsl(0, 0%, 80%);
  outline-color: #2684ff;
`;

const LongInput = styled.textarea`
  all: unset;

  width: 100%;
  padding: 8px;
  font-size: 4vw;
  text-align: center;
  border-radius: 4px;

  border: 1px solid hsl(0, 0%, 80%);
  outline-color: #2684ff;
`;

const CustomSelect = styled(Select)`
  font-size: 4vw;
  width: 100%;
  border-radius: 8px;
`;

const CustomCreatableSelect = styled(CreatableSelect)`
  font-size: 4vw;
  width: 100%;
  border-radius: 8px;
`;

const SaveButton = styled.button`
  all: unset;
  font-size: 3.5vw;
  color: white;
  background-color: #333;
  padding: 1vw;
  border-radius: 1vw;
  cursor: pointer;
  margin-bottom: 4vh;
`;
