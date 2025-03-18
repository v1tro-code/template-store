"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ProductType = "camiseta" | "delantal" | "mug" | "lapicero" | "manilla" | "cobija" | "cojin" | "gorra"

interface ProductContextType {
  selectedProduct: ProductType
  setSelectedProduct: (product: ProductType) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  uploadedImage: string | null
  setUploadedImage: (image: string | null) => void
  position: { x: number; y: number; scale: number }
  setPosition: (position: { x: number; y: number; scale: number }) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("camiseta")
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 })

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        selectedColor,
        setSelectedColor,
        uploadedImage,
        setUploadedImage,
        position,
        setPosition,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}

