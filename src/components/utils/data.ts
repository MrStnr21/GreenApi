import Elon from "../../images/fake-avatar/ElonMask.png";
import Jeff from "../../images/fake-avatar/JeffBezos.png";
import Mark from "../../images/fake-avatar/MarkZuckerberg.png";

import { TContacts } from "../../services/types/data";

const BASE_URL: string = "https://api.green-api.com";

const fakeContacts: TContacts[] = [
  { id: 0, name: "Илон Маск", avatar: Elon },
  { id: 1, name: "Green API" },
  { id: 2, name: "Джефф Безос", avatar: Jeff },
  { id: 3, name: "Марк Цукерберг", avatar: Mark },
];

export { BASE_URL, fakeContacts };
