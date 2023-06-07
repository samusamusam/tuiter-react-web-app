import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: { tuits: tuits },
  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    removeLike: (state, action) => {
      state.tuits = state.tuits.map((tuit) => {
        if (tuit._id === action.payload._id) {
          tuit.liked = !tuit.liked;
          tuit.likes--;
          return tuit;
        }
        return tuit;
      });
    },
    addLike: (state, action) => {
      state.tuits = state.tuits.map((tuit) => {
        if (tuit._id === action.payload._id) {
          tuit.liked = !tuit.liked;
          tuit.likes++;
          return tuit;
        }
        return tuit;
      });
    },
  },
});
export default tuitsSlice.reducer;
export const { removeLike, addLike, createTuit, deleteTuit } =
  tuitsSlice.actions;
