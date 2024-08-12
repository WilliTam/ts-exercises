import { MonsterInterface } from "./monsterinterface";

export class Monster implements MonsterInterface {
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