import ProductCustomizer from "@/components/product-customizer"
import { Button } from "@/components/ui/button"
import { Shirt, Coffee, Pen, Tag } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V1TR%20%283%29-F9RR8HtNKnMbXOsxZbYA9vtV5upd1o.png"
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
            <Link href="/productos" className="hover:underline">
              Productos
            </Link>
            <Link href="#" className="hover:underline">
              Personalizar
            </Link>
            <Link href="#" className="hover:underline">
              Empresas
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </nav>
          <CartDrawer />
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Personaliza tus prendas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Diseña y personaliza tus prendas con sublimación y bordado. Ofrecemos dotaciones empresariales y productos
              personalizados de alta calidad.
            </p>
            <ProductCustomizer />
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Productos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Camisetas",
                  icon: <Shirt className="h-8 w-8 mb-2" />,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
                },
                {
                  name: "Mugs",
                  icon: <Coffee className="h-8 w-8 mb-2" />,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
                },
                {
                  name: "Lapiceros",
                  icon: <Pen className="h-8 w-8 mb-2" />,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
                },
                {
                  name: "Gorras",
                  icon: <Tag className="h-8 w-8 mb-2" />,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Producto-TWRTm7WWQSTQQUNDDch8q7pSOCZCnZ.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    {product.icon}
                    <h3 className="font-medium">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/productos">
                <Button variant="secondary">Ver todos los productos</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V1TR%20%283%29-F9RR8HtNKnMbXOsxZbYA9vtV5upd1o.png"
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

