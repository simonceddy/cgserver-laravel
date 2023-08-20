function TiptapContainer({ children }) {
  return (
    <div
      className="border-2 col border-slate-400 dark:border-slate-600 w-full h-full min-h-full"
    >
      {children}
    </div>
  );
}

export default TiptapContainer;
