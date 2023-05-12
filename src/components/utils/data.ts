import Elon from "../../images/fake-avatar/ElonMask.png";
import Jeff from "../../images/fake-avatar/JeffBezos.png";
import Mark from "../../images/fake-avatar/MarkZuckerberg.png";

const BASE_URL: string = "https://api.green-api.com";

const fakeContacts = [
  { id: 0, name: "Илон Маск", avatar: Elon },
  { id: 1, name: "Green API" },
  { id: 2, name: "джефф безос", avatar: Jeff },
  { id: 3, name: "Марк Цукерберг", avatar: Mark },
];

export { BASE_URL, fakeContacts };
