/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import parseHtml from 'html-react-parser';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import { API_URL } from '../../shared/consts';

function PageContainer({ slug = 'home' }) {
  const [state, setState] = useState({
    title: '',
    body: ''
  });
  useEffect(() => {
    let setup = false;

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/page/${slug}`, {
          // TODO headers
        });
        if (res.status !== 200) setState({ ...state, title: '404 Not Found' }); else {
          const data = await res.json();
          setState({ ...state, ...data });
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (!setup) {
      fetchData();
    }
    return () => {
      setup = true;
    };
  }, []);

  return (
    <Page>
      <PageHeading>
        {state.title}
      </PageHeading>
      <div className="w-full">
        {parseHtml(state.body)}
      </div>
    </Page>
  );
}

export default PageContainer;
