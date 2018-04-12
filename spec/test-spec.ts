export class MyApi {
  public getName(): string {
    return "MyNam";
  }
}

describe("MyApi getName function return value", () => {
 

   it("Should return 'MyName'", () => {
    const myapi = new MyApi();
    expect(myapi.getName()).toMatch("MyName");
  });
});
