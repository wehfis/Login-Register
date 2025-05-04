import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
interface AuthPageHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function AuthPageHeader({
  title,
  showBackButton = true,
  onBack,
}: AuthPageHeaderProps) {
  const router = useRouter();

  const handleBack = onBack || (() => router.back());

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, width: '100%' }}>
      {showBackButton && (
        <IconButton
          aria-label="back"
          onClick={handleBack}
          color="primary"
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Box>
  );
}
