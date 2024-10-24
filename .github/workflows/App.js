// client/src/App.js

import React from 'react';
import './App.css';  // Ensure correct path to App.css

import ProductList from './components/ProductList';
import Header from './components/Header';
import CustomItemContextProvider from './context/ItemContext'; // Ensure correct import path

const App = () => {
    return (
        <CustomItemContextProvider>
            <div className="App">
                <Header />
                <ProductList />
            </div>
        </CustomItemContextProvider>
    );
};

export default App;
