import { createClient } from "contentful-management";
import { CF_SPACE_ID, CF_CMA_TOKEN } from "./cma-config";

if (!CF_SPACE_ID || !CF_CMA_TOKEN) {
  throw new Error(
    "Please define `CF_SPACE_ID` and `CF_CMA_TOKEN` environment variables"
  );
}

//Define constants
export const LOCALE = "en-US";
export const ENVIORNMENT_ID = "master";

//Create client
export const cmaClient = createClient(
  {
    space: CF_SPACE_ID,
    accessToken: CF_CMA_TOKEN,
  },
  {
    type: "plain",
  }
);
