import type { MenuItem, OrderItem } from "../types";

export type OrderActions =
     { type: 'add-order', payload: { item: MenuItem } } |
     { type: 'remove-order', payload: { id: MenuItem['id'] } } |
     { type: 'place-order' } |
     { type: 'add-tip', payload: { value: number } };

export type OrderState = {
     order: OrderItem[];
     //propina
     tip: number;
};

export const initialState: OrderState = {
     order: [],
     tip: 0,
};

export const orderReducer = (
     state: OrderState = initialState,
     action: OrderActions,
) => {
     if (action.type === 'add-order') {
          const index = state.order.findIndex(orderItem => orderItem.id === action.payload.item.id);
          let order: OrderItem[] = [];
          if (index !== -1) {
               // actualizar en una sola pasada
               order = [...state.order];
               order[index] = {
                    ...order[index],
                    quantity: order[index].quantity + 1
               };
          } else {
               order = [...state.order, { ...action.payload.item, quantity: 1 }];
          }
          return {
               ...state,
               order,
          };
     }

     if (action.type === 'remove-order') {
          const order = state.order.filter(order => order.id !== action.payload.id);

          return {
               ...state,
               order,
          };
     }

     if (action.type === 'place-order') {
          return {
               ...state,
               order: [],
               tip: 0
          };
     }

     if (action.type === 'add-tip') {
          return {
               ...state,
               tip: action.payload.value
          };
     }

     return state;
};