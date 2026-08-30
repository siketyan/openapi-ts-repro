import { createClient } from "./generated/client";

export function createBarClient() {
  return createClient({
    baseUrl: "https://bar.example.com",
  });
}
