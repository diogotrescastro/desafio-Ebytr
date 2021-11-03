const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const schema = Joi.object().keys({
  title: Joi.string().required(),
  status: Joi.string().required(),
  edit: Joi.boolean().required(),
});


const schemaWithID = Joi.object().keys({
  title: Joi.string().required(),
  status: Joi.string().required(),
  edit: Joi.boolean().required(),
  _id: Joi.objectId().required(),
});

const validate = async (req, res, next) => {
  const validate = schema.validate(req.body);
  if (validate.error) {
    return res.status(401).json({
      message: 'Ocorreu um erro: Faltou algo em sua requisição',
    });
  }
  return next();
};

const validateWithID = async (req, res, next) => {
  const validate = schemaWithID.validate(req.body);
  if (validate.error) {
    return res.status(401).json({
      message: 'Ocorreu um erro: Faltou algo em sua requisição',
    });
  }
  return next();
};


module.exports = { validate, validateWithID };