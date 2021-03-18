# Joi Objectid validator

MongoDB ObjectId validator for Joi.


### Installation

```
npm install joi-objectid-validator --save
```

## Usage

The `joi-objectid-validator` validates that the value is a valid MongoDB ObjectId so it accepts either a 24 character hexadecimal String or an ObjectId()


```js
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid-validator')(Joi)

const schema = Joi.object({
  id: Joi.objectId("Custom error message"),
})

```


### Development

####  Testing

- `npm test`

## License

[MIT](https://github.com/saucecodee/joi-objectid-validator/blob/master/LICENSE)
