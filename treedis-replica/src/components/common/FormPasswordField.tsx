import React, { useState, useCallback } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';

type FormValues = Record<string, unknown>;

interface FormPasswordFieldProps<T extends FormValues>
  extends Omit<
    TextFieldProps,
    'name' | 'error' | 'helperText' | 'type' | 'InputProps'
  > {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  defaultHelperText?: string;
}

export function FormPasswordField<T extends FormValues>({
  name,
  register,
  errors,
  label,
  required,
  defaultHelperText,
  ...rest
}: FormPasswordFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const error = errors[name];

  const handleTogglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleMouseDownPassword = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    [],
  );

  return (
    <TextField
      label={label}
      margin="normal"
      fullWidth
      required={required}
      id={name}
      type={showPassword ? 'text' : 'password'}
      {...register(name, {
        required: required ? `${label || name} is required` : false,
      })}
      error={!!error}
      helperText={error ? (error.message as string) : defaultHelperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`toggle ${label || name} visibility`}
              onClick={handleTogglePasswordVisibility}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}
