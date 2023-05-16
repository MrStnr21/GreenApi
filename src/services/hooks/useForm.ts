import { useState, ChangeEvent } from "react";

import { TFormStateType } from "../types/data";

function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

const initialFormState: TFormStateType = {
  idInstance: "",
  apiTokenInstance: "",
};

const initialContactState: TFormStateType = {
  number: "",
};

const initialSendMessageState: TFormStateType = {
  message: "",
};

export {
  useForm,
  initialFormState,
  initialContactState,
  initialSendMessageState,
};
