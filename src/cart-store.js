import { createContext, useContext } from 'react'

export const STORAGE_KEY = 'sliceandco.cart'

// One line per pizza+size pair, so ordering a Large and a Medium of the same
// pie keeps them apart the way a real basket would.
export const lineKey = (id, size) => `${id}__${size}`

// The basket survives a reload — a cart that empties when someone refreshes
// reads as broken. Storage can throw (private windows, blocked site data), so
// every access is guarded and simply falls back to an empty basket.
export function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeStored(lines) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  } catch {
    // nothing to do — the basket just will not outlive this tab
  }
}

export const CartContext = createContext(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
