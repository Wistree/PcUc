import React from 'react';
import './product-catalog.style.scss';

import ItemCard from '../item-card/item-card.component';

const ProductCatalog = ({title, items}) => (
    <div className = 'product-catalog'>
        <h1 className = 'title'> {title} </h1>
        <div className = 'preview'>
            {items
                .filter((item, index) => index < 4)
                .map(
                    ({id, ...otherItemProps}) => (
                        <ItemCard 
                            key = {id}
                            {...otherItemProps}
                        />
                    )
                )
            }
        </div>
    </div>
);

export default ProductCatalog;