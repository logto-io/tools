import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppShell from './layout/AppShell';
import JwtDecoderPage from './routes/JwtDecoderPage';

const Placeholder = () => null;

const App = () => {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate replace to="/jwt-decoder" />} />
          <Route path="/jwt-decoder" element={<JwtDecoderPage />} />
          <Route path="/saml-decoder" element={<Placeholder />} />
          <Route path="/base64-decoder" element={<Placeholder />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
