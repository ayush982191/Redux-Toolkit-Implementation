import {createSlice} from "@reduxjs/toolkit" 
  
const addItem = (state, { item, qty }) => {
    console.log("state is ", state);
    console.log("Item is ", item, " and qty=", qty);
    const addedItemIndex = state.findIndex((prod) => prod.item.id === item.id);
    console.log("added item index=",addedItemIndex);
    if (addedItemIndex !== -1) {
         state[addedItemIndex].qty += qty;
    } else {
         state.push({ item: item, qty: qty });
    }
};

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state , action) {
            //  state.push(action.payload);
            addItem(state, action.payload);
        },
        remove(state , action) {
           return state.filter( (item)=>item.item.id != action.payload )
        },
    }
})
// console.log("cart slice.actions=",cartSlice.actions);
// console.log("CARTSLICE.REDUCERS =",cartSlice.reducer);
export const {add , remove} = cartSlice.actions;

export default cartSlice.reducer;