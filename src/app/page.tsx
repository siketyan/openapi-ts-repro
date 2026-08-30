"use client";

import { type JSX, useEffect, useMemo } from "react";

import { createBarClient } from "../api/bar/client";
import { listBars } from "../api/bar/generated";
import { createFooClient } from "../api/foo/client";
import { getFoo } from "../api/foo/generated";

export default function Page(): JSX.Element {
  const fooClient = useMemo(() => createFooClient(), []);
  const barClient = useMemo(() => createBarClient(), []);

  useEffect(() => {
    Promise.all([
      getFoo({ client: fooClient, path: { fooId: "foo" } }),
      listBars({ client: barClient }),
    ]);
  }, [fooClient, barClient]);

  return <h1>Hello, world!</h1>;
}
