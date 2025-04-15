import fs from 'fs';
import { Contact } from './contact.model.js';

const DB_PATH = './contacts.json';

let contacts = [];

export const loadContacts = () => {
    if (fs.existsSync(DB_PATH)) {
        contacts = JSON.parse(fs.readFileSync(DB_PATH));
    }
};

export const saveContacts = () => {
    fs.writeFileSync(DB_PATH, JSON.stringify(contacts, null, 2));
};

export const getAll = () => contacts;
export const getById = id => contacts.find(c => c.id === parseInt(id));
export const create = data => {
    const contact = new Contact({ ...data, id: Date.now() });
    contacts.push(contact);
    saveContacts();
    return contact;
};
export const update = (id, data) => {
    const index = contacts.findIndex(c => c.id === parseInt(id));
    if (index === -1) return null;
    contacts[index] = { ...contacts[index], ...data };
    saveContacts();
    return contacts[index];
};
export const remove = id => {
    contacts = contacts.filter(c => c.id !== parseInt(id));
    saveContacts();
};