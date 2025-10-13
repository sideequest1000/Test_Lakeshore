"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Building2,
  Factory,
  Smartphone,
  Heart,
  Truck,
  Briefcase,
  Award,
  DollarSign,
  Clock,
  Calendar,
} from "lucide-react"

export default function HomePage() {
  const [parallaxY, setParallaxY] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0
      setParallaxY(Math.min(y * 0.15, 60))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simple autoplay for the slideshow
  useEffect(() => {
    if (!carouselApi) return
    const id = setInterval(() => {
      carouselApi.scrollNext()
    }, 3500)
    return () => clearInterval(id)
  }, [carouselApi])

  const services = [
    {
      icon: Target,
      title: "Program Management",
      description:
        "End-to-end program oversight ensuring successful delivery of complex initiatives on time and within budget.",
      link: "/services/program-management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Organizational Change Management",
      description: "Guiding your organization through transformation with structured change management methodologies.",
      link: "/services/change-management",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Shield,
      title: "Vendor Management",
      description:
        "Strategic vendor selection, contract negotiation, and ongoing relationship management for optimal outcomes.",
      link: "/services/vendor-management",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Strategic Execution",
      description: "Turning strategic vision into actionable plans with measurable results and sustainable outcomes.",
      link: "/services/strategic-execution",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: TrendingUp,
      title: "Staff Augmentation",
      description: "Experienced professionals who integrate seamlessly with your team to accelerate project delivery.",
      link: "/services/staff-augmentation",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background image with subtle parallax */}
        <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${parallaxY}px)` }}>
          <Image
            src="/hero.jpeg"
            alt="Chicago skyline reflecting on the lake at sunrise"
            fill
            priority
            className="object-cover object-top md:object-center"
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Strategic Consulting with <span className="text-secondary">Ingenuity and Foresight</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 text-pretty max-w-2xl mx-auto">
              Lake Shore Associates provides strategic, unbiased, and objective advisory services to improve your
              organization's productivity and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 cta-pop">
                <Link href="/services">
                  See Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent cta-pop text-white border-white hover:text-accent-foreground hover:bg-accent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">
              We've helped companies across diverse industries solve their biggest challenges
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-16 opacity-60 text-[#27C0EF]">
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Building2 className="h-8 w-8" />
                <span className="text-sm font-medium">Financial Services</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Factory className="h-8 w-8" />
                <span className="text-sm font-medium">Manufacturing</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Smartphone className="h-8 w-8" />
                <span className="text-sm font-medium">Technology</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Heart className="h-8 w-8" />
                <span className="text-sm font-medium">Healthcare</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Truck className="h-8 w-8" />
                <span className="text-sm font-medium">Logistics</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Briefcase className="h-8 w-8" />
                <span className="text-sm font-medium">Insurance</span>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Building2 className="h-8 w-8" />
                <span className="text-sm font-medium">Financial Services</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Factory className="h-8 w-8" />
                <span className="text-sm font-medium">Manufacturing</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Smartphone className="h-8 w-8" />
                <span className="text-sm font-medium">Technology</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Heart className="h-8 w-8" />
                <span className="text-sm font-medium">Healthcare</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Truck className="h-8 w-8" />
                <span className="text-sm font-medium">Logistics</span>
              </div>
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <Briefcase className="h-8 w-8" />
                <span className="text-sm font-medium">Insurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Before we take out our "Swiss Army" knife of solutions, we take time to listen and understand the
              situation. Recommendations are right-sized to be appropriate for your business and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover-lift cursor-pointer group overflow-hidden relative">
                  {/* Background image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 blur-[1px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Dark gradient overlay (125% height, clipped by card) */}
                  <div className="absolute inset-x-0 bottom-0 h-[125%] bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                  {/* Top-left icon badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 pt-24">
                    <CardHeader className="p-0 pb-3">
                      <CardTitle className="text-2xl md:text-3xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-base md:text-lg text-white/85">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <Button asChild variant="outline" className="bg-transparent text-white border-white hover:text-accent-foreground hover:bg-accent relative z-20">
                        <Link href={service.link} className="inline-flex items-center">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Measurable Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach delivers tangible results that matter to your bottom line.
            </p>
          </div>

          {/* Interactive metrics */}
          {(() => {
            const metrics = [
              { value: "95%", label: "Project Success Rate", icon: Award },
              { value: "$2.5M", label: "Average Cost Savings", icon: DollarSign },
              { value: "30%", label: "Faster Time to Market", icon: Clock },
              { value: "20+", label: "Years of Experience", icon: Calendar },
            ]
            return (
              <InteractiveOutcomes metrics={metrics} />
            )
          })()}
        </div>
      </section>

      {/* How We Think Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              How We Think
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We believe that the thoughtful application of process is instrumental in delivering successful outcomes.
              Our proven methodology ensures achievements satisfy current needs and are sustainable into the future.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 grid-rows-5 md:grid-rows-1 gap-8">
            {/* Glass highlight box that moves across the steps */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="glass-highlight"></div>
            </div>

            {[
              {
                step: "01",
                title: "Listen",
                description: "We start by understanding your unique challenges and goals",
              },
              {
                step: "02",
                title: "Diagnose",
                description: "Deep analysis to identify root causes and opportunities",
              },
              { step: "03", title: "Design", description: "Craft tailored solutions that fit your culture and needs" },
              {
                step: "04",
                title: "Deliver",
                description: "Execute with precision, monitoring progress every step of the way",
              },
              {
                step: "05",
                title: "Sustain",
                description: "Ensure long-term success with ongoing support and optimization",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Slideshow removed per request */}


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let us accompany you on your journey to success. Contact us today to discuss how we can help improve your
            organization's productivity and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 cta-pop">
              <Link href="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent cta-pop">
              <Link href="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function InteractiveOutcomes({ metrics }: { metrics: { value: string; label: string; icon: any }[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      className="mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 transition-all"
      onMouseLeave={() => setHovered(null)}
    >
      {metrics.map((m, i) => {
        const isActive = hovered === i
        const IconComponent = m.icon
        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            className={
              "relative flex-1 min-w-[220px] md:min-w-[0] rounded-xl bg-card/60 border border-border px-6 py-8 text-center cursor-pointer transition-all duration-300 ease-out will-change-transform"
              + (isActive
                ? " scale-110 z-10 shadow-2xl -translate-y-2 md:-translate-y-4"
                : hovered === null
                ? " scale-100"
                : " scale-90 opacity-70")
            }
            style={{ transformOrigin: "center" }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                isActive ? "bg-secondary/20" : "bg-secondary/10"
              }`}>
                <IconComponent className={`h-6 w-6 ${isActive ? "text-secondary" : "text-secondary/70"}`} />
              </div>
            </div>
            <div className={"text-4xl md:text-5xl font-bold mb-2 " + (isActive ? "text-secondary" : "text-secondary/80")}>
              {m.value}
            </div>
            <div className={"text-sm md:text-base " + (isActive ? "text-foreground" : "text-muted-foreground")}>{m.label}</div>

            {isActive && (
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-secondary/40" />
            )}
          </div>
        )
      })}
    </div>
  )
}
