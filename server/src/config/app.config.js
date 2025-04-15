import express from 'express';
import compression from 'compression';
import { logger } from '../api/logger.middleware.js';
import contactRoutes from '../resources/contact/contact.routes.js';

export const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(compression());
    app.use(logger);
    app.use('/api/contacts', contactRoutes);

    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ message: "Une erreur est survenue putain" });
    });

    return app;
};