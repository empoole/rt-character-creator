import { Skill } from "./Skill";
import { Talent } from "./Talent";

export type HomeworldDetails = {
  title: string;
  fluff: {
    quote?: string;
    description: string;
  };
  modifiers: Partial<CharacteristicModifiers>;
  skills: Skill[];
  talents: Talent[];
  bonuses: string[];
  penalties: string[];
  special_abilities: string[];
  starting_wounds: string; // A string representing the formula for calculating starting wounds
  fate_points: Partial<FatePointMatrix>;
  fate_points_description: string;
};

export type CharacteristicModifiers = {
  weapon_skill: number;
  ballistic_skill: number;
  strength: number;
  toughness: number;
  agility: number;
  intelligence: number;
  perception: number;
  willpower: number;
  fellowship: number;
};

// The number on the left represents the maximum roll for which the number on the right will be assigned
/**
 * Example
 * {"5" : 2, "9" : 3, "10" : 4}
 * Roll a d10:
 * - on a roll <= 5 assign 2 fate points
 * - on a roll <= 9 assign 3 fate points
 * - on a roll of 10 assign 4 fate points
 */
export type FatePointMatrix = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
};
