import { createSlice } from "@reduxjs/toolkit"
const makeupSlice = createSlice({
  name : "makeup",
  initialState : {
     lipstick : [],
     face : [],
     eyes : []

  },
  reducers:{
    addLipstick : (state, action) => {
        state.lipstick = action.payload;
    },
    addFace : (state, action) => {
       state.face = action.payload;
    },
    addEyes : (state, action) => {
        state.eyes = action.payload;
    }
  }
})
export const {addLipstick,addFace,addEyes} = makeupSlice.actions;
export default makeupSlice.reducer