"use client"

import { useProduct } from "./product-context"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function ImagePositioner() {
  const { position, setPosition } = useProduct()

  const handlePositionChange = (axis: "x" | "y", value: number[]) => {
    setPosition({
      ...position,
      [axis]: value[0],
    })
  }

  const handleScaleChange = (value: number[]) => {
    setPosition({
      ...position,
      scale: value[0],
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Ajusta tu diseño</h3>

      <div className="space-y-2">
        <Label htmlFor="position-x">Posición horizontal</Label>
        <Slider
          id="position-x"
          min={-50}
          max={50}
          step={1}
          value={[position.x]}
          onValueChange={(value) => handlePositionChange("x", value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position-y">Posición vertical</Label>
        <Slider
          id="position-y"
          min={-50}
          max={50}
          step={1}
          value={[position.y]}
          onValueChange={(value) => handlePositionChange("y", value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="scale">Tamaño</Label>
        <Slider id="scale" min={0.5} max={2} step={0.1} value={[position.scale]} onValueChange={handleScaleChange} />
      </div>
    </div>
  )
}

