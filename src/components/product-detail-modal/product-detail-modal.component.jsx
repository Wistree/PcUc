import React from 'react';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.2);
  padding: 50
`

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 5;
  max-width: 500;
  min-height: 300;
  margin: 0 auto;
  padding: 30;
  position: relative
`

const footerStyle = {
  position: 'absolute',
  bottom: 20
};

const ProductDetailModal = ({ show, onClose }) => {
  return (
    show ?
    (
      <Backdrop>
        <Modal>           
          <h1> This is the modal </h1>
          <p> during the destructuring the props, we can use spread operator to express other properties that we don't need to show, and u can u different name to represent the var name of the operator </p>   
          <button onClick = {onClose} style = {footerStyle}> X </button>              
        </Modal>
      </Backdrop>
    )
  :
    null
  )
};

export default ProductDetailModal;