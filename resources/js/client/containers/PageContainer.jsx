/* eslint-disable import/no-extraneous-dependencies */
import parseHtml from 'html-react-parser';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
// import { API_URL } from '../../shared/consts';
import { useFetchPageQuery } from '../app/pagesApi';
import ErrorMessage from '../../admin/components/ErrorMessage';

function PageContainer({ slug = 'home' }) {
  const {
    data, isError, isLoading, error
  } = useFetchPageQuery({ slug });

  if (isLoading) return 'Loading...';
  if (isError) return <ErrorMessage error={error} />;
  return (
    <Page>
      <PageHeading>
        {data.title}
      </PageHeading>
      <div className="w-full flex-1">
        {parseHtml(data.body)}
      </div>
    </Page>
  );
}

export default PageContainer;
