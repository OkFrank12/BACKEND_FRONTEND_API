import { useState, useEffect } from "react";
import { AiOutlineCloud, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { createWeatherForcast, getWeatherForcast } from "../utils/ApiWeather";

const WeatherScreen = () => {
  const [weather, setWeather] = useState([]);
  const [weatherString, setWeatherString] = useState<string>("");
  const [weather1, setWeather1] = useState<string>("");
  useEffect(() => {
    getWeatherForcast().then((res: any) => {
      setWeather(res);
    });
  }, []);

  console.log(weather);
  return (
    <div>
      <Container>
        <Main>
          <Headings>
            <Text>
              Today's Forcast<span>Franklin's Project</span>
            </Text>
            <Hold>
              <Input
                placeholder="Search Location"
                type="text"
                value={weatherString}
                onChange={(e) => {
                  setWeatherString(e.target.value);
                }}
              />
              <Icon
                onClick={() => {
                  createWeatherForcast({ location: weather1 });
                  setWeather1("");

                  window.location.reload();
                }}
              />
            </Hold>
          </Headings>
          {/* <VideoClip>
            <Video/>
          </VideoClip> */}
          <Holder>
            {weather?.map((el: any) => (
              <Panel>
                <Title>Forcast Panel</Title>
                <Location
                  style={{ fontSize: "20px", textTransform: "capitalize" }}
                >
                  Location: {el.location}
                </Location>
                <Location>Temperature: {el.temperature}</Location>
                <Location>Humidity: {el.humidity}</Location>
                <Location>Pressure: {el.pressure}</Location>
                <Location>Wind: {el.wind}</Location>

                <AiOutlineCloud
                  style={{
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                    fontSize: "70px",
                    color: "dodgerblue",
                    cursor: "pointer",
                  }}
                />
              </Panel>
            ))}
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default WeatherScreen;

// const VideoClip = styled.div`
//   width: 100%;
//   height: 500px;
//   background-color: lightgrey;
//   object-fit: cover;
//   display: flex;
//   border-radius: 20px;
// `;

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
// `;

const Holder = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  font-weight: 700;
  top: -14px;
  background-color: white;
  padding: 0px 10px;
  color: dodgerblue;
`;

const Hold = styled.div`
  width: 400px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const Icon = styled(AiOutlineSearch)`
  font-size: 40px;
  color: grey;
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 340px;
  outline: 0;
  font-size: 17px;
  font-family: "Cambria";
  font-weight: bold;
  color: grey;
  height: 85%;
  border-radius: 5px;
  border: 0;

  ::placeholder {
    font-size: 17px;
    font-family: "Cambria";
    font-weight: bold;
  }

  :focus {
    outline: 1px solid dodgerblue;
  }
  padding: 5px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(239, 239, 239);
  background: linear-gradient(
    30deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(30, 144, 255, 1) 50%
  );
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  margin-top: 80px;
  width: 90%;
  height: 100%;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: 700;
  font-style: oblique;

  span {
    font-size: 17px;
    font-weight: 500;
    color: white;
    margin-left: 10px;
  }
`;

const Panel = styled.div`
  width: 25%;
  min-height: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid silver;
  position: relative;
  margin: 20px 20px;
`;

const Location = styled.div`
  line-height: 2;
`;
