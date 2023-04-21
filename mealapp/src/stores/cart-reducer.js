export const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

export const ACTIONS = {
  SET: "set-amount",
  REMOVE: "remove-item",
};

const cartReducer = (state, action) => {
  const { items } = state;
  const { item, amount } = action.payload;
  // increase specific amount of item, so we need id of this item action{type, payload}

  if (action.type === ACTIONS.SET) {
    console.log(state, "set amount");

    console.log(action);

    const index = items.findIndex((itm) => itm === item);
    if (index !== -1) {
      items[index].amount = amount;
    } else {
      items.push(item);
      // or
      // items.concat(item) return new brand array
    }

    return {
      items: [...items],
      totalAmount: items.reduce((res, itm) => res + itm.price, 0),
    };
  } else if (action.type === ACTIONS.REMOVE) {
    return {
      items: [...items.filter((itm) => itm !== item)],
      totalAmount: items.reduce((res, itm) => res + itm.price, 0),
    };
  }
};

export default cartReducer;
