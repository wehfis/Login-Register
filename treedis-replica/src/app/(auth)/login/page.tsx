'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import {} from 'next/navigation';
import { useCallback } from 'react';

import { useAuthStore } from '@/store/authStore';

import { LoginFormData, loginSchema } from '@/schemas/auth.schema';

import { FormTextField } from '@/components/common/FormTextField';
import { FormPasswordField } from '@/components/common/FormPasswordField';
import { SubmitButton } from '@/components/common/SubmitButton';

export default function LoginPage() {
  const setUserData = useAuthStore((state) => state.setUserData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      console.log('User data set in Zustand store:', data);

      setUserData(data);
      alert('Login Successful! User data stored.');
    },
    [setUserData],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '40px' }}>
          Welcome!
          <br /> Login to continue
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, width: '100%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormTextField<LoginFormData>
          name="email"
          label="Email Address"
          register={register}
          errors={errors}
          autoComplete="email"
          type="email"
        />

        <FormPasswordField<LoginFormData>
          name="password"
          label="Password"
          register={register}
          errors={errors}
          autoComplete="current-password"
        />

        <SubmitButton>Login</SubmitButton>

        <Grid container justifyContent="space-between">
          <Grid>
            <MuiLink
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}
            >
              Forgot Password?
            </MuiLink>
          </Grid>
          <Grid>
            <MuiLink
              href="/register"
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}
            >
              Create New Account
            </MuiLink>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
