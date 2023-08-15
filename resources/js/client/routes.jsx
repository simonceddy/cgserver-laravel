import { createRef } from 'react';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Home from './pages/Home';

const routes = [
  {
    key: 'home',
    label: 'Home',
    path: '',
    element: <Home />,
    nodeRef: createRef(),
    slug: 'home',
  },
  {
    key: 'about',
    label: 'About',
    path: 'about',
    element: <About />,
    nodeRef: createRef(),
    slug: 'about',
  },
  {
    key: 'books',
    label: 'Books',
    path: 'books',
    element: <Books />,
    nodeRef: createRef(),
    slug: 'books-sales'
  },
  {
    key: 'contact',
    label: 'Contact',
    path: 'contact',
    element: <Contact />,
    nodeRef: createRef(),
    slug: 'contact',
  },
];

export default routes;
