let Joi = require('joi');


exports.parents_info = (obj) =>
{
     let result = Joi.validate(obj, schema);
   
     return result.error;
}

exports.child_info = (obj) =>
{
     let result = Joi.validate(obj, schema);

     return result.error;
}


exports.grandChild_info = (obj) =>
{
     let result = Joi.validate(obj, schema);

     return result.error;
}

const schema = Joi.object()

  .keys({
    family_id: Joi.string()
                  .trim()
                  .alphanum()
                  .required(),

           id: Joi.string()
                   .trim()
                  .alphanum()
                  .required(),

         name: Joi.string()
                  .trim()
                  .required(),

   child_name: Joi.string()
                  .trim(),

   gchild_name: Joi.string()
                   .trim(),

  parent_name : Joi.string()
                    .trim(),

  gparent_name: Joi.string()
                    .trim(),
  })


