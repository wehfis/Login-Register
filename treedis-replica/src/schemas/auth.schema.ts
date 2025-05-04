import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required field'),
  lastName: yup.string().required('Last Name is required field'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required field'),
  phone: yup
    .string()
    .required('Phone number is required field')
    .min(10, 'Phone number seems too short')
    .max(15, 'Phone number seems too long'),
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Must be at least 8 characters')
    .matches(/[a-z]/, 'Must contain 1 lowercase letter')
    .matches(/[A-Z]/, 'Must contain 1 uppercase letter')
    .matches(/[0-9]/, 'Must contain 1 digit'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export type RegistrationFormData = yup.InferType<typeof registrationSchema>;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required field'),
  password: yup.string().required('Password is required field'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
