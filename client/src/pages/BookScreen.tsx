import imgs1 from "../assets/download.jpg";
import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import imgs from "../assets/images.jpg";

import { createBookApi, getBookApi } from "../utils/BookApi";

const BookScreen = () => {
  const [book, setBook] = React.useState<string>("");
  const [book1, setBook1] = React.useState([]);

  React.useEffect(() => {
    getBookApi().then((res: any) => {
      setBook1(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <Main>
          <LeftSide>
            <BigText>Find Your Next Book, Check Out Our Next Sales</BigText>
            <SmallText>
              Our most <span>popular</span> and most <span>trending </span>books
              on FArunner. Check out our best sales now.
            </SmallText>
            <Button
              onClick={() => {
                createBookApi({
                  title: book,
                  author: book,
                  publicationYear: book,
                  genre: book,
                });
                setBook("");

                window.location.reload();
              }}
            >
              Explore now
            </Button>
          </LeftSide>
          <RightSide>
            <ImgHolder>
              <Img src={imgs1} />
            </ImgHolder>
          </RightSide>
        </Main>
      </Container>
      <Container1>
        <Main1>
          {book1.map((el: any) => (
            <BoxHolder>
              <Box>
                <Imgs src={imgs} />
              </Box>
              <div>
                <Text
                  style={{
                    display: "flex",
                    color: "grey",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  {el.title}
                  <AiOutlineStar fontSize="20px" />
                </Text>
                <Text>{el.author}</Text>
                <Text>
                  {el.genre}, {el.publicationYear}
                </Text>
              </div>
            </BoxHolder>
          ))}
        </Main1>
      </Container1>
    </div>
  );
};

export default BookScreen;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
  background-color: dodgerblue;
  width: 120px;
  height: 35px;
  color: white;
  font-weight: 400;
  transition: all 350ms;

  :hover {
    transform: translate(0, -3px);
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(239, 239, 239);
  background: linear-gradient(
    90deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(30, 144, 255, 1) 50%
  );
`;

const Main = styled.div`
  margin-top: 120px;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div``;

const BigText = styled.div`
  color: dodgerblue;
  font-size: 65px;
  font-weight: 700;
  width: 550px;
`;

const SmallText = styled.div`
  font-size: 20px;
  font-weight: 700;
  width: 550px;
  margin: 20px 0;
  color: grey;

  span {
    color: dodgerblue;
  }
`;

const RightSide = styled.div``;

const ImgHolder = styled.div`
  width: 450px;
  height: 500px;
  object-fit: contain;
`;

const Img = styled.img`
  width: 76%;
  border-radius: 20px;
  height: 90%;
  rotate: calc(20deg);
`;

const Imgs = styled.img`
  width: 98%;
  height: 98%;
  overflow: hidden;
`;

const Container1 = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main1 = styled.div`
  display: flex;
    margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
`;

const BoxHolder = styled.div`
  margin: 15px 15px;
`;

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
