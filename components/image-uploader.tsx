"use client"

import type React from "react"

import { useProduct } from "./product-context"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"
import { useRef, useState } from "react"

export default function ImageUploader() {
  const { uploadedImage, setUploadedImage } = useProduct()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Sube tu diseño</h3>

      {!uploadedImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? "border-primary bg-primary/5" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Arrastra y suelta tu imagen aquí</h3>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-4">
            Seleccionar archivo
          </Button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={uploadedImage || "/placeholder.svg"}
            alt="Uploaded design"
            className="max-h-48 mx-auto object-contain rounded-md"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {uploadedImage && (
        <p className="text-sm text-gray-500 mt-2">
          Puedes ajustar la posición y el tamaño de tu diseño en la vista previa.
        </p>
      )}
    </div>
  )
}

