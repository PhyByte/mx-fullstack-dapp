// src/functions.test.ts
import { assert, test } from "vitest";
import { selectDependingOnNetwork } from ".";
import { Network } from "./types";

test("selects mainnet value when network is mainnet", () => {
  const result = selectDependingOnNetwork(Network.MAINNET, "mainnet", "devnet");
  assert.equal(result, "mainnet");
});

test("selects devnet value when network is devnet", () => {
  const result = selectDependingOnNetwork(Network.DEVNET, "mainnet", "devnet");
  assert.equal(result, "devnet");
});

test("throws error when network is invalid", () => {
  assert.throws(() =>
    selectDependingOnNetwork("invalid" as Network, "mainnet", "devnet")
  );
});
