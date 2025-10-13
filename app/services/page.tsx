import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Users, Shield, Zap, TrendingUp } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Target,
      title: "Program Management",
      description:
        "End-to-end program oversight ensuring successful delivery of complex initiatives on time and within budget.",
      href: "/services/program-management",
      id: "program-management",
      benefits: ["Risk mitigation", "Resource optimization", "Stakeholder alignment"],
    },
    {
      icon: Users,
      title: "Organizational Change Management",
      description: "Guiding your organization through transformation with structured change management methodologies.",
      href: "/services/change-management",
      id: "change-management",
      benefits: ["Employee engagement", "Adoption acceleration", "Cultural transformation"],
    },
    {
      icon: Shield,
      title: "Vendor Management",
      description:
        "Strategic vendor selection, contract negotiation, and ongoing relationship management for optimal outcomes.",
      href: "/services/vendor-management",
      id: "vendor-management",
      benefits: ["Cost optimization", "Quality assurance", "Risk reduction"],
    },
    {
      icon: Zap,
      title: "Strategic Execution",
      description: "Turning strategic vision into actionable plans with measurable results and sustainable outcomes.",
      href: "/services/strategic-execution",
      id: "strategic-execution",
      benefits: ["Goal achievement", "Performance tracking", "Strategic alignment"],
    },
    {
      icon: TrendingUp,
      title: "Staff Augmentation",
      description: "Experienced professionals who integrate seamlessly with your team to accelerate project delivery.",
      href: "/services/staff-augmentation",
      id: "staff-augmentation",
      benefits: ["Skill enhancement", "Capacity scaling", "Knowledge transfer"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background graphic */}
        <Image
          src="/services-banner.jpg"
          alt="Our Services background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 text-pretty max-w-2xl mx-auto">
              Comprehensive consulting services designed to improve your organization's productivity and performance
              through strategic guidance and expert execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} id={service.id} className="hover-lift cursor-pointer group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                  >
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss your challenges and goals. We'll help you identify the right approach for your organization.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
