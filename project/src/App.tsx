import React from 'react';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Layout>
          <LandingPage />
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;