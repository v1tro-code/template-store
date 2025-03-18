import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductCard } from "./product-card"

const products = [
  {
    id: 1,
    name: "Camiseta Personalizada",
    description: "Camiseta 100% algodón con tu diseño favorito",
    price: "$25.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Ropa",
  },
  {
    id: 2,
    name: "Mug Corporativo",
    description: "Mug cerámico con el logo de tu empresa",
    price: "$15.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Accesorios",
  },
  {
    id: 3,
    name: "Gorra Bordada",
    description: "Gorra con bordado personalizado de alta calidad",
    price: "$20.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Ropa",
  },
  {
    id: 4,
    name: "Delantal Sublimado",
    description: "Delantal con diseño sublimado resistente a lavados",
    price: "$30.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Ropa",
  },
  {
    id: 5,
    name: "Lapicero Personalizado",
    description: "Lapicero con tu nombre o logo empresarial",
    price: "$5.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Accesorios",
  },
  {
    id: 6,
    name: "Manilla Estampada",
    description: "Manilla de silicona con diseño personalizado",
    price: "$3.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Accesorios",
  },
  {
    id: 7,
    name: "Cobija Sublimada",
    description: "Cobija suave con diseño personalizado a todo color",
    price: "$50.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Hogar",
  },
  {
    id: 8,
    name: "Cojín Decorativo",
    description: "Cojín con diseño personalizado para decorar tu hogar",
    price: "$18.000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
    category: "Hogar",
  },
]

const categories = ["Todos", "Ropa", "Accesorios", "Hogar"]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-a5OlgVNedh3QG82llkhOAb4ih2h0ME.png"
                alt="Graficamente Estampados Logo"
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-xl font-bold">Graficamente Estampados</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/productos" className="hover:underline font-bold">
              Productos
            </Link>
            <Link href="#" className="hover:underline">
              Personalizar
            </Link>
            <Link href="#" className="hover:underline">
              Empresas
            </Link>
            <Link href="#" className="hover:underline">
              Contacto
            </Link>
          </nav>
          <CartDrawer />
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-primary hover:underline mr-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl font-bold">Nuestros Productos</h1>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant={category === "Todos" ? "default" : "outline"}>
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-a5OlgVNedh3QG82llkhOAb4ih2h0ME.png"
                  alt="Graficamente Estampados Logo"
                  className="w-5 h-5 invert"
                />
              </div>
              <span className="font-semibold">Graficamente Estampados</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Graficamente Estampados. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

