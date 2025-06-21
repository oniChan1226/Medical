import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Truck, GraduationCap, Shield, Clock, Phone, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Equipment Supply & Delivery",
      description: "Complete supply chain solutions for medical and laboratory equipment across the UAE.",
      features: [
        "Wide range of medical equipment",
        "Laboratory instruments",
        "Diagnostic devices",
        "Hospital furniture",
        "Fast delivery across UAE",
        "Real-time tracking",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description:
        "Professional installation and ongoing maintenance services to keep your equipment running optimally.",
      features: [
        "Expert installation team",
        "Equipment calibration",
        "Preventive maintenance",
        "Emergency repairs",
        "Spare parts supply",
        "Performance optimization",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Comprehensive training programs and technical support for your medical equipment.",
      features: [
        "Equipment operation training",
        "Safety protocols",
        "Maintenance procedures",
        "Technical documentation",
        "Online support portal",
        "Video tutorials",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Shield,
      title: "Warranty & Service Plans",
      description: "Extended warranty options and comprehensive service plans for peace of mind.",
      features: [
        "Extended warranty coverage",
        "Annual maintenance contracts",
        "Priority service calls",
        "Replacement guarantees",
        "Cost-effective plans",
        "Flexible terms",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency support for critical medical equipment failures.",
      features: [
        "24/7 helpline",
        "Emergency response team",
        "Remote diagnostics",
        "Rapid on-site service",
        "Critical equipment priority",
        "Backup equipment loans",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Phone,
      title: "Consultation & Planning",
      description: "Expert consultation services to help you choose the right equipment for your needs.",
      features: [
        "Needs assessment",
        "Equipment recommendations",
        "Budget planning",
        "Space optimization",
        "Compliance guidance",
        "Future-proofing advice",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sky-100 text-sky-700">Our Services</Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Comprehensive Medical Equipment Services</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From initial consultation to ongoing support, we provide end-to-end services to ensure your medical and
            laboratory equipment operates at peak performance throughout its lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Service Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure you get the best equipment and service experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We assess your needs and recommend suitable equipment",
              },
              { step: "02", title: "Quotation", description: "Detailed quote with competitive pricing and terms" },
              { step: "03", title: "Delivery", description: "Fast and secure delivery with installation support" },
              { step: "04", title: "Support", description: "Ongoing maintenance and technical support services" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Our team of medical equipment specialists is ready to help you find the perfect solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-slate-100">
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sky-600"
            >
              <Link href="/products">
                View Equipment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
