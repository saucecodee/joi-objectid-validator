"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.objectidValidator = void 0;
var assert_1 = __importDefault(require("assert"));
var bson_1 = require("bson");
function objectidValidator(Joi, message) {
    assert_1["default"](Joi && Joi.object, 'you must pass Joi as an argument');
    return Joi.custom(function (value, helper) {
        if (typeof value === 'string' && value.length !== 24)
            return helper.message(message);
        if (bson_1.ObjectID.isValid(value))
            return value;
        return helper.message(message);
    });
}
exports.objectidValidator = objectidValidator;
//# sourceMappingURL=index.js.map