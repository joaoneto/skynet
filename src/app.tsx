import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import { useTextList } from '@/hooks/use-text-list';
import baseTheme from '@/theme';
import { useMemo } from 'react';

export default function App() {
  const { data: textList, isError, isLoading, error } = useTextList();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => baseTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Hello World!!</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error {error.message}</p>}
        {textList.map((text, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={i}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </ThemeProvider>
  );
}
