  import { Player, God } from "./player"
  import { Monster } from "./monster"
  import { Skill } from "./skill"
  
  // Invocations of the class and its methods
  const peter = new Player(new Skill("Swords", 50), new Skill("Magic Spells", 25), "Peter", 0.1);
  // const jordan = new God(10, "Jordan", 0.6);
  const monster = new Monster(100,20);
  peter.attack(monster);
  peter.switchSkills();
  // jordan.attack(monster);
  // jordan.absoluteDamage(monster);
  peter.attack(monster);
  // English counterpart: Player attacks monster


  export{};