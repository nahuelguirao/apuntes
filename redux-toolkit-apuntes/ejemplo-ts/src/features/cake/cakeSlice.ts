import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CakeInitialState = {
  numOfCakes: number;
};

const cakeInitialState: CakeInitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeInitialState,
  reducers: {
    ordered: (state, _action) => {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    },
    //PayloadAction<tipoDeDato> Es un tipado de redux
    restocked: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    },
  },
});

//Exportamos el reducer
export default cakeSlice.reducer;

//En el caso de las actions primero desestructuramos y luego exportamos
export const { ordered, restocked } = cakeSlice.actions;
