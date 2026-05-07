import type { ActionDispatch } from "react"
import type { MenuItem } from "../types"
import type { OrderActions } from "../reducer/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button 
      className="border-2 border-teal-400 rounded-lg hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({ type: 'add-order', payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

