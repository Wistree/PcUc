import React, { Component } from 'react';
import './home.style.scss';

import PRODUCT_DATA from '../../components/product-catalog/laptops.data';
import ProductCatalog from '../../components/product-catalog/product-catalog.component';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: PRODUCT_DATA
        }
    };

    // during the destructuring the props, we can use spread operator to express other properties that we don't need to show, and u can u different name to represent the var name of the operator
    render () {
        return (
            <div>
                {this.state.data.map(
                    ({id, ...otherCatalogProps}) => (
                        <ProductCatalog 
                            key = {id}
                            {...otherCatalogProps}
                        />
                    ) 
                )}
            </div>
        )
    }
};

export default Home;
