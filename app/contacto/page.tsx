import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-4">
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
            <Link href="/contacto" className="hover:underline font-bold">
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
            <h1 className="text-3xl font-bold">Contáctanos</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="Asunto de tu mensaje" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí" rows={6} />
                  </div>
                  <Button variant="secondary" className="w-full">
                    Enviar mensaje
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Correo electrónico</h3>
                      <p className="text-sm text-muted-foreground">info@graficamente.com</p>
                      <p className="text-sm text-muted-foreground">ventas@graficamente.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+57 300 123 4567</p>
                      <p className="text-sm text-muted-foreground">+57 1 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-sm text-muted-foreground">
                        Calle 123 # 45-67
                        <br />
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Horario de atención</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Lunes - Viernes</p>
                        <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Sábados</p>
                        <p className="text-muted-foreground">9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

