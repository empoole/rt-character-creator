export type Skill = {
  name: string;
  trained: boolean;
  basic: boolean; // many path nodes give a character the option to take an advaced skill as a basic one, but do no automatically give them training in it
};
