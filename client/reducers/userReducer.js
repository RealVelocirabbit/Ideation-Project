import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // state.user = state.user.slice();
      state.user = action.payload;
      console.log('state.user', state.user)
    },
    deleteUser: (state) => {
      // state.user = state.user.slice();
      state.user = {};
    }
  }
});

export const { setUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;