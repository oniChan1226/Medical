import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Alyonus</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for high-quality medical and laboratory equipment in Dubai and across the UAE.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Company</h2>
            <p className="text-gray-600 mb-4">
              Alyonus For Medical & Laboratory Equipment is a leading supplier of high-quality medical and laboratory
              equipment based in Dubai. We specialize in providing comprehensive solutions to healthcare facilities,
              research institutions, and laboratories throughout the UAE.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience in the medical equipment industry, we have built a reputation for reliability,
              quality, and exceptional customer service. Our team of experts works closely with clients to understand
              their specific needs and provide tailored solutions.
            </p>
            <p className="text-gray-600">
              We are committed to supporting the healthcare sector by providing access to the latest medical
              technologies and equipment from renowned manufacturers worldwide.
            </p>
          </div>
          <div>
            <img
              src="/as.svg"
              alt="Medical Equipment Showroom"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <CardContent className="pt-6">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of medical and laboratory equipment in the UAE, recognized for our commitment
                to quality, innovation, and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide healthcare professionals with reliable, high-quality medical and laboratory equipment, backed
                by exceptional service and technical support.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Aldar Building, 120 1st Floor
                <br />
                Markbat Dubai
              </p>
            </div>

            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">043468297</p>
            </div>

            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
              <p className="text-gray-600 text-sm">055 979 6601</p>
            </div>

            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">zehabpoperty55@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
