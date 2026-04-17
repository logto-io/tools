import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { fallbackLanguage, I18NovaProvider, type Language } from './i18n';
import AppShell from './layout/AppShell';
import Base64DecoderPage from './routes/Base64DecoderPage';
import HomePage from './routes/HomePage';
import JwtDecoderPage from './routes/JwtDecoderPage';

const Placeholder = () => null;

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(fallbackLanguage);

  return (
    <BrowserRouter>
      <I18NovaProvider currentLanguage={currentLanguage}>
        <AppShell currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jwt-decoder" element={<JwtDecoderPage />} />
            <Route path="/saml-decoder" element={<Placeholder />} />
            <Route path="/base64-decoder" element={<Base64DecoderPage />} />
          </Routes>
        </AppShell>
      </I18NovaProvider>
    </BrowserRouter>
  );
};

export default App;
