import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductStoreType } from 'types';

interface CartTypes {
  cartItems: ProductStoreType[]
}

const initialState = { 
  cartItems: [] 
} as CartTypes;

const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) => (
    product.id === action.id
  );

  return state.cartItems.findIndex(sameProduct)
};

type AddProductType = {
  product: ProductStoreType,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductType>) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product ]
      };
    },
    removeProduct(state, action: PayloadAction<ProductStoreType>) {
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    }
  },
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer