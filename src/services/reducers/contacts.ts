import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  TAddContactActions,
} from "../actions/contacts";

import { TContact } from "../types/data";

export type TContactsState = {
  contact: TContact | null;

  addContactSuccess: boolean;
  addContactRequest: boolean;
  addContactError: boolean;
};

const contactInitialState: TContactsState = {
  contact: null,

  addContactSuccess: false,
  addContactRequest: false,
  addContactError: false,
};

function addContactReducer(
  state = contactInitialState,
  action: TAddContactActions
) {
  switch (action.type) {
    //экшены добавления номера получателя
    case ADD_CONTACT_REQUEST: {
      return {
        ...state,
        addContactSuccess: false,
        addContactRequest: true,
        addContactError: false,
      };
    }

    case ADD_CONTACT_SUCCESS: {
      return {
        contact: action.contact,
        addContactSuccess: true,
        addContactRequest: false,
        addContactError: false,
      };
    }

    case ADD_CONTACT_ERROR: {
      return {
        state: null,
        addContactSuccess: false,
        addContactRequest: false,
        addContactError: true,
      };
    }

    default:
      return state;
  }
}

export { addContactReducer };
