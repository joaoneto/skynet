import { useEffect, useState } from 'react';

export function useTextList() {
  const [textList, setTextList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    window.api
      .getTextList()
      .then((response) => setTextList(response))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    error,
    data: textList,
    isLoading,
    isError: error !== null,
  };
}
