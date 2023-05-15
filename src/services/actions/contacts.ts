import { AppDispatch, AppThunk } from "../types";

import { TContact } from "../types/data";

const ADD_CONTACT_REQUEST = "ADD_CONTACT_REQUEST";
const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
const ADD_CONTACT_ERROR = "ADD_CONTACT_ERROR";

export interface IAddContactRequest {
  readonly type: typeof ADD_CONTACT_REQUEST;
}

export interface IAddcontactSuccess {
  readonly type: typeof ADD_CONTACT_SUCCESS;
  contact: TContact;
}

export interface IAddContactError {
  readonly type: typeof ADD_CONTACT_ERROR;
}

export type TAddContactActions =
  | IAddContactRequest
  | IAddcontactSuccess
  | IAddContactError;

//экшн добавления номера получателя
const addContactAction: AppThunk = (contactNumber: TContact) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: ADD_CONTACT_REQUEST });

    dispatch({ type: ADD_CONTACT_SUCCESS, contact: contactNumber });

    // dispatch({ type: ADD_CONTACT_ERROR });
  };
};

export {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  addContactAction,
};
