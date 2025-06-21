import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Award,
  Phone,
  Users,
  Truck,
  CheckCircle,
  Star,
  ArrowRight,
  Microscope,
  Stethoscope,
  Activity,
} from "lucide-react";

export default function HomePage() {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Equipment Delivered", icon: Truck },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const services = [
    {
      icon: Microscope,
      title: "Laboratory Equipment",
      description:
        "Complete range of lab instruments and analytical equipment for research facilities.",
      features: [
        "Digital Microscopes",
        "Centrifuges",
        "Spectrophotometers",
        "Incubators",
      ],
    },
    {
      icon: Stethoscope,
      title: "Medical Devices",
      description:
        "Advanced medical equipment for hospitals and healthcare facilities.",
      features: [
        "Ultrasound Systems",
        "ECG Machines",
        "Patient Monitors",
        "Surgical Tools",
      ],
    },
    {
      icon: Activity,
      title: "Diagnostic Solutions",
      description:
        "Cutting-edge diagnostic equipment for accurate medical assessments.",
      features: [
        "Blood Analyzers",
        "X-Ray Systems",
        "MRI Equipment",
        "CT Scanners",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Ahmed Hassan",
      position: "Chief Medical Officer",
      company: "Dubai Medical Center",
      content:
        "Alyonus has been our trusted partner for medical equipment. Their quality and service are exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Al-Mansouri",
      position: "Lab Director",
      company: "Emirates Research Institute",
      content:
        "The laboratory equipment we purchased exceeded our expectations. Highly professional team.",
      rating: 5,
    },
    {
      name: "Dr. Michael Johnson",
      position: "Hospital Administrator",
      company: "International Medical Hospital",
      content:
        "Outstanding support and timely delivery. Alyonus is definitely our go-to supplier.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">
                🏆 Dubai's #1 Medical Equipment Supplier
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Your Trusted
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  {" "}
                  Medical & Lab
                </span>
                <br />
                Equipment Partner
              </h1>
              <p className="text-xl mb-8 text-slate-600 leading-relaxed">
                Providing cutting-edge medical and laboratory equipment to
                healthcare professionals across Dubai and the UAE. Quality
                guaranteed, service excellence delivered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact" className="text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Request Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Link href="/products">
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ISO Certified
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fast Delivery
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl transform rotate-3"></div>
              <img
                src="/Doctors-bro.svg"
                alt="Medical and Laboratory Equipment"
                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-sky-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              Our Specialties
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Medical Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cutting-edge laboratory instruments to essential medical
              devices, we provide complete solutions for healthcare facilities
              across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-sky-200 text-sky-600 hover:bg-sky-50"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-sky-100 text-sky-700">
                Why Choose Alyonus
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Excellence in Every Aspect
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                With over 15 years of experience in the medical equipment
                industry, we've built our reputation on quality, reliability,
                and exceptional customer service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-slate-600">
                      All our equipment meets international standards and comes
                      with comprehensive warranties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Timely Delivery
                    </h3>
                    <p className="text-slate-600">
                      Fast and reliable delivery services across Dubai and the
                      UAE with real-time tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Expert Support
                    </h3>
                    <p className="text-slate-600">
                      Our technical team provides installation, training, and
                      ongoing maintenance support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 space-x-1 space-y-1">
                <div className="flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 shadow">
                  <Microscope className="w-10 h-10 text-sky-600 mb-4" />
                  <span className="text-sm font-medium text-slate-700 text-center">
                    Lab Equipment
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 shadow mt-8">
                  <Stethoscope className="w-10 h-10 text-sky-600 mb-4" />
                  <span className="text-sm font-medium text-slate-700 text-center">
                    Medical Devices
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 shadow -mt-8">
                  <Activity className="w-10 h-10 text-sky-600 mb-4" />
                  <span className="text-sm font-medium text-slate-700 text-center">
                    Diagnostics
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 shadow">
                  <Award className="w-10 h-10 text-sky-600 mb-4" />
                  <span className="text-sm font-medium text-slate-700 text-center">
                    Quality Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what healthcare
              professionals across Dubai say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-sky-600">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Medical Equipment?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts today for personalized recommendations
            and competitive quotes on the latest medical and laboratory
            equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-600 hover:bg-slate-100 shadow-lg"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sky-600"
            >
              <Link href="/products">
                Browse Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
