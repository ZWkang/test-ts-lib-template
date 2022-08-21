import { test, assert } from "vitest"
import { addTwo } from "../src"

test("simple", () => {
  assert.equal(addTwo(1), 3)


  assert.equal(addTwo(3), 5)
})