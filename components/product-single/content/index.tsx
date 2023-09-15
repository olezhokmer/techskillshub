import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct, removeProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType, ProductStoreType } from 'types';
import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();

  const { user, cart } = useSelector((state: RootState) => state);
  const isFavourite = some(user.favProducts, productId => productId === product.id);
  const isInCart = some(cart.cartItems, cartItem => cartItem.id === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: product.id,
      }
    ))
  }

  const addToCart = () => {
    const productToSave: ProductStoreType = { 
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : '',
      price: product.currentPrice,
    }

    const productStore = {
      product: productToSave
    }

    dispatch(addProduct(productStore));
  }

  const removeFromCart = () => {
    const productToSave: ProductStoreType = { 
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : '',
      price: product.currentPrice,
    }

    dispatch(removeProduct(productToSave));
  }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>${ product.currentPrice }</h4>
          {product.discount &&
            <span>${ product.price }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <div>
            <p>{ product.description }</p>
          </div>
        </div>
        <div className="product-filter-item">
          <div className="quantity-buttons">
            {
              !isInCart
              ? <button type="submit" onClick={() => addToCart()} className='btn btn--rounded btn--yellow'>Add to cart</button>
              : <button type="submit" onClick={() => removeFromCart()} className='btn btn--rounded btn--border'>Remove from cart</button>
            }
            
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    