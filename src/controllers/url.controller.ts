import { NextFunction, Request, Response } from "express";
import { URL } from "../models";
import { IURL } from "../types";

export const getURLs = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const urls: IURL[] = await URL.find();
    response.status(200).json({ urls: urls });
  } catch (error) {
    throw error;
  }
};

export const createURL = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const body = request.body as Pick<IURL, "full" | "tiny" | "visits">;

    const newURL = await new URL({
      full: body.full,
      tiny: body.tiny,
      visits: body.visits,
    }).save();

    const urls: IURL[] = await URL.find();

    response.status(201).json({ message: "URL created!", url: newURL, urls });
  } catch (error) {
    throw error;
  }
};
