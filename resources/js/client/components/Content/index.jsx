import './Content.css';

function Content({ children }) {
  return (
    <div className="w-full page-content flex-1 p-2">
      {children}
    </div>
  );
}

export default Content;
