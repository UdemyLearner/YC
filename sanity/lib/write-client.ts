import "server-only";

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, token } from "@/sanity/env";

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN, // Ensure this is correctly set
  useCdn: false,
  // projectId,
  // dataset,
  // apiVersion,
  // useCdn: false,
  // token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found");
}


