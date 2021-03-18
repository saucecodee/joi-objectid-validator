"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.objectidValidator = void 0;
var assert_1 = __importDefault(require("assert"));
// import { ObjectID } from "bson"
var bson_1 = require("bson");
function objectidValidator(Joi) {
    assert_1["default"](Joi && Object.prototype.toString.call(Joi.types) == "[object Function]", 'Invalid Joi object');
    return function objectId(message) {
        return Joi.custom(function (value, helper) {
            if (value.constructor.name !== "ObjectId" && typeof value !== 'string')
                return helper.message({ custom: message });
            if (typeof value === 'string' && value.length !== 24)
                return helper.message({ custom: message });
            if (value && bson_1.ObjectID.isValid(value))
                return value;
            return helper.message({ custom: message });
        });
    };
}
exports.objectidValidator = objectidValidator;
//# sourceMappingURL=index.js.map