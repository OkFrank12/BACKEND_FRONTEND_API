import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/HomeScreen";
import WeatherScreen from "../pages/WeatherScreen";
import CarScreen from "../pages/CarScreen";
import BookScreen from "../pages/BookScreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "weather",
        element: <WeatherScreen />,
      },
      {
        index: true,
        path: "car",
        element: <CarScreen />,
      },
      {
        index: true,
        path: "book",
        element: <BookScreen />,
      },
    ],
  },
]);
