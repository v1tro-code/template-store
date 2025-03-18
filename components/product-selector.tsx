"use client"

import { useProduct } from "./product-context"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const products = [
  { id: "camiseta", name: "Camiseta", price: "$25.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "delantal", name: "Delantal", price: "$30.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "mug", name: "Mug", price: "$15.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "lapicero", name: "Lapicero", price: "$5.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "manilla", name: "Manilla", price: "$3.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "cobija", name: "Cobija", price: "$50.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "cojin", name: "Cojín", price: "$18.000", image: "/placeholder.svg?height=100&width=100" },
  { id: "gorra", name: "Gorra", price: "$20.000", image: "/placeholder.svg?height=100&width=100" },
]

export default function ProductSelector() {
  const { selectedProduct, setSelectedProduct } = useProduct()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Selecciona un producto</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className={`cursor-pointer transition-all ${selectedProduct === product.id ? "ring-2 ring-primary" : ""}`}
            onClick={() => setSelectedProduct(product.id as any)}
          >
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-20 h-20 relative mb-2">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
              <h4 className="font-medium text-center">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

