import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

type FormValues = Record<string, unknown>;

interface FormTextFieldProps<T extends FormValues>
  extends Omit<TextFieldProps, 'name' | 'error' | 'helperText'> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
}

export function FormTextField<T extends FormValues>({
  name,
  register,
  errors,
  label,
  required,
  ...rest
}: FormTextFieldProps<T>) {
  const error = errors[name];

  return (
    <TextField
      label={label}
      margin="normal"
      fullWidth
      required={required}
      id={name}
      {...register(name, {
        required: required ? `${label || name} is required` : false,
      })}
      error={!!error}
      helperText={error?.message as string | undefined}
      {...rest}
    />
  );
}
