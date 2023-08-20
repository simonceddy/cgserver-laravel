import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tiptap from '../tiptap/Tiptap';
import { useFetchPageQuery, useUpdatePageMutation } from './pagesAPI';
import ErrorMessage from '../../components/ErrorMessage';
// import UploadFile from '../upload/UploadFile';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Button from '../../../shared/components/Button';

function EditPage() {
  const { slug } = useParams();
  const [body, setBody] = useState(null);
  const [message, setMessage] = useState(null);
  // console.log(slug);
  const {
    data, isLoading, error, isSuccess, refetch
  } = useFetchPageQuery({ slug });
  const [updatePage] = useUpdatePageMutation();

  const saveData = async () => {
    const result = await updatePage({
      title: data.title, slug: data.slug, id: data.id, body
    });
    // console.log(result);
    if (result.data?.success) {
      refetch();
      setMessage('Saved!');
    } else {
      setMessage('An error occurred...');
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data.title) {
      // console.log('set body');
      setBody(data.body || '');
      // console.log(body);
    }
  }, [isSuccess]);
  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <ErrorMessage error={error} />;
  // console.log(body);
  return (
    <ErrorBoundary>
      <div className="col w-full h-full min-h-full">
        {message && (
        <div className="p-2 col border-cornflower-blue border-2 rounded-md justify-center items-center">
          <div className="mb-2 font-bold">{message}</div>
          <Button
            onClick={() => setMessage(null)}
          >
            OK
          </Button>
        </div>
        )}
        <h1 className="text-xl m-2">
          Editing
          <span className="ml-1 font-bold">
            {data.title}
          </span>
        </h1>
        {/* <UploadFile
          onUpload={() => {
            setMessage('uploading!');
          }}
        /> */}
        <div className="row w-full m-2 h-fit">
          {body && (
          <Tiptap
            content={body}
            setContent={(html) => {
              if (message) setMessage(null);
              setBody(html);
            }}
            saveData={saveData}
            onClose={() => {
              navigate('/');
            }}
          />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default EditPage;
