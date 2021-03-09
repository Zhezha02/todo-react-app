import * as Yup from 'yup';

export const TO_DO_LIST_INPUT = Yup.string().matches(
  /^(\w#?!@$ %^&*-){2,}$/,
  `Task mustn't be an empty field`
);
