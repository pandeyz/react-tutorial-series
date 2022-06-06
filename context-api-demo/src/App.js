// https://www.toptal.com/react/react-context-api
import React from 'react';
import ProductList from './ProductList';
import MyProvider from './MyProvider';

class App extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to my web store</h1>
                    </header>
                    <ProductList />
                </div>
            </MyProvider>
        );
    }
}

export default App;