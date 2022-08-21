import { test, assert } from "vitest"
import { name } from "../src"

test("simple", () => {
  assert.equal(name, "test-ts-lib-template")
})