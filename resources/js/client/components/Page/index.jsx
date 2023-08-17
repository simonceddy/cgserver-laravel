function Page({ children }) {
  return (
    <div className="w-full h-auto col justify-start items-center p-2 rounded-lg page-content font-sans whitespace-pre-wrap">
      {children}
    </div>
  );
}

export default Page;
