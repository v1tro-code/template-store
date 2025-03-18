import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CreditCard, Truck } from "lucide-react"
import { CheckoutClient } from "./checkout-client"

export default function CheckoutPage() {
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
            <h1 className="text-xl font-bold">Graficamente</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/productos" className="flex items-center text-primary hover:underline mr-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver a productos
            </Link>
            <h1 className="text-3xl font-bold">Finalizar compra</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5" />
                    Información de envío
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nombre</Label>
                      <Input id="first-name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Apellido</Label>
                      <Input id="last-name" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" placeholder="Calle, número, apartamento" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" placeholder="Ciudad" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Departamento</Label>
                      <Input id="state" placeholder="Departamento" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Código postal</Label>
                      <Input id="postal-code" placeholder="Código postal" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="Teléfono de contacto" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Información de pago
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número de tarjeta</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input id="expiry" placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Nombre en la tarjeta</Label>
                    <Input id="name-on-card" placeholder="Nombre como aparece en la tarjeta" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <CheckoutClient />
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

