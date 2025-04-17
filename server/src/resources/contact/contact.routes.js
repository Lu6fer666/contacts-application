import express from 'express';
import multer from 'multer';
import { storage } from '../../config/multer.config.js';
import {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from './contact.controller.js';

import { validate } from '../../api/validate.middleware.js';
import { contactSchema } from './contact.validator.js';

const upload = multer({ storage });
const router = express.Router();


router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', upload.single("avatar"), validate(contactSchema), createContact);
router.put('/:id', upload.single('avatar'), validate(contactSchema), updateContact);
router.delete('/:id', deleteContact);

export default router;