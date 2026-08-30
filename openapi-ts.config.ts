import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig([
  {
    input: "./openapi/foo.yaml",
    output: "./src/api/foo/generated",
    plugins: ["@hey-api/client-next"],
  },
  {
    input: "./openapi/bar.yaml",
    output: "./src/api/bar/generated",
    plugins: ["@hey-api/client-next"],
  },
]);
