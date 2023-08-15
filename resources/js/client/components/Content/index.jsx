import './Content.css';

function Content({ children }) {
  return (
    <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 min-h-3/4 page-content flex-1 p-2">
      {children}
    </div>
  );
}

export default Content;
