'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';

import { useCallback } from 'react';
import { useAuthStore } from '@/store/authStore';
import {
  RegistrationFormData,
  registrationSchema,
} from '@/schemas/auth.schema';

import { FormTextField } from '@/components/common/FormTextField';
import { FormPasswordField } from '@/components/common/FormPasswordField';
import { FormPhoneField } from '@/components/common/FormPhoneField';
import { SubmitButton } from '@/components/common/SubmitButton';
import { IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const setUserData = useAuthStore((state) => state.setUserData);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = useCallback(
    (data: RegistrationFormData) => {
      console.log('Registering:', data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, confirmPassword, ...userDataToStore } = data;
      setUserData(userDataToStore);
      alert('Registration Submitted');
    },
    [setUserData],
  );

  const handleBack = useCallback(() => router.back(), [router]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mb: 3,
          width: '100%',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '40px' }}>
          Register
        </Typography>
        <IconButton aria-label="back" onClick={handleBack} color="primary">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        component="form"
        noValidate
        sx={{ width: '100%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormTextField<RegistrationFormData>
          name="firstName"
          label="First Name"
          register={register}
          errors={errors}
          autoComplete="given-name"
        />

        <FormTextField<RegistrationFormData>
          name="lastName"
          label="Last Name"
          register={register}
          errors={errors}
          autoComplete="family-name"
        />

        <FormTextField<RegistrationFormData>
          name="email"
          label="Email Address"
          register={register}
          errors={errors}
          autoComplete="email"
          type="email"
        />

        <FormPhoneField<RegistrationFormData>
          name="phone"
          control={control}
          errors={errors}
        />

        <FormPasswordField<RegistrationFormData>
          name="password"
          label="Password"
          register={register}
          errors={errors}
          autoComplete="new-password"
          defaultHelperText="Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit"
        />

        <FormPasswordField<RegistrationFormData>
          name="confirmPassword"
          label="Confirm Password"
          register={register}
          errors={errors}
          autoComplete="new-password"
        />
        <SubmitButton>Next</SubmitButton>
      </Box>
    </Box>
  );
}
