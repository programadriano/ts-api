export class MyApi {
    public getName(): string {
        return "";
    }
}


describe("MyApi getName function return value", () => {
    it("Should be defined.", () => {
        const myapi = new MyApi();
        expect(myapi.getName()).toBeDefined("The function getName() should be defined.");
    });
 
    it("Should't return blank.", () => {
        const myapi = new MyApi();
        expect(myapi.getName()).not.toMatch("", "The function getName() should return the name.");
    });
 
    it("Should return 'MyName'" , () => {
        const myapi = new MyApi();
        expect(myapi.getName()).toMatch("MyName");
    });
 
} );