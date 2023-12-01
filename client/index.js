import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store, persistor } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './style.css';
import { PersistGate } from 'redux-persist/integration/react'


const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </DndProvider>``
  </Provider>
);
