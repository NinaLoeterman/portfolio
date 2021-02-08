import React from 'react';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'enter you name')
    .max(100, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'leave a message')
    .max(1000, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
