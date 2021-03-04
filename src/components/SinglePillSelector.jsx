import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PillSelectorWrapper, Pill } from "./MultiPillSelector";

export default function SinglePillSelector({ options, onChange }) {
  const [selected, setSelected] = useState(null);
  return (
    <PillSelectorWrapper>
      {options.map((option, index) => (
        <Pill
          key={index}
          isActive={index === selected}
          onClick={() => {
            setSelected(index);
            if (onChange) {
              onChange(index, option);
            }
          }}
        >
          {option?.label}
        </Pill>
      ))}
    </PillSelectorWrapper>
  );
}
