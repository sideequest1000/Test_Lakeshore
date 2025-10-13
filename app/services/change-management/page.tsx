"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle, Users, TrendingUp, Heart, Brain } from "lucide-react"

export default function ChangeManagementPage() {
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
            src="/organizational-change-management.jpg"
            alt="Organizational Change Management banner"
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
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <Badge variant="secondary">Service</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Organizational Change Management
            </h1>
            <p className="text-xl text-white/85 text-pretty max-w-2xl">
              Change is constant and we prepare, support, and assist individuals, teams, and organizations navigate
              change complexity to deliver sustainable performance. Our recipe starts with a proven goal-oriented
              change model and adds experience, agility, judgement, creativity, and a dash of humor. We like to keep
              it real and make it fun.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <Image
                  src="/Org_Change_Medallion.png"
                  alt="Organizational Change Medallion"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              
            </div>
            <div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>Change occurs one individual at a time</strong> and it is personal. <strong>The case for
                  change must appeal to each person</strong> for an organization to leverage the synergies their people
                  can bring in realizing the benefits of their change objectives.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  For change programs to be effective, it is important to leverage a <strong>process and toolset that
                  scales to the enterprise</strong> and beyond the table stakes of communication and training. <strong>We
                  help you lead organizational change</strong> and make sure your people remain connected, <strong>one
                  person at a time</strong>.
                </p>
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
              Our change management approach drives higher adoption rates and sustainable organizational transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shine-card">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">85%</CardTitle>
                <CardDescription>User adoption rate</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">75%</CardTitle>
                <CardDescription>Employee engagement increase</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <Brain className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">60%</CardTitle>
                <CardDescription>Faster capability building</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center shine-card">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-2xl text-secondary">90%</CardTitle>
                <CardDescription>Change sustainability rate</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how our change management expertise can help you achieve sustainable organizational
            transformation.
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
