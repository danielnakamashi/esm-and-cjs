import { add } from "./add.js";
import { sub } from "./sub";

function double(x: number): number {
  return add(x, x);
}

export { double, sub };
