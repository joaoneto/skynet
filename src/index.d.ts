export {};
declare global {
  interface Window {
    api: {
      getTextList: () => Promise<string[]>;
    };
  }
}
