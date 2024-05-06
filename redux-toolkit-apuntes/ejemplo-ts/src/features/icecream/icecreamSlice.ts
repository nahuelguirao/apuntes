import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type IcecreamInitialState = {
  numOfIcecream: number;
};

const icecreamInitialState: IcecreamInitialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: icecreamInitialState,
  reducers: {
    ordered: (state, _action) => {
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    },
    restocked: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, _action) => {
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    });
  },
});

export default icecreamSlice.reducer;

export const { ordered, restocked } = icecreamSlice.actions;
