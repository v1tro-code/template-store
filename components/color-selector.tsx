"use client"

import type React from "react"

import { useProduct } from "./product-context"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const predefinedColors = [
  { value: "#FFFFFF", label: "Blanco" },
  { value: "#000000", label: "Negro" },
  { value: "#FF0000", label: "Rojo" },
  { value: "#0000FF", label: "Azul" },
  { value: "#FFFF00", label: "Amarillo" },
]

export default function ColorSelector() {
  const { selectedColor, setSelectedColor } = useProduct()
  const [customColor, setCustomColor] = useState("#FFFFFF")
  const [isCustom, setIsCustom] = useState(false)

  const handleColorChange = (value: string) => {
    if (value === "custom") {
      setIsCustom(true)
      setSelectedColor(customColor)
    } else {
      setIsCustom(false)
      setSelectedColor(value)
    }
  }

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value)
    setSelectedColor(e.target.value)
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Selecciona un color</h3>

      <RadioGroup value={isCustom ? "custom" : selectedColor} onValueChange={handleColorChange}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {predefinedColors.map((color) => (
            <div key={color.value} className="flex items-center space-x-2">
              <RadioGroupItem value={color.value} id={color.value} className="sr-only" />
              <Label
                htmlFor={color.value}
                className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 w-full"
              >
                <div
                  className="w-6 h-6 rounded-full border"
                  style={{
                    backgroundColor: color.value,
                    borderColor: color.value === "#FFFFFF" ? "#e2e8f0" : color.value,
                  }}
                />
                <span>{color.label}</span>
              </Label>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" className="sr-only" />
            <Label
              htmlFor="custom"
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 w-full"
            >
              <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: customColor }} />
              <span>Personalizado</span>
            </Label>
          </div>
        </div>
      </RadioGroup>

      {isCustom && (
        <div className="mt-4">
          <Label htmlFor="custom-color">Color personalizado</Label>
          <div className="flex items-center gap-2 mt-1">
            <Input
              type="color"
              id="custom-color"
              value={customColor}
              onChange={handleCustomColorChange}
              className="w-12 h-10 p-1"
            />
            <Input
              type="text"
              value={customColor}
              onChange={handleCustomColorChange}
              className="flex-1"
              placeholder="#FFFFFF"
            />
          </div>
        </div>
      )}
    </div>
  )
}

