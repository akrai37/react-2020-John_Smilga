import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
//'PropTypes' bsically act as proxy values for values that are not present in our API(or data file)
const Product = ({image, name,price}) => {
  return (
    <>
    <article className='product'>
    <img src={ image.url} alt={name}/>
    <h4>{name}</h4>
    <p>${ price}</p>
  </article>
  </>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
}

Product.defaultProps = {
  image: defaultImage,
  name: 'default name',
  price: 3.99
}

export default Product;
