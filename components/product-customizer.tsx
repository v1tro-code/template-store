"use client"

import { useState } from "react"
import ProductViewer from "./product-viewer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shirt, Coffee, Tag, BookOpen } from "lucide-react"

const products = [
  { id: "camiseta", name: "Camiseta", price: "$25.000", icon: <Shirt className="h-5 w-5" /> },
  { id: "mug", name: "Mug", price: "$15.000", icon: <Coffee className="h-5 w-5" /> },
  { id: "gorra", name: "Gorra", price: "$20.000", icon: <Tag className="h-5 w-5" /> },
  { id: "libreta", name: "Libreta", price: "$12.000", icon: <BookOpen className="h-5 w-5" /> },
]

export default function ProductCustomizer() {
  const [selectedProduct, setSelectedProduct] = useState("camiseta")
  const [activeTab, setActiveTab] = useState("personalizar")

  const selectedProductData = products.find((p) => p.id === selectedProduct)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b">
          <div className="container">
            <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
              <TabsTrigger
                value="personalizar"
                className="h-14 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Personalizar
              </TabsTrigger>
              <TabsTrigger
                value="productos"
                className="h-14 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Productos
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="container py-6">
          <TabsContent value="personalizar" className="mt-0">
            <ProductViewer />
          </TabsContent>

          <TabsContent value="productos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className={`cursor-pointer transition-all ${
                    selectedProduct === product.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {product.icon}
                    </div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-muted-foreground">{product.price}</p>

                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product.id)
                        setActiveTab("personalizar")
                      }}
                    >
                      Personalizar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Producto seleccionado</h3>
                  <p className="text-muted-foreground">
                    {selectedProductData?.name} - {selectedProductData?.price}
                  </p>
                </div>
                <Button onClick={() => setActiveTab("personalizar")}>Personalizar ahora</Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

