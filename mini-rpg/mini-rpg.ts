// Declaration of Class and its methods
class Player {
    private strength: number;
    private name: string;
    private exp: number;
    private criticalprob : number;
    
    constructor(strength: number, name: string, criticalprob: number) {
      this.strength = strength;
      this.name = name;
      this.exp = 0;
      this.criticalprob = criticalprob;
    }
  
    attack(monster: Monster) {
      // Your code
      if (monster.gethp()<=0){
        console.log(`The monster has already gone.`)
      }else{
          let critical: boolean = Math.random()<this.criticalprob;
          let multiplier:number = critical ? 2 : 1; 
          let criticalStatement:string = critical ? "[CRITICAL]" : "";
          monster.injure(this.strength * multiplier);
          console.log(`Player ${this.name}'s attacks a monster (HP: ${monster.gethp()}) ${criticalStatement}`);
          if (monster.gethp()==0){
            this.gainExperience(this.exp);
      }
      }
    }
  
    gainExperience(exp: number) {
      // Your code
      this.exp += monster.getexpgive();
      console.log(`Monster defeated!`)
      console.log(`Congrats! Player ${this.name}'s experience raises (EXP: ${this.exp})`);
    }
  }
  
  class Monster {
    // Think of how to write injure
    private hp: number; 
    private expgive: number; 

    constructor(hp:number, expgive:number){
        this.hp = hp;
        this.expgive = expgive;
    }

    injure(damage:number){
        if (this.hp<=damage){
            this.hp =0
        } else {       
            this.hp -= damage;
        }
    }

    gethp(){
        return this.hp;
    }

    getexpgive(){
        return this.expgive;
    }

  }
  
  // Invocations of the class and its methods
  const player1 = new Player(20, "Peter", 0.3);
  const player2 = new Player(40, "James", 0.3);
  const monster = new Monster(100,20);
  player1.attack(monster);
  player1.attack(monster);
  player1.attack(monster);
  player2.attack(monster);
  player2.attack(monster);
  player1.attack(monster);
  player1.attack(monster);
  // English counterpart: Player attacks monster


  export{};