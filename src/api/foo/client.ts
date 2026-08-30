import { createClient } from "./generated/client";

export function createFooClient() {
  return createClient({
    baseUrl: "https://foo.example.com",
  });
}
