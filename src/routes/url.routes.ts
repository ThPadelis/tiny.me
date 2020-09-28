import { Router } from "express";
import { createURL, getURLs } from "../controllers";

const URLRouter: Router = Router();

// Get all URLs
URLRouter.get("/url", getURLs);

// Create URL
URLRouter.post("/url", createURL);

export { URLRouter as URLrouter };
