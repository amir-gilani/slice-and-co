import { useCallback, useEffect, useMemo, useState } from 'react'
import { CartContext, lineKey, readStored, writeStored } from './cart-store'

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readStored)

  useEffect(() => {
    writeStored(lines)
  }, [lines])

  const add = useCallback((item, qty = 1) => {
    setLines((prev) => {
      const key = lineKey(item.id, item.size)
      const found = prev.find((l) => l.key === key)
      if (found) return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l))
      return [...prev, { ...item, key, qty }]
    })
  }, [])

  const setQty = useCallback((key, qty) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, qty } : l)),
    )
  }, [])

  const remove = useCallback((key) => setLines((prev) => prev.filter((l) => l.key !== key)), [])
  const clear = useCallback(() => setLines([]), [])

  const value = useMemo(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0)
    const subtotal = lines.reduce((n, l) => n + l.price * l.qty, 0)
    return { lines, add, setQty, remove, clear, count, subtotal }
  }, [lines, add, setQty, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
