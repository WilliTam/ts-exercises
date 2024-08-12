export class Skill {
  private skillName: string;
  private strength: number;

  constructor(skillName: string, strength: number){
    this.skillName = skillName;
    this.strength = strength;
  }

  getSkillName():string{
    return this.skillName
  }

  getStrength():number{
    return this.strength
  }
}
