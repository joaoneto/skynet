import { useTextList } from '@/hooks/use-text-list';

export default function App() {
  const { data: textList, isError, isLoading, error } = useTextList();

  return (
    <div>
      <h1>Hello World!!</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error {error.message}</p>}
      {textList.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}
