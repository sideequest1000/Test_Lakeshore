"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle, Target, AlertTriangle, TrendingUp, Users } from "lucide-react"

export default function ProgramManagementPage() {
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0
      setParallaxY(Math.min(y * 0.25, 120))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background banner with parallax */}
        <div
          className="absolute inset-0 will-change-transform pointer-events-none"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <Image
            src="/program-management-banner.jpg"
            alt="Program Management banner"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-secondary-foreground" />
              </div>
              <Badge variant="secondary">Service</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Program Management
            </h1>
            <p className="text-xl text-white/85 text-pretty max-w-2xl">
              End-to-end program oversight ensuring successful delivery of complex initiatives on time and within budget
              through proven methodologies and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>We treat your time, talent, and resources like they're our own</strong>, making sure every investment delivers real results. By tailoring our capabilities to your exact needs, we help you reach the outcomes you want, whether it's a small initiative or a large-scale program.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>Unlike firms that rely on a single "hammer," we bring a full, multidisciplinary toolkit.</strong> Our integrated approach ensures each engagement is right-sized for the challenge at hand, with the confidence that we're equipped to handle the unexpected.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>We bring structure, clarity, and accountability</strong> to your most complex initiatives through proven program management methodologies tailored to your organization's needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <Image
                  src="/PPP_Management_Medallion.png"
                  alt="Program Management Medallion"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Expected Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our program management approach delivers measurable results that drive organizational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shine-card">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">95%</CardTitle>
                <CardDescription>On-time delivery rate</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">15%</CardTitle>
                <CardDescription>Average budget savings</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">90%</CardTitle>
                <CardDescription>Stakeholder satisfaction</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">85%</CardTitle>
                <CardDescription>Risk mitigation success</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Ready to Ensure Your Program's Success?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how our program management expertise can help you deliver complex initiatives on time and
            within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/services">Other Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
