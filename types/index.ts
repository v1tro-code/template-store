// Tipos de productos
export type ProductType = "camiseta" | "delantal" | "mug" | "lapicero" | "manilla" | "cobija" | "cojin" | "gorra"

export interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

// Tipos para el carrito
export interface CartItem {
  id: number
  name: string
  price: string
  image: string
  quantity: number
}

// Tipos para la personalización
export interface DesignPosition {
  x: number
  y: number
  scale: number
}

// Tipos para los temas
export type Theme = "light" | "dark" | "system"

