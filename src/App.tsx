import './App.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@gravity-ui/uikit';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import SearchResults from 'pages/SearchResults/SearchResults';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

function App() {
    return (
        <ThemeProvider theme="light">
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchResults />} />
                        {/*<Route path="books/:bookId" element={<BookDetails />} />*/}
                        {/*<Route path="cart" element={<Cart />} />*/}
                    </Route>
                </Routes>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
