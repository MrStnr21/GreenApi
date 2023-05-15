import { TStore } from "../../services/types";

const authSel = (store: TStore) => store.auth;
const contactSel = (store: TStore) => store.contact;
const chatSel = (store: TStore) => store.chat;

export { authSel, contactSel, chatSel };
