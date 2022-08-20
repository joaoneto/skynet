import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import useGetProjects from '@/hooks/use-get-projects';
import baseTheme from '@/theme';

export default function App() {
  const { data: projects, isError, isLoading, error } = useGetProjects();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => baseTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);
  console.log(projects);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Hello World!!</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error {error.message}</p>}
        {projects.map((project, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={project.id}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {project.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </ThemeProvider>
  );
}
