import express, { Application, Request, Response } from "express";
import cors from "cors";
import weather from "./router/weatherRouter";

const port: number = 4500;

const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/weather", weather)

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit the Weather API endpoint",
      });
    } catch (error) {}
  });

const server = app.listen(port, () => {
  console.log("Weather server is online");
});

process.on("uncaughtException", (err: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
