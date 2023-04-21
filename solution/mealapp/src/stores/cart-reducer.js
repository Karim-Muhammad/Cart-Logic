export const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

export const ACTIONS = {
  SET: "set-amount",
  REMOVE: "remove-item",
};

const cartReducer = (state, action) => {
  if (action.type === ACTIONS.SET) {
    console.log(state, "set amount");
    // increase specific amount of item, so we need id of this item action{type, payload}

    console.log(action);
    const { items } = state;
    console.log(items);
    const { item, amount } = action.payload;
    console.log(item);
    console.log(items.length);
    const index = items.findIndex((itm) => itm === item);
    if (index !== -1) {
      const index = items.findIndex((itm) => itm === item);
      items[index].amount = amount;
    } else {
      items.push(item);
    }

    return {
      items: [...items],
      totalAmount: items.reduce((res, itm) => res + itm.price, 0),
    };
  } else if (action.type === ACTIONS.REMOVE) {
  }
};

export default cartReducer;
