

const AddressBook = require("../../src/js/AddressBook");


describe('AddressBook', () => {
    subject(() => new AddressBook());

    it(() => is.expected.to.be.an("object"));

    it(() => is.expected.to.be.an.instanceof(AddressBook));
});

