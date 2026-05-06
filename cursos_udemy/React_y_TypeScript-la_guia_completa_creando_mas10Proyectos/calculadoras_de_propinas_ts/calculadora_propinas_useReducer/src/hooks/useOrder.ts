import { useState, useCallback } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    // const addItem = (item: MenuItem) => {
    //     const itemExist = order.find(orderItem => orderItem.id === item.id);
    //     if (itemExist) {
    //         const updatedOrder = order.map(orderItem => orderItem.id === item.id 
    //         ? {...orderItem, quantity: orderItem.quantity + 1} 
    //         : orderItem);
    //         setOrder(updatedOrder);
    //     }else{
    //         setOrder([...order, {...item, quantity: 1}]);
    //     }
    //     console.log(order);
    // }

    const addItem = useCallback((item: MenuItem) => {
        setOrder(prevOrder => {
            const index = prevOrder.findIndex(orderItem => orderItem.id === item.id);

            if (index !== -1) {
                // actualizar en una sola pasada
                const updatedOrder = [...prevOrder];
                updatedOrder[index] = {
                    ...updatedOrder[index],
                    quantity: updatedOrder[index].quantity + 1
                };
                return updatedOrder;
            }

            return [...prevOrder, { ...item, quantity: 1 }];
        });
    }, []);

    const removeItem = (id: MenuItem['id']) => {
        setOrder(listOrder => listOrder.filter(order => order.id !== id));
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    };

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}