import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

interface SubmitButtonProps
  extends Omit<ButtonProps, 'type' | 'fullWidth' | 'variant'> {
  children: React.ReactNode;
  loading?: boolean;
}

export function SubmitButton({
  children,
  loading = false,
  sx,
  ...rest
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      disabled={loading}
      sx={{ mt: 3, mb: 2, height: 56, ...sx }}
      {...rest}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
}
