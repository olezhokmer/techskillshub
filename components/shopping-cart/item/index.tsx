import { useDispatch } from 'react-redux';
import { removeProduct } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

const ShoppingCart = ({ thumb, name, id, price }: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        thumb, 
        name, 
        id, 
        price
      }
    ))
  }


  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart