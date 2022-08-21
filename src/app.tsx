import { useCallback, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useGetProjects from '@/hooks/use-get-projects';
import baseTheme from '@/theme';
import { Box, Stack } from '@mui/system';

const scrollBarStyles = {
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '.4rem',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255,255,255,.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255,255,255,.1)',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba(255,255,255,.5)',
  },
};

export default function App() {
  const [isOpenAddProject, setIsOpenAddProject] = useState(false);
  const { data: projects, isError, isLoading, error } = useGetProjects();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => baseTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  const handleCloseAddProject = useCallback((args) => {
    console.log(args);
    setIsOpenAddProject(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box display="flex" height="100vh" padding={2}>
          <Grid container direction="column">
            <Grid item flex="1" overflow="auto" sx={scrollBarStyles}>
              {isLoading && <p>Loading...</p>}
              {isError && <p>Error {error.message}</p>}
              <Stack spacing={2} marginRight=".4rem">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {project.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
            <Grid item flex="0" display="flex" justifyContent="flex-end" marginTop={2}>
              <Fab
                size="medium"
                color="primary"
                aria-label="add"
                onClick={() => setIsOpenAddProject(true)}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Modal
        open={isOpenAddProject}
        onClose={handleCloseAddProject}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            width: '100%',
            height: '100%',
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Project
          </Typography>
          <form />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
