"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta Personalizada",
    description: "Camiseta 100% algodón con tu diseño favorito",
    price: "$25.000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Mug Corporativo",
    description: "Mug cerámico con el logo de tu empresa",
    price: "$15.000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Gorra Bordada",
    description: "Gorra con bordado personalizado de alta calidad",
    price: "$20.000",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Delantal Sublimado",
    description: "Delantal con diseño sublimado resistente a lavados",
    price: "$30.000",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">{product.price}</span>
                  <Button size="sm" variant="outline">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Añadir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

