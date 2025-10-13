"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Shield, Handshake } from "lucide-react"

export default function VendorManagementPage() {
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0
      setParallaxY(Math.min(y * 0.3, 140))
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
            src="/vendor-management-banner.jpg"
            alt="Vendor Management banner"
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
                <Shield className="h-6 w-6 text-secondary-foreground" />
              </div>
              <Badge variant="secondary">Service</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Vendor Management
            </h1>
            <p className="text-xl text-white/85 text-pretty max-w-2xl">
              Strategic vendor partnerships built on clarity, alignment, and performance—so value is delivered and shared.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <Image
                  src="/Vender_Management_Medallion.png"
                  alt="Vendor Management Medallion"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>Relationship management is a critical component</strong>, but not where we recommend you start.
                  Trouble can start from a <strong>lack of alignment at the outset</strong> only to be exacerbated by
                  contracts that are difficult to understand and manage. Let us be your match‑maker or relationship
                  counselor to cultivate <strong>mutually beneficial partnerships</strong> with your vendor community.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Whether you are in the process of discovery or recalibrating an existing partnership, sharing an
                  <strong> objective view</strong> of where your journey begins and the planned destination provides the
                  <strong> strategic compass</strong> necessary to align direction, priorities, and decisions.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>Well‑constructed contracts</strong> describe the mutual desired behaviors and include
                  deliverables as well as expected service levels. In today’s business environment—where strategic
                  alliances can be a competitive advantage—<strong>a holistic approach</strong> should also describe how
                  additional value is created and shared between partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Build Stronger Vendor Partnerships
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let’s align expectations, simplify contracts, and unlock shared value with your vendor ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
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


