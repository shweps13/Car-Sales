export const ADD_COST = 'ADD_COST';

export const updatePrice = price => {
  console.log("Added price is: ",price);
  return {
    type: ADD_COST,
    payload: price
    };
};