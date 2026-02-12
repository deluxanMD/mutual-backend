import express, { Request, Response } from "express";

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "server is running healthy" });
});

export default app;
