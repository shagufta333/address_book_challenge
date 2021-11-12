

const { expect } = require("chai");
const AddressBook = require("../../src/js/AddressBook");
describe('AddressBook', () => {
    subject(() => new AddressBook());

    it('is expected to be an object', () => {
        
        expect($subject).to.be.an.instanceof("object");
    });

    it('is expected to be an instance of AddressBook class', () => {
        
       expect($subject).to.be.an.instanceOf(AddressBook);

    });
});