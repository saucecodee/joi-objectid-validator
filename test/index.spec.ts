import { objectidValidator } from "../src";
import Joi from "joi"

test("hello", () => {
   expect(objectidValidator(Joi, "Invalid Object Id")("e7839398383u")).toThrow();
});