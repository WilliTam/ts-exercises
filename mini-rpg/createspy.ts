class GovAgent {
    constructor(private country: string, private name: string) {
      this.country = country;
      this.name = name;
    }
    
    // 宣誓
    vow() {
      console.log(`I, ${this.name}, serve for ${this.country}`);
    }
    
    realVow() {
      console.log(`I am really ${this.name}, truly serve for ${this.country}`);
    }
  }
  
  // modify this function to make realVow() work as expected
    function createSpy(options: any) {
      let realAgent = new GovAgent(options.real.country, options.real.name);
      return realAgent;
    }
  
  let 曹操 = new GovAgent("魏國", "曹操");
  
  let 關羽 = createSpy({
    fake: { country: "魏國", name: "關羽" },
    real: { country: "屬國", name: "關羽" },
  });
  
  console.log("==============================");
  
  曹操.vow(); // print: I, 曹操, serve for 魏國
  曹操.realVow(); // print: I am really 曹操, truly serve for 魏國
  
  console.log("==============================");
  
  關羽.vow(); // I, 關羽, serve for 魏國
  關羽.realVow(); // I am really 關羽, truly serve for 屬國