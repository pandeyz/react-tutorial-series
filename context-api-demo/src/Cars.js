import React from 'react';
import Car from './Car';
import MyContext from './MyContext';

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <React.Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </React.Fragment>
        )}
    </MyContext.Consumer>
);

export default Cars;