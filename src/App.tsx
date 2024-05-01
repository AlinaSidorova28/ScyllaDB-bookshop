import './App.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@gravity-ui/uikit';
import Layout from 'components/Layout/Layout';
import SearchResults from 'pages/SearchResults';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

function App() {
    return (
        <ThemeProvider theme="light">
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<SearchResults />} />
                        <Route path="/search" element={<SearchResults />} />
                    </Route>
                </Routes>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
