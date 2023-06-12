import React from "react";
import styled from "styled-components";

interface iBtn {
  title?: string;
}

const Button: React.FC<iBtn> = ({ title }) => {
  return (
    <div>
      <Container>{title}</Container>
    </div>
  );
};

export default Button;

const Container = styled.div`
`;
