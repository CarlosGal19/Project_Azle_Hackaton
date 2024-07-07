import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IcpConnectContextProvider } from '@bundly/ares-react';
import client from './ares/aresClient';
import Nav from './components/Nav';
import Initial from './pages/Initial';
import Final from './pages/Final';
import Test from './pages/Test';
import Suggest from './pages/Suggest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IcpConnectContextProvider client={client}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" >
            <Route index element={<App />} />
            <Route path="initial" element={<Initial />} />
            <Route path="final" element={<Final />} />
            <Route path="test" element={<Test />} />
            <Route path="suggest" element={<Suggest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IcpConnectContextProvider>
  </React.StrictMode>,
);
