"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/components/cart-context"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">{product.price}</span>
          <Button size="sm" variant="secondary" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Añadir
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

