import { createSlice } from "@reduxjs/toolkit";

// Un slice es un conjuntos de variables y funciones
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers:{
    increment: (currentState) => {
        currentState.value += 1; //{value 100}
    },
    decrement : (currentState)=> {
        currentState.value -= 1;
    },
    setValue: (currentState, action) => {
        currentState.value = action.payload;
    }
  },

});

// exportar las funciones que estan dentro 
//export const incrementReducers = counterSlice.actions.increment;
//export const descrementReducers = counterSlice.actions.decrement;

export const { increment, decrement, setValue} = counterSlice.actions;
// para usar esto dentro del store, debo exportarlo como un reducer
export const counterSliceReducer = counterSlice.reducer;
