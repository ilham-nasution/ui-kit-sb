import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "#7c9473" : "white")};
  padding: 8px 16px;
  border-radius: 4px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #cdd0cb")};

  &:focus {
    box-shadow: ${({ primary }) =>
      primary ? "0 0 0 2px #cfdac8" : "0 0 0 2px #cdd0cb"};
    outline: none;
  }
`;

export const Button = ({ label, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};
