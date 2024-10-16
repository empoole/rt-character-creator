// export type StatBlock = {
//   weapon_skill: number;
//   ballistic_skill: number;
//   strength: number;
//   toughness: number;
//   agility: number;
//   intelligence: number;
//   perception: number;
//   willpower: number;
//   fellowship: number;
// };

export class StatBlock {
    weapon_skill: number
    ballistic_skill: number
    strength: number
    toughness: number
    agility: number
    intelligence: number
    perception: number
    willpower: number
    fellowship: number
    constructor(
        weapon_skill = 0,
        ballistic_skill = 0,
        strength = 0,
        toughness = 0,
        agility = 0,
        intelligence = 0,
        perception = 0,
        willpower = 0,
        fellowship = 0
    ) {
        this.weapon_skill = weapon_skill
        this.ballistic_skill = ballistic_skill
        this.strength = strength
        this.toughness = toughness
        this.agility = agility
        this.intelligence = intelligence
        this.perception = perception
        this.willpower = willpower
        this.fellowship = fellowship
    }
}
