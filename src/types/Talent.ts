export type Talent = {
  id: number;
  name: string;
  optional: boolean;
  blocks: number[]; // Taking this talent prevents taking others (listed by id)
};
