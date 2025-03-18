"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, useGLTF, Html } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Upload, RotateCcw, Shirt, Palette } from "lucide-react"
import { DesignPositionPanel } from "./design-position-panel"

// Componente para el modelo 3D
function Model({ color, designTexture, isRotating, designPosition, currentSide }) {
  const groupRef = useRef()
  const { scene, nodes, materials } = useGLTF(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0999fb65aeda0f9b762ce0d9b8536610-fa7nCgHC6dvixI7ZuqCSunpkoT72My.glb",
  )

  // Aplicar color a todos los materiales
  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh && object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => {
            material.color = new THREE.Color(color)
          })
        } else {
          object.material.color = new THREE.Color(color)
        }
      }
    })
  }, [scene, color])

  // Aplicar textura si existe
  useEffect(() => {
    if (designTexture) {
      scene.traverse((object) => {
        if (object.isMesh && object.material) {
          const applyTextureToMaterial = (material) => {
            // Crear un nuevo material para evitar problemas de referencia
            const newMaterial = material.clone()
            newMaterial.map = designTexture.clone()

            // Configurar la textura para que se muestre correctamente
            newMaterial.map.wrapS = THREE.ClampToEdgeWrapping
            newMaterial.map.wrapT = THREE.ClampToEdgeWrapping

            // Calcular la posición relativa (0-1) desde la posición porcentual (0-100)
            // Invertir las coordenadas para que el movimiento sea opuesto al del editor 2D
            const xPos = (100 - designPosition.x) / 37
            const yPos = (80 - designPosition.y) / 50
            // Escala base muy reducida para que el diseño sea significativamente más pequeño en el modelo 3D
            const baseScale = 3
            const finalScale = baseScale * designPosition.scale

            // Configurar la textura
            newMaterial.map.repeat.set(finalScale, finalScale)

            // Ajustar el offset para centrar la textura en la posición deseada
            newMaterial.map.offset.set(xPos - finalScale / 2, yPos - finalScale / 2)

            // Asegurarse de que la textura se actualice
            newMaterial.needsUpdate = true

            // Reemplazar el material original
            if (object.material === material) {
              object.material = newMaterial
            } else if (Array.isArray(object.material)) {
              const index = object.material.indexOf(material)
              if (index !== -1) {
                object.material[index] = newMaterial
              }
            }
          }

          if (Array.isArray(object.material)) {
            object.material.forEach(applyTextureToMaterial)
          } else {
            applyTextureToMaterial(object.material)
          }
        }
      })
    }
  }, [scene, designTexture, designPosition])

  // Rotar el modelo para mostrar frente o espalda
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = currentSide === "back" ? Math.PI : 0
    }
  }, [currentSide])

  // Rotar el modelo suavemente
  useFrame(() => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={[2.2, 2.2, 2.2]} position={[0, 0.2, 0]} />
    </group>
  )
}

// Componente para mostrar un mensaje de carga o error
function LoadingOrError({ message }) {
  return (
    <Html center>
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-center">{message}</p>
      </div>
    </Html>
  )
}

