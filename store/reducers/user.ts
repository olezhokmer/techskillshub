import { remove } from 'lodash';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponse, UserType } from 'types';

type ToggleFavType = {
  id: string;
}

interface UserSliceTypes {
  user?: UserType;
  token?: string;
  favProducts: string[];
}

const initialState = {
  favProducts: [],
} as UserSliceTypes

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleFavProduct(state, action: PayloadAction<ToggleFavType>) {
      const index = state.favProducts.includes(action.payload.id);

      if(!index) {
        state.favProducts.push(action.payload.id);

        return;
      }

      remove(state.favProducts, id => id === action.payload.id);
    },
    setUserLogged(state, action: PayloadAction<UserResponse>) {
      const user = action.payload.user;
      
      state.user = user;
    },
    logOutUser(state) {
      state.user = undefined;
      state.token = undefined;
    },
  },
})

export const { toggleFavProduct, setUserLogged, logOutUser } = userSlice.actions
export default userSlice.reducer