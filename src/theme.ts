import { createTheme } from '@mui/material/styles';

const theme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });

export default theme;
