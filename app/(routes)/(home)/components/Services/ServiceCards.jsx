import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ContactButton from "../Contact/Contact"

const services = [
  {
    title: "Equipos",
    description: "Si necesita ayuda para encontrar un equipo para tu hogar",
    icon: "🔎",
    buttonText: "Contactanos",
  },
  {
    title: "Cargas termicas",
    description: "Realización de cargas termicas para tu vivienda",
    icon: "🏠",
    buttonText: "Cargas termicas",
  },
  {
    title: "Certificaciones",
    description: "Certificaciones para tu hogar o vivienda",
    icon: "🏅",
    buttonText: "Solicitar información",
  },
  {
    title: "Delineantes",
    description: "Servicio de delineantes",
    icon: "⚖️",
    buttonText: "Programar servicio",
  },
]

export default function ServiceCards() {
  return (
    <section id="servicios" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="#f0f4f8" />
          <path d="M0,200 Q500,0 1000,200 L1000,1000 L0,1000 Z" fill="#e1e8f0" />
          <circle cx="900" cy="100" r="50" fill="#d1dce7" />
          <rect x="100" y="700" width="100" height="100" fill="#d1dce7" />
          <path d="M300,800 L350,900 L250,900 Z" fill="#d1dce7" />
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-2">{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <ContactButton type='normal' buttonText={service.buttonText} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}