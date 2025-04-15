import Joi from 'joi';

export const contactSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
        .pattern(/^\+?\d{10,15}$/)
        .required()
        .messages({ 'string.pattern.base': 'Numéro de téléphone invalide' }),
    address: Joi.string().min(5).required()
});