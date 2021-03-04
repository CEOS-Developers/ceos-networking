import React, { useState } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";

export default function MultiPillSelector({ options, onChange }) {
  const [selected, setSelected] = useState([]);

  return (
    <PillSelectorWrapper>
      {options.map((option, index) => (
        <Pill
          key={index}
          isActive={selected.includes(index)}
          onClick={() => {
            const nextSelected = _.xor(selected, [index]);
            setSelected(nextSelected);
            if (onChange) {
              onChange(
                nextSelected,
                nextSelected.map((i) => options[i])
              );
            }
          }}
        >
          {option?.label}
        </Pill>
      ))}
    </PillSelectorWrapper>
  );
}

export const PillSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Pill = styled.div`
  display: inline-flex;
  font-size: 4vw;

  border-radius: 1.2vw;
  padding: 1vw;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(p) =>
    p.isActive
      ? css`
          background-color: #333;
          border: 1px solid white;
          color: white;
        `
      : css`
          background-color: white;
          border: 1px solid #333;
          color: #333;
        `}

  &:not(:last-child) {
    margin-right: 0.5vw;
  }
`;
