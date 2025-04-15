export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: true });

    if (error) {
        return res.status(400).json({
            message: "Erreur de validationné",
            details: error.details.map(d => d.message)
        });
    }

    next(); // NZEXETED
};