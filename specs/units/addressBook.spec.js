

const { def } = require("bdd-lazy-var");
const { expect } = require("chai");
const AddressBook = require("../../src/js/AddressBook");


describe('AddressBook', () => {

    afterEach(()=>{
    window.localStorage.data ={}
    sinon.reset()

    });
    subject(() => new AddressBook());

    it(() => is.expected.to.be.an("object"));

    it(() => is.expected.to.be.an.instanceof(AddressBook));

    it(() => is.expected.to.respondTo("index"));
    it(() => is.expected.to.respondTo("create"));

    let setItemSpy, getItemSpy, stringfySpy, parseSpy, message;

    setItemSpy = sinon.spy(window.localStorage, 'setItem');
    getItemSpy = sinon.spy(window.localStorage, 'getItem');
    stringfySpy = sinon.spy(JSON, 'stringify');
    parseSpy = sinon.spy(JSON, 'parse');



    describe('#create', () => {

        def("contactsInStorage", () => JSON.parse(window.localStorage.data.entries));
        def("validData", {
            name: "shagufta",
            email: "sha@gmail.com",
            phone: "1234567",
        });

        def('invalidData', 'this is not an object!')

        context("with valid data", () => {
            beforeEach(() => {
                message = $subject.create($validData);


            });
            it("is expected to call on localStorage.getItem()", () => {
                expect(getItemSpy).to.have.been.calledOnce;
            });
            it('is expected to call on localStorage.setItem()', () => {
                expect(setItemSpy).to.have.been.calledOnce;
            });
            it('is expected to call on JSON.stringfy()', () => {
                expect(stringfySpy).to.have.been.calledOnce;
            });
            it('is expected to add a contact to localStorage', () => {
                expect($contactsInStorage).to.have.length(1);
            });
            it('is expected to respond with success message', () => {
                expect(message).to.equal("The entry  was added to the address book");
            });



        });

        context("with invalid data",()=>{

          beforeEach(()=>{
              message= $subject.create($invalidData)
            

          });

          it('is expect to respond with error message', () => {
              expect(message).to.equal('we could not process your entry');
          });
        });

    });

    
    describe.only('#index', () => {
        let collection
        beforeEach(()=>{

            $subject.create({name: 'ali'});
            $subject.create({name: 'shagufta'});
            $subject.create({name: 'maria'});
            sinon.reset();
            collection= $subject.index();
        });
        it('is expected to call on localStorage.getItem()', () => {
            expect(getItemSpy).to.have.been.calledOnce;
        });
        it('is expected to call on JSON.parse()', () => {
            expect(parseSpy).to.have.been.calledOnce;
        });
        it('is expected to return an array with 3 objects', () => {
            expect(collection).to.have.length(3)
        });
    });
});

