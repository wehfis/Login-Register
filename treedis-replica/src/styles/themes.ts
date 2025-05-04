import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors'; // Example for error color
import { PRIMARY_BLUE, WHITE_BG, MEDIUM_GRAY_TEXT, LIGHT_GRAY_BG, DARK_TEXT, LIGHT_GRAY_BORDER, FONT_FAMILY } from './constants';

let theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_BLUE,
      contrastText: WHITE_BG,
    },
    secondary: {
      main: MEDIUM_GRAY_TEXT,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: LIGHT_GRAY_BG,
      paper: WHITE_BG,
    },
    text: {
      primary: DARK_TEXT,
      secondary: MEDIUM_GRAY_TEXT,
      disabled: MEDIUM_GRAY_TEXT,
    },
    divider: LIGHT_GRAY_BORDER,
  },

  typography: {
    fontFamily: FONT_FAMILY,
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      color: DARK_TEXT,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: DARK_TEXT,
      marginBottom: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      color: DARK_TEXT,
    },
    body2: {
        fontSize: '0.875rem',
        color: DARK_TEXT,
    },
    caption: {
      fontSize: '0.75rem',
      color: MEDIUM_GRAY_TEXT,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.9rem',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '8px',
          padding: theme.spacing(1.25, 3),
        }),
        containedPrimary: {
          backgroundColor: PRIMARY_BLUE,
          color: WHITE_BG,
          '&:hover': {
            backgroundColor: '#3059DB',
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: () => ({
                borderRadius: '8px',
                backgroundColor: WHITE_BG,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: LIGHT_GRAY_BORDER,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: MEDIUM_GRAY_TEXT,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: PRIMARY_BLUE,
                    borderWidth: '1px',
                },
            }),
            input: ({ theme }) => ({
                padding: theme.spacing(1.5, 1.75),
                color: DARK_TEXT,
                '&::placeholder': {
                    color: MEDIUM_GRAY_TEXT,
                    opacity: 1,
                },
            }),
        }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: MEDIUM_GRAY_TEXT,
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: 'primary',
      },
      styleOverrides: {
        root: () => ({
          fontSize: '0.8rem',
          fontWeight: 500,
          cursor: 'pointer',
          '&:hover': {
            underline: 'always',
          },
        }),
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: MEDIUM_GRAY_TEXT,
          fontSize: '0.75rem',
          marginTop: theme.spacing(0.5),
          marginLeft: theme.spacing(0.5),
        }),
      },
    },

    MuiIconButton: {
        styleOverrides: {
            root: () => ({
                color: MEDIUM_GRAY_TEXT,
            }),
            colorPrimary: {
                color: PRIMARY_BLUE,
                '&:hover': {
                    backgroundColor: 'rgba(59, 111, 255, 0.08)'
                }
            }
        }
    }
  },

});

theme = responsiveFontSizes(theme);

export default theme;