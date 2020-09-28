import { model, Schema } from "mongoose";
import { IURL } from "../types";

export const URLSchema: Schema = new Schema(
  {
    full: {
      type: String,
      required: true,
    },
    tiny: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

export const URL = model<IURL>("URL", URLSchema);
