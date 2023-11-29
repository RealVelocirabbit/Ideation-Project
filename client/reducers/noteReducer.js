import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  Interested: [],
  Applied: [],
  Interviewed: [],
  FollowedUp: [],
  Accepted: [],
  Rejected: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    syncData: (state, action) => {
      // console.log(`action.payload`, action.payload);
      // statusArray.forEach(ele => {
      //   state[ele] = action.payload[ele].slice();
      // })
      
      state.Interested = state.Interested.slice();
      state.Interested = action.payload.Interested;

      state.Applied = state.Applied.slice();
      state.Applied = action.payload.Applied;

      state.Interviewed = state.Interviewed.slice();
      state.Interviewed = action.payload.Interviewed;

      state.FollowedUp = state.FollowedUp.slice();
      state.FollowedUp = action.payload.FollowedUp;

      state.Accepted = state.Accepted.slice();
      state.Accepted = action.payload.Accepted;

      state.Rejected = state.Rejected.slice();
      state.Rejected = action.payload.Rejected;
    },
    deletePost: (state, action) => {
      const { _id, status } = action.payload;
    
      state[status].splice(
        state[status].findIndex((ele) => {
          console.log("note", typeof ele);
          console.log(current(ele))
          return ele.id === _id;
        }),
        1
      );
    },
  },
});

export const { syncData } = noteSlice.actions;
export const { deletePost } = noteSlice.actions;
export default noteSlice.reducer;
