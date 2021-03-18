
import assert from "assert";
import { ObjectID } from "bson"
import { CustomHelpers, ErrorReport, LanguageMessages, Root } from "joi";


export function objectidValidator(Joi: Root, message: LanguageMessages) {
   assert(Joi && Joi.object, 'you must pass Joi as an argument');

   return Joi.custom((value: string | ObjectID, helper: CustomHelpers): string | ObjectID | LanguageMessages | ErrorReport => {

      if (typeof value === 'string' && value.length !== 24)
         return helper.message(message)

      if (value && ObjectID.isValid(value))
         return value;

      return helper.message(message)
   })
}