export default function ProductViewer() {
  const [color, setColor] = useState("#ffffff")
  const [designImage, setDesignImage] = useState(null)
  const [designTexture, setDesignTexture] = useState(null)
  const [isRotating, setIsRotating] = useState(true)
  const [modelError, setModelError] = useState(null)
  const [currentSide, setCurrentSide] = useState<"front" | "back">("front")
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 50, scale: 1 })
  const fileInputRef = useRef(null)

  // Precargar el modelo
  useEffect(() => {
    // Precargar el modelo para detectar errores temprano
    const preloadModel = async () => {
      try {
        await useGLTF.preload(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0999fb65aeda0f9b762ce0d9b8536610-fa7nCgHC6dvixI7ZuqCSunpkoT72My.glb",
        )
      } catch (error) {
        console.error("Error precargando el modelo:", error)
        setModelError("No se pudo cargar el modelo 3D")
      }
    }

    preloadModel()
  }, [])

  // Cargar la textura cuando cambia la imagen de diseño
  useEffect(() => {
    if (designImage) {
      const textureLoader = new THREE.TextureLoader()
      textureLoader.crossOrigin = "anonymous" // Importante para evitar problemas CORS

      const texture = textureLoader.load(
        designImage,
        (loadedTexture) => {
          // Éxito al cargar la textura
          loadedTexture.flipY = false
          setDesignTexture(loadedTexture)
        },
        undefined, // Progreso
        (error) => {
          // Error al cargar la textura
          console.error("Error cargando la textura:", error)
          setDesignTexture(null)
        },
      )
    } else {
      setDesignTexture(null)
    }

    // Limpieza
    return () => {
      if (designTexture) {
        designTexture.dispose()
      }
    }
  }, [designImage])

  // Manejar la carga de archivos
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.match("image.*")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setDesignImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Manejar el clic en el botón de carga
  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  // Restablecer el diseño
  const handleReset = () => {
    setDesignImage(null)
    setDesignTexture(null)
    setDesignPosition({ x: 50, y: 50, scale: 1 })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Alternar rotación
  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  // Precargar el logo como diseño por defecto
  useEffect(() => {
    // Usar el logo de dinosaurio como diseño por defecto
    setDesignImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V1TR%20%283%29-F9RR8HtNKnMbXOsxZbYA9vtV5upd1o.png")
  }, [])

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px] md:h-[600px] relative">
        {modelError ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-4">
              <p className="text-red-500 mb-2">{modelError}</p>
              <p className="text-sm text-gray-500">Estamos usando un modelo de ejemplo para la demostración.</p>
            </div>
          </div>
        ) : (
          <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }}>
            <ambientLight intensity={0.7} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
            <Suspense fallback={<LoadingOrError message="Cargando visualización 3D..." />}>
              <Model
                color={color}
                designTexture={designTexture}
                isRotating={isRotating}
                designPosition={designPosition}
                currentSide={currentSide}
              />
              <Environment preset="studio" />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
              <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} autoRotate={false} />
            </Suspense>
          </Canvas>
        )}

        <div className="absolute bottom-4 right-4">
          <Button variant="outline" size="sm" onClick={toggleRotation} className="bg-white/80 backdrop-blur-sm">
            {isRotating ? "Detener rotación" : "Iniciar rotación"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Personaliza tu prenda</h2>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="design">
              <Shirt className="mr-2 h-4 w-4" />
              Diseño
            </TabsTrigger>
            <TabsTrigger value="color">
              <Palette className="mr-2 h-4 w-4" />
              Color
            </TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="space-y-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="design-upload">Sube tu diseño</Label>
              <div className="flex gap-2">
                <Button onClick={handleUploadClick} className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Subir imagen
                </Button>
                <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Restablecer
                </Button>
                <input
                  ref={fileInputRef}
                  id="design-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {designImage && (
                <>
                  <div className="mt-4">
                    <DesignPositionPanel
                      designImage={designImage}
                      onPositionChange={setDesignPosition}
                      onSideChange={setCurrentSide}
                      currentSide={currentSide}
                    />
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="color" className="space-y-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="color-picker">Color de la prenda</Label>
              <div className="flex gap-4">
                <Input
                  id="color-picker"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-16 h-10 p-1"
                />
                <div className="flex items-center">
                  <span className="text-sm font-medium">{color}</span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 mt-2">
                {["#ffffff", "#000000", "#ff0000", "#0000ff", "#ffff00"].map((presetColor) => (
                  <button
                    key={presetColor}
                    className="w-10 h-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ backgroundColor: presetColor }}
                    onClick={() => setColor(presetColor)}
                    aria-label={`Color ${presetColor}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-auto">
          <Button className="w-full">Añadir al carrito</Button>
        </div>
      </div>
    </div>
  )
}

