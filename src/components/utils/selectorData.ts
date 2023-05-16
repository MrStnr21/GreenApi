import { TStore } from "../../services/types";

const authSel = (store: TStore) => store.auth;
const contactSel = (store: TStore) => store.contact;
const chatSel = (store: TStore) => store.chat;
const sendMsgSel = (store: TStore) => store.sendMsg;
const getNotifSel = (store: TStore) => store.getNotif;
const delNotifSel = (store: TStore) => store.delNotif;

export { authSel, contactSel, chatSel, sendMsgSel, getNotifSel, delNotifSel };
