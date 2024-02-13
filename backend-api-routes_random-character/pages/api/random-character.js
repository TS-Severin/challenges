import { Chance } from "chance";

export default function RandomCharacter(req, res) {
    const chance = new Chance();
    const character = {
        firstName: chance.first(),
  lastName: chance.last(),
  

    };
    res.status(200).json({ character });
}

