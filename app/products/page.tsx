import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  Microscope,
  Stethoscope,
  Thermometer,
  Monitor,
  Syringe,
  BedDouble,
  HeartPulse,
  FlaskConical,
} from "lucide-react";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  "Digital Microscopes": <Microscope className="w-12 h-12 text-sky-600" />,
  Centrifuges: <FlaskConical className="w-12 h-12 text-sky-600" />,
  Spectrophotometers: <Thermometer className="w-12 h-12 text-sky-600" />,
  "Ultrasound Machines": <Stethoscope className="w-12 h-12 text-sky-600" />,
  "ECG Machines": <HeartPulse className="w-12 h-12 text-sky-600" />,
  "Blood Analyzers": <FlaskConical className="w-12 h-12 text-sky-600" />,
  "Patient Monitors": <Monitor className="w-12 h-12 text-sky-600" />,
  "Surgical Instruments": <Syringe className="w-12 h-12 text-sky-600" />,
  "Hospital Beds": <BedDouble className="w-12 h-12 text-sky-600" />,
};

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Laboratory Equipment",
      description:
        "High-precision instruments for research and diagnostic laboratories",
      products: [
        {
          name: "Digital Microscopes",
          description:
            "Advanced digital microscopy solutions for detailed analysis",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Centrifuges",
          description:
            "High-speed centrifuges for sample separation and processing",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Spectrophotometers",
          description:
            "Precision instruments for chemical analysis and research",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Diagnostic Tools",
      description:
        "Essential diagnostic equipment for accurate medical assessments",
      products: [
        {
          name: "Ultrasound Machines",
          description:
            "State-of-the-art ultrasound systems for medical imaging",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "ECG Machines",
          description:
            "Reliable electrocardiogram equipment for cardiac monitoring",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Blood Analyzers",
          description: "Automated systems for comprehensive blood analysis",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Hospital Supplies",
      description:
        "Essential medical supplies and equipment for healthcare facilities",
      products: [
        {
          name: "Patient Monitors",
          description: "Advanced monitoring systems for patient vital signs",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Surgical Instruments",
          description: "High-quality surgical tools and equipment",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Hospital Beds",
          description:
            "Comfortable and adjustable hospital beds for patient care",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of medical and laboratory equipment
            designed to meet the highest standards of quality and performance.
          </p>
        </div>

        {/* Product Categories */}
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <Card
                  key={productIndex}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video flex items-center justify-center bg-sky-50">
                    {iconMap[product.name] || (
                      <Microscope className="w-12 h-12 text-sky-500" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enquire Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer a wide range of medical and laboratory equipment beyond
            what's shown here. Contact us to discuss your specific requirements
            and get a customized solution.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
