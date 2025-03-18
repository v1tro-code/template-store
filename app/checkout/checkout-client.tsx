"use client"

import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function CheckoutClient() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCompleteOrder = () => {
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      clearCart()
      router.push("/checkout/success")
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.length === 0 ? (
          <p className="text-muted-foreground">No hay productos en el carrito</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="relative h-12 w-12 rounded overflow-hidden flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                </div>
                <div className="text-sm font-medium">{item.price}</div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{total}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Envío</span>
                <span>$10.000</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="w-full"
          disabled={items.length === 0 || isProcessing}
          onClick={handleCompleteOrder}
        >
          {isProcessing ? "Procesando..." : "Completar pedido"}
        </Button>
      </CardFooter>
    </Card>
  )
}

