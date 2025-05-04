import React from 'react';
import { Control, Controller, FieldErrors, Path } from 'react-hook-form';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { GRAY, RED_ERROR } from '@/styles/constants';

type FormValues = Record<string, string>;

interface FormPhoneFieldProps<T extends FormValues> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  label?: string;
  defaultCountry?: string;
}

export function FormPhoneField<T extends FormValues>({
  name,
  control,
  defaultCountry = 'ua',
}: FormPhoneFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box sx={{ my: 2 }}>
          <PhoneInput
            country={defaultCountry}
            value={field.value}
            onChange={field.onChange}
            inputProps={{
              name: field.name,
              required: true,
            }}
            containerStyle={{ width: '100%' }}
            inputStyle={{
              width: '100%',
              height: '56px',
              fontSize: '1rem',
              paddingLeft: '58px',
              borderColor: fieldState.error ? RED_ERROR : GRAY,
              borderRadius: '8px',
            }}
          />
          {fieldState.error && (
            <FormHelperText error sx={{ ml: '14px' }}>
              {fieldState.error.message as string}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
