



describe('localStorage', () => {

    subject(()=> window.localStorage);

    it(() => is.expected.to.respondTo("getItem"));
    it(() => is.expected.to.respondTo("setItem"));
    it(() => is.expected.to.respondTo("removeItem"));
    it(() => is.expected.to.respondTo("clear"));
    it(() => is.expected.to.respondTo("data"));

    const entry_1 = {

        name: "test person",
        phone: "123456",
        email:"sha@gmail.com",
    }

    describe.only('#setItem', () => {
        let storeData;
    
        before(() => {
            $subject.setItem("entries", JSON.stringify(entry_1));
            storeData = $subject.data;
        });
    
        it('is expected to store data in the chosen key', () => {
    
            expect(storeData).to.have.own.property("entries");
            
        });
    
        it('is expected to store the data as string', () => {
            expect(typeof storeData.entries).to.equal("string");
        });
    
        
    });
    
});



