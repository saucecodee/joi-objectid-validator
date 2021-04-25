# Joi Objectid validator

MongoDB ObjectId validator for Joi.


### Installation

```
npm install joi-objectid-validator --save
```

## Usage

The `joi-objectid-validator` validates only valid MongoDB ObjectId so it accepts either a 24 character hexadecimal String or an ObjectId type


```js
const Joi = require('@hapi/joi')
// Add joi-objectid-validator to Joi object
Joi.objectId = require('joi-objectid-validator')(Joi)

const schema = Joi.object({
  id: Joi.objectId("Custom error message here"),
})


// VALID values
//
// new ObjectID()                           
// new ObjectID("ccd563780134d5678901234a")  
// '6053a49e634e0ec405295ba8'                


// INVALID values
//
// '$bcd56778c9a345678901234'
// ' bcd56789012345678901234'
// '6053a49e634e0ec405g95ba8'
// 748397383836789234567823  
// { }
// null
```


### Development

####  Testing

- `npm test`

## License

[MIT](https://github.com/saucecodee/joi-objectid-validator/blob/main/LICENSE)
