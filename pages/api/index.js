import { Chance } from "chance";

const chance = Chance();

export const fakeUserData = () => {
  console.log(chance.name({ name: true }));
  return chance.name({ name: true });
};
