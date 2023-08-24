import React from 'react';
import { createRoot } from 'react-dom/client';
import Tiptap from './Tiptap';

const container = document.getElementById('tiptap-container');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Tiptap />
  </React.StrictMode>
);
