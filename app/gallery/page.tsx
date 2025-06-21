"use client";

import { JSX, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Microscope,
  Stethoscope,
  Syringe,
  Monitor,
  Thermometer,
  BedDouble,
  X,
  Activity,
  HeartPulse,
  Radiation,
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  laboratory: <Microscope className="w-20 h-20 text-sky-600" />,
  diagnostic: <Thermometer className="w-20 h-20 text-sky-600" />,
  surgical: <Syringe className="w-20 h-20 text-sky-600" />,
  monitoring: <Monitor className="w-20 h-20 text-sky-600" />,
  default: <X className="w-20 h-20 text-slate-300" />,
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Equipment" },
    { id: "laboratory", name: "Laboratory" },
    { id: "diagnostic", name: "Diagnostic" },
    { id: "surgical", name: "Surgical" },
    { id: "monitoring", name: "Monitoring" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Digital Microscope System",
      category: "laboratory",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-resolution digital microscopy for detailed analysis",
    },
    {
      id: 2,
      title: "Ultrasound Machine",
      category: "diagnostic",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced ultrasound imaging system",
    },
    {
      id: 3,
      title: "Surgical Suite Equipment",
      category: "surgical",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete surgical equipment setup",
    },
    {
      id: 4,
      title: "Patient Monitor",
      category: "monitoring",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-parameter patient monitoring system",
    },
    {
      id: 5,
      title: "Laboratory Centrifuge",
      category: "laboratory",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-speed centrifuge for sample processing",
    },
    {
      id: 6,
      title: "X-Ray System",
      category: "diagnostic",
      image: "/placeholder.svg?height=300&width=400",
      description: "Digital radiography system",
    },
    {
      id: 7,
      title: "Anesthesia Machine",
      category: "surgical",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced anesthesia delivery system",
    },
    {
      id: 8,
      title: "ECG Machine",
      category: "monitoring",
      image: "/placeholder.svg?height=300&width=400",
      description: "12-lead electrocardiogram system",
    },
    {
      id: 9,
      title: "Spectrophotometer",
      category: "laboratory",
      image: "/placeholder.svg?height=300&width=400",
      description: "UV-Vis spectrophotometer for analysis",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sky-100 text-sky-700">
            Equipment Gallery
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Our Equipment Showcase
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of medical and laboratory
            equipment. From cutting-edge diagnostic tools to essential
            laboratory instruments, see the quality and innovation we bring to
            healthcare.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="card-hover border-0 shadow-lg bg-white overflow-hidden"
            >
              <div className="aspect-video flex items-center justify-center bg-sky-50">
                {iconMap[item.category] || iconMap.default}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                  {categories.find((cat) => cat.id === item.category)?.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Interested in Any Equipment?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us for detailed specifications, pricing, and availability of
            any equipment shown in our gallery.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white"
          >
            <a href="/contact">Get Equipment Quote</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
