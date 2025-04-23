import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertas: [],
};

export const alertasSlice = createSlice({
  name: "alertas",
  initialState,
  reducers: {
    setAlertas: (state, action) => {
        state.alertas = action.payload;
    },
    addAlerta: (state, action) => {
        if(!Array.isArray(state.alertas)) {
          state.alertas = [];
        }else{
          state.alertas.push(action.payload);

          state.alertas = [...state.alertas].map((n, i) => {
            return {
              title: n.title, 
              message: n.message, 
              status: n.status,
              index: i
            }
          });
        }
    },
    deleteAlerta: (state, action) => {
      if(state.alertas !== undefined ) {
        state.alertas = [...state.alertas].filter((n) => n.index !== action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlertas, addAlerta, deleteAlerta } = alertasSlice.actions;

export default alertasSlice.reducer;
