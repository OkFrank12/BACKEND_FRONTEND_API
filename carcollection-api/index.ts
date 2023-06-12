import express, { Application, Request, Response } from "express";
import cors from "cors";
import cars from "./router/carRouter";

const port: number = 3200;

const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/cars", cars)

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on the car collection endpoint",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Not found",
      });
    }
  });

const server = app.listen(port, () => {
  console.log("Server is live");
});

process.on("uncaughtException", (err: any) => {
  console.log("Server is shutting down because of an uncaught exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of an unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
