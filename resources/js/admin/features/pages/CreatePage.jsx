/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddPageMutation } from './pagesAPI';
import ErrorMessage from '../../components/ErrorMessage';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Tiptap from '../tiptap/Tiptap';

function CreatePage() {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [createPage, { isSuccess, error, isLoading }] = useAddPageMutation();

  const saveData = async () => {
    const result = await createPage({
      title, body
    });
    if (result.data.success) {
      setMessage('Saved!');
    } else {
      setMessage('A problem occurred');
    }
    console.log(result);
  };
  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <ErrorBoundary>
        <div className="col w-full">
          {message && (
          <div className="p-2 col border-cornflower-blue border-2 rounded-md justify-center items-center">
            <div className="mb-2 font-bold">{message}</div>
            <button
              className="border-2 border-cornflower-blue active:border-pastel-green hover:underline p-2 m-2"
              onClick={() => setMessage(null)}
              type="button"
            >
              OK
            </button>
          </div>
          )}
          <label htmlFor="title-input" className="text-xl m-2">
            <span className="mr-2">
              Title
            </span>
            <input
              type="text"
              name="title-input"
              id="title-input"
              className="p-1 rounded-md border border-cornflower-blue font-sans focus:border-pastel-green"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          {/* <UploadFile
          onUpload={() => {
            setMessage('uploading!');
          }}
        /> */}
          <div className="row w-full m-2 h-[400px]">
            <Tiptap
              saveData={saveData}
              onClose={() => {
                navigate('/pages');
              }}
              content={body}
              setContent={setBody}
            />
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default CreatePage;
