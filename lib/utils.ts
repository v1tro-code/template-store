import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de Tailwind de manera eficiente, evitando duplicados y conflictos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea un precio en formato colombiano
 */
export function formatPrice(price: string | number): string {
  // Si el precio viene como string con formato "$XX.XXX", lo convertimos a número
  if (typeof price === "string") {
    // Eliminar el símbolo $ y los puntos
    const numericPrice = price.replace(/[$.]/g, "")
    price = Number.parseInt(numericPrice, 10)
  }

  // Formatear el precio con separador de miles
  return `$${price.toLocaleString("es-CO")}`
}

/**
 * Trunca un texto a una longitud máxima
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

