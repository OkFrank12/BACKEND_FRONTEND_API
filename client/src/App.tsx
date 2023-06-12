import { MainRouter } from "./router/Mainrouter";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
};

export default App;
