import { /* useLocation, */ useOutlet } from 'react-router-dom';
// import { SwitchTransition } from 'react-transition-group';
import Nav from './Nav';
import AppHeading from './components/AppHeading';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';
import { APP_TITLE } from '../shared/consts';
// import routes from './routes';
// import CSSTransition from './containers/CSSTransition';
import Footer from './components/Footer';
import ErrorBoundary from '../admin/containers/ErrorBoundary';

function App() {
  const outlet = useOutlet();
  // const location = useLocation();
  // const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <Layout>
      <ErrorBoundary>
        <Header>
          <AppHeading>
            {APP_TITLE}
          </AppHeading>
          <div className="text-3xl font-bold text-pastel-green font-cursive">
            Writing in Bass Coast
          </div>
          <Nav />
        </Header>
        <Content>
          {/* <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={60}
              classNames="page"
              unmountOnExit
            > */}
          {/* <div ref={nodeRef}
            className="page flex-1 min-h-[70%] w-full col justify-start items-center"
          > */}
          {outlet}
          {/* </div> */}
          {/* </CSSTransition>
          </SwitchTransition> */}
        </Content>
        <Footer />
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
