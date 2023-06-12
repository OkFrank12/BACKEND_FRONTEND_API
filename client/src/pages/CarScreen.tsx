import React from "react";
import images from "../assets/pexels-mike-bird-120049.jpg";
import styled from "styled-components";
import image from "../assets/pexels-viktor-lundberg-754595.jpg";
import { SiMercedes } from "react-icons/si";
import { createCarApi, getCarApi } from "../utils/CarApi";

const CarScreen = () => {
  const [car, setCar] = React.useState<string>("");
  const [car1, setCar1] = React.useState([]);

  React.useEffect(() => {
    getCarApi().then((res: any) => {
      setCar1(res);
    });
  }, []);

  console.log(car1);
  return (
    <div>
      <Container src={image} />
      <Main>
        <LeftHolder>
          <BigText>Revolutionizing the world with Strong Rides</BigText>
          <SmallText>
            Buy your best and affordable rides on FArunner, long lasting
            durability, speed at its peak with swift driving capabilities and
            fives years lasting guarantee.
          </SmallText>
          <Button
            onClick={() => {
              createCarApi({
                model: car,
                price: car,
                color: car,
              });
              setCar("");

              window.location.reload();
            }}
          >
            Check Out The Best Rides
          </Button>
        </LeftHolder>
      </Main>
      {car1?.map((el: any) => (
        <Container2>
          <Image src={images} />
          <Div>
            <Text>
              <span>{el.model}</span> Model <SiMercedes />
            </Text>
            <Text>{el.price}</Text>
            <Text>{el.color}</Text>
          </Div>
        </Container2>
      ))}
    </div>
  );
};

export default CarScreen;

const Div = styled.div``;

const Container2 = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  width: 700px;
  border-radius: 5px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 3;

  span {
    color: darkblue;
  }
`;

const Container = styled.img`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  left: 30px;
  align-items: center;
  height: 100%;
  position: absolute;
  top: -30px;
`;

const LeftHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const BigText = styled.div`
  font-weight: 700;
  color: darkblue;
  font-size: 60px;
  width: 900px;
`;

const SmallText = styled.div`
  font-weight: 400;
  font-size: 30px;
  color: white;
  width: 870px;
  margin: 15px 0;
`;

const Button = styled.div`
  padding: 5px;
  width: 400px;
  height: 35px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 25px;
  color: darkblue;
  font-weight: bold;
  transition: all 350ms;

  :hover {
    transform: translate(0, -3px);
  }
`;
