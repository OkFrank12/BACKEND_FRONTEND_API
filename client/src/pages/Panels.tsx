import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import imgs from "../assets/rich dad.jpg";
import styled from "styled-components";

const Panels = () => {
  return (
    <div>
      <Container>
        <Main>
          <BoxHolder>
            <Box>
              <Img src={imgs} />
            </Box>
            <Text
              style={{
                display: "flex",
                color: "grey",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Rich Dad Poor Dad
              <AiOutlineStar fontSize="20px" />
            </Text>
            <Text>Robert Kiyosaki</Text>
            <Text>Novel, 2005.</Text>
          </BoxHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Panels;

const Img = styled.img`
  width: 98%;
  height: 98%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const BoxHolder = styled.div``;

const Box = styled.div`
  width: 220px;
  height: 250px;
  object-fit: cover;
  background-color: grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  rotate: calc(2deg);
  transition: all 350ms;

  :hover {
    transform: translate(0, -3px);
    cursor: pointer;
  }
`;

const Text = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;
