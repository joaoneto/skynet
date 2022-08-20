import { useEffect, useState } from 'react';

interface Project {
  id: string;
  name: string;
}

export default function useGetProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    window.api
      .getProjects()
      .then((response) => setProjects(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    error,
    data: projects,
    isLoading,
    isError: error !== null,
  };
}
