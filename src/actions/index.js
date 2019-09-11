export const ADD_COST = 'ADD_COST';
export const updatePrice = price => {
  console.log(price);
  return { type: ADD_COST, payload: price };
};