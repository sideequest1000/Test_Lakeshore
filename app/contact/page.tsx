"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@lakeshore.is"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight">
              Let's Start a <span className="text-secondary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Ready to transform your organization? We'd love to hear about your challenges and discuss how we can help
              you achieve your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start a conversation? We'd love to hear about your challenges and discuss how we can help you achieve your strategic objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@lakeshore.is</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Chicagoland Area</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-muted-foreground">
                      Monday - Friday
                      <br />
                      8:00 AM - 6:00 PM CST
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-xs">1</span>
                  </div>
                  <div>
                    <div className="font-medium">Initial Response</div>
                    <div className="text-muted-foreground text-sm">We'll respond to your inquiry within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-xs">2</span>
                  </div>
                  <div>
                    <div className="font-medium">Discovery Call</div>
                    <div className="text-muted-foreground text-sm">30-minute call to understand your challenges</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground font-bold text-xs">3</span>
                  </div>
                  <div>
                    <div className="font-medium">Proposal</div>
                    <div className="text-muted-foreground text-sm">
                      Customized proposal with approach and timeline
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <Button size="lg" onClick={handleEmailClick} className="text-lg px-8">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
