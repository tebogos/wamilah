const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).send("Please fill in form correctly");
      }

      if (!req.value)
       {
            req.value = {};
         }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    mailerForm: Joi.object().keys({
      email: Joi.string().email().required(),
      message: Joi.string().required(),
      name: Joi.string().required()
    })
  }
}
