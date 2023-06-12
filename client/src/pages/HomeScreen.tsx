import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCalculator } from "react-icons/ai";
import { createBmiCalculator, getBmiCalculator } from "../utils/Api";
const HomeScreen = () => {
  const [bmi, setBmi] = useState<number>(0);
  const [bmiA, setBmiA] = useState<string>("");
  const [bmi1, setBmi1] = useState([]);

  useEffect(() => {
    getBmiCalculator().then((res: any) => {
      setBmi1(res);
    });
  }, []);

  console.log(bmi1);
  return (
    <div>
      <Container>
        <Main>
          <Card>
            <TextHolder>
              <BigText>BMI Calculator</BigText>
              <SmallText>Franklin Projects</SmallText>
            </TextHolder>
            <BigBox>
              <Text>Parameters</Text>
              <Holder>
                <Height>
                  <Texts>Height :</Texts>
                  <Input
                    placeholder="in m"
                    type="number"
                    value={bmi}
                    onChange={(e: any) => {
                      setBmi(e.target.value);
                    }}
                  />
                </Height>
                <Height>
                  <Texts>Weight :</Texts>
                  <Input
                    placeholder="in kg"
                    type="number"
                    value={bmiA}
                    onChange={(e) => {
                      setBmiA(e.target.value);
                    }}
                  />
                </Height>
              </Holder>
              <Button
                onClick={() => {
                  createBmiCalculator({
                    weight: bmiA,
                    height: bmiA,
                    sex: bmiA,
                  });
                  setBmiA("");

                  window.location.reload();
                }}
              >
                <Icon />
                <Title>Calculate your BMI</Title>
              </Button>
            </BigBox>
            <BigBox1 bg="">
              <Text style={{ fontSize: "17px", fontWeight: "normal" }}>
                Results
              </Text>
              {bmi1?.map((el: any) => (
                <Title>
                  {el.sex} is in {el.bmiStatus} and your BMI is {el.bmi}
                </Title>
              ))}
            </BigBox1>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const BigBox1 = styled.div<{
  bg: string;
}>`
  width: 650px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  min-height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  padding: 10px;
  font-size: 20px;
  color: ${({ bg }) => bg};
`;

const Button = styled.div`
  width: 380px;
  height: 50px;
  border-radius: 3px;
  border: 3px solid dodgerblue;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: grey;
  font-weight: 700;
  cursor: pointer;

  :hover {
    border: 3px solid grey;
    color: dodgerblue;
  }
`;

const Icon = styled(AiOutlineCalculator)`
  font-size: 45px;
  rotate: calc(25deg);
`;

const Title = styled.div``;

const Holder = styled.div``;

const Height = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  color: grey;
  margin: 10px 10px;
  justify-content: space-between;
  width: 140px;
`;

const Texts = styled.div``;

const Input = styled.input`
  width: 50px;
  height: 30px;
  border: 0;
  outline: 1px solid grey;
  border-radius: 3px;
  padding-left: 5px;

  ::placeholder {
    font-weight: bold;
    font-size: 15px;
  }

  :focus {
    outline: 1px solid dodgerblue;
  }
`;

const TextHolder = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Card = styled.div`
  width: 700px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  margin-top: 10px;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: dodgerblue;
`;

const SmallText = styled.div`
  color: grey;
`;

const BigBox = styled.div`
  width: 650px;
  margin-bottom: 20px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  top: -14px;
  left: 5px;
  background-color: white;
  color: grey;
`;
