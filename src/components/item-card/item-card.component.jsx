import React, {Component} from 'react';
import './item-card.style.scss';

import ProductDetailModal from '../product-detail-modal/product-detail-modal.component';

class ItemCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    };

    // this method will update the state
    // take all the value from the state with spread operator
    showModal = () => {
        this.setState({
            show: !this.state.show
        }, console.log(this.state.show));
    };

    render() {

        const { show } = this.state;
        const { imageUrl, name, price, specs } = this.props;

        return(
            <div className = 'item-card' >
                <div className = 'card-content' onClick = {this.showModal}>
                    <div
                        className = 'image' 
                        style = {{
                            backgroundImage: `url(${imageUrl})`
                        }}
                    />
                    <div className = 'collection-footer'>
                        <span className = 'name'> {name.toUpperCase()} </span>
                        <span className = 'price'> {price} </span>
                    </div>
                </div>

                {/* only show this component when show props is true */}
                <ProductDetailModal 
                    show = {show} 
                    onClose = {this.showModal}
                    specs = {specs}
                />
            </div>
            
        )
    };
};

export default ItemCard;