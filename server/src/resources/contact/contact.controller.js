import * as db from './contact.database.js';

export const getAllContacts = (req, res) => res.json(db.getAll());

export const getContactById = (req, res) => {
    const contact = db.getById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact pas found" });
    res.json(contact);
};

export const createContact = (req, res) => {
    const data = req.body;
    if (req.file) data.avatar = req.file.filename;
    const newContact = db.create(data);
    res.status(201).json(newContact);
};

export const updateContact = (req, res) => {
    const updated = db.update(req.params.id, { ...req.body, avatar: req.file?.filename });
    if (!updated) return res.status(404).json({ message: "Contact not found" });
    res.json(updated);
};

export const deleteContact = (req, res) => {
    db.remove(req.params.id);
    res.status(204).end();
};