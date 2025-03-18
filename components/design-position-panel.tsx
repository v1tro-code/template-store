"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RotateCw } from "lucide-react"

interface DesignPositionPanelProps {
  designImage: string | null
  onPositionChange: (position: { x: number; y: number; scale: number }) => void
  onSideChange: (side: "front" | "back") => void
  currentSide: "front" | "back"
}

export function DesignPositionPanel({
  designImage,
  onPositionChange,
  onSideChange,
  currentSide,
}: DesignPositionPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50, scale: 1 })
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })

  // Inicializar la posición cuando cambia la imagen
  useEffect(() => {
    if (designImage) {
      setPosition({ x: 50, y: 50, scale: 1 })
      onPositionChange({ x: 50, y: 50, scale: 1 })
    }
  }, [designImage, onPositionChange])

  // Manejar el inicio del arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!designRef.current || !containerRef.current) return

    setIsDragging(true)

    const containerRect = containerRef.current.getBoundingClientRect()
    const designRect = designRef.current.getBoundingClientRect()

    // Calcular la posición relativa dentro del contenedor
    const relativeX = e.clientX - containerRect.left
    const relativeY = e.clientY - containerRect.top

    // Calcular el offset desde el centro del elemento de diseño
    const offsetX = relativeX - (designRect.left - containerRect.left + designRect.width / 2)
    const offsetY = relativeY - (designRect.top - containerRect.top + designRect.height / 2)

    setStartPos({ x: offsetX, y: offsetY })
  }

  // Manejar el movimiento durante el arrastre
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()

    // Calcular la nueva posición relativa dentro del contenedor
    const relativeX = e.clientX - containerRect.left - startPos.x
    const relativeY = e.clientY - containerRect.top - startPos.y

    // Convertir a porcentaje (0-100) - volvemos a la lógica original, sin inversión
    const percentX = (relativeX / containerRect.width) * 100
    const percentY = (relativeY / containerRect.height) * 100

    // Limitar dentro del contenedor
    const x = Math.max(0, Math.min(percentX, 100))
    const y = Math.max(0, Math.min(percentY, 100))

    const newPosition = { ...position, x, y }
    setPosition(newPosition)
    onPositionChange(newPosition)
  }

  // Manejar el fin del arrastre
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <Label>Posición del diseño</Label>
        <Button variant="outline" size="sm" onClick={() => onSideChange(currentSide === "front" ? "back" : "front")}>
          <RotateCw className="h-4 w-4 mr-2" />
          Girar camiseta
        </Button>
      </div>

      <div className="relative aspect-[4/5] w-full bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          {/* Vista frontal */}
          <div
            ref={containerRef}
            className={`relative border-r ${currentSide === "front" ? "bg-white" : "bg-gray-50"}`}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fronta-UCzGOJHodbKUhIx5vtJRJnasFK0xq8.png"
                alt="Frente de la camiseta"
                className="w-full h-auto object-contain"
              />
            </div>
            {designImage && currentSide === "front" && (
              <div
                ref={designRef}
                className="absolute cursor-move"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: `translate(-50%, -50%) scale(${position.scale})`,
                  width: "90px",
                  height: "90px",
                }}
                onMouseDown={handleMouseDown}
              >
                <img
                  src={designImage || "/placeholder.svg"}
                  alt="Diseño"
                  className="w-full h-full object-contain pointer-events-none"
                />
                {/* Puntos de control para redimensionar */}
                <div className="absolute inset-0 border-2 border-blue-500 border-dashed">
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                </div>
              </div>
            )}
          </div>

          {/* Vista trasera */}
          <div className={`relative ${currentSide === "back" ? "bg-white" : "bg-gray-50"}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Espalda-ZxqzFEMQ2gzHmzJ9E4pKiy7rubdc53.png"
                alt="Espalda de la camiseta"
                className="w-full h-auto object-contain"
              />
            </div>
            {designImage && currentSide === "back" && (
              <div
                className="absolute cursor-move"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: `translate(-50%, -50%) scale(${position.scale})`,
                  width: "80px",
                  height: "80px",
                }}
              >
                <img
                  src={designImage || "/placeholder.svg"}
                  alt="Diseño"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

