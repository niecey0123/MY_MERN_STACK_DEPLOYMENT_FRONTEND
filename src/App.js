import React from 'react';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import './App.css'
import CustomItemContext from './Context/ItemContext';

const App = () => {
    return (
        <CustomItemContext>
            <Header />
            <ProductList />
        </CustomItemContext>
    );
};

export default App;