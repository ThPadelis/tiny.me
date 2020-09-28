import { Document } from "mongoose";

export interface IURL extends Document {
  full: string;
  tiny: string;
  visits: number;
}
