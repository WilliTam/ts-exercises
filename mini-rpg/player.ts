import { Monster } from "./monster";
import { Skill } from "./skill"

export class Player {
  protected name: string;
  protected exp: number;
  private criticalprob: number;
  private primarySkill: Skill;
  private secondarySkill: Skill;
  private usePrimaryAttack: boolean;

  constructor(primarySkill: Skill, secondarySkill: Skill, name: string, criticalprob: number) {
    this.name = name;
    this.exp = 0;
    this.criticalprob = criticalprob;
    this.primarySkill = primarySkill;
    this.secondarySkill = secondarySkill;
    this.usePrimaryAttack = true;
  }

  switchSkills() :void{
    this.usePrimaryAttack = !this.usePrimaryAttack;
  }
  
  attack(monster: Monster) {
    // Your code
    if (monster.gethp() <= 0) {
      console.log(`The monster has already gone.`);
    } else {
      let rand: number = Math.random()
      let critical: boolean = rand < this.criticalprob;
      console.log(rand);
      let multiplier: number = critical ? 2 : 1;
      let criticalStatement: string = critical ? "[CRITICAL]" : "";
      let theSkill:string = this.usePrimaryAttack? this.primarySkill.getSkillName():this.secondarySkill.getSkillName();
      let damage:number = this.usePrimaryAttack? this.primarySkill.getStrength() : this.secondarySkill.getStrength();
      monster.injure(damage * multiplier);
      console.log(
        `Player ${
          this.name
        }'s attacks a monster by ${theSkill} (HP: ${monster.gethp()}) ${criticalStatement}`
      );
      if (monster.gethp() == 0) {
        this.gainExperience(this.exp, monster);
      }
    }
  }

  gainExperience(exp: number, monster: Monster) {
    // Your code
    this.exp += monster.getexpgive();
    console.log(`Monster defeated!`);
    console.log(
      `Congrats! Player ${this.name}'s experience raises (EXP: ${this.exp})`
    );
  }
}

export class God extends Player {

    absoluteDamage(monster: Monster):void {
    // Your code
    if (monster.gethp() <= 0) {
      console.log(`The monster has already gone.`);
    } else {
      monster.injure(monster.gethp());
      console.log(
        `${
          this.name
        } turns into God and attacks a monster (HP: ${monster.gethp()})`
      );
    this.gainExperience(this.exp, monster);
    }
}
}
