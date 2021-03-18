
import assert from "assert";
// import { ObjectID } from "bson"
import { ObjectID } from "bson"
import { CustomHelpers, ErrorReport, LanguageMessages, Root } from "joi";


export function objectidValidator(Joi: Root) {
   assert(Joi && Object.prototype.toString.call(Joi.types) == "[object Function]", 'Invalid Joi object');

   return function objectId(message: string) {
      
      return Joi.custom((value: string | ObjectID, helper: CustomHelpers): string | ObjectID | LanguageMessages | ErrorReport => {

         if (value.constructor.name !== "ObjectId" && typeof value !== 'string')
            return helper.message({ custom: message })

         if (typeof value === 'string' && value.length !== 24)
            return helper.message({ custom: message })

         if (value && ObjectID.isValid(value))
            return value;

         return helper.message({ custom: message })
      })
   }
}