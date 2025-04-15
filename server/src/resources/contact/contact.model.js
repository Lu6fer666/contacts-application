export class Contact {
    constructor({ id, firstName, lastName, email, phone, address, avatar }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.avatar = avatar || null;
    }
}