import { objectidValidator } from "../src";
import Joi from "joi"
import assert from "assert"
import { ObjectID } from "bson";


describe('joi-objectid-validator', function () {
   it('exports a function', function (done) {
      assert.strictEqual('function', typeof objectidValidator);
      done();
   });

   it('expects to receive a valid Joi module', function (done) {
      // @ts-ignore
      assert.throws(objectidValidator);
      done();
   });

   it('returns a validator function', function (done) {
      const objectid = objectidValidator(Joi);
      assert.strictEqual('function', typeof objectid);
      done();
   });

   it('requires valid 24 char hex string or new ObjectID()', function (done) {
      const objectid = objectidValidator(Joi);

      const testCases = [
         { val: new ObjectID(), pass: true },
         { val: new ObjectID(), pass: true },
         { val: new ObjectID("ccd563780134d5678901234a"), pass: true },
         { val: '$bcd56789012345678901234', pass: false },
         { val: ' bcd56789012345678901234', pass: false },
         { val: '6053a49e634e0ec405g95ba8', pass: false },
         { val: '6053a49e634e0ec405295ba8', pass: true },
         { val: 123456789012345678901234, pass: false },
         { val: { }, pass: false },
         { val: null, pass: false },
      ]

      const schema = objectid("test");

      testCases.forEach(function (test) {
         const result = schema.validate(test.val);
         assert(test.pass === !result.error, result.error);
      });

      done();
   });

   it('includes custom message for invalid value', function (done) {
      var objectid = objectidValidator(Joi);
      var schema = objectid('Invalid ObjectId');
      var result = schema.validate('blah');

      assert(result.error && result.error.message.indexOf('Invalid ObjectId') >= 0);

      done();
   });
});