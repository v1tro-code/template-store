import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
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
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">¡Pedido completado!</h1>
          <p className="text-muted-foreground mb-8">
            Gracias por tu compra. Hemos recibido tu pedido y te enviaremos un correo electrónico con los detalles de tu
            compra.
          </p>
          <div className="space-y-4">
            <p className="font-medium">Número de pedido: #GE-{Math.floor(100000 + Math.random() * 900000)}</p>
            <Link href="/">
              <Button variant="secondary" className="w-full">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
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

