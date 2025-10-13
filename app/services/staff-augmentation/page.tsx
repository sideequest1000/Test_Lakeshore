import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Users } from "lucide-react"

export default function StaffAugmentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background banner */}
        <Image
          src="/team-photo-banner.jpg"
          alt="Staff Augmentation banner"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <Badge variant="secondary">Service</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Staff Augmentation
            </h1>
            <p className="text-xl text-white/85 text-pretty max-w-2xl">
              Scale your team quickly with seasoned professionals who fit your culture and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden">
                <Image
                  src="/team-building-image.jpg"
                  alt="Team building"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-pretty">
                  <strong>Unfilled roles can disrupt business-as-usual operations</strong> and major transformations.
                  Gaps arise for many reasons—from a <strong>lack of in‑house skills</strong> to planned leaves. Let us
                  put our skilled talent management team to work to scour our network of seasoned associates to fulfill
                  your needs.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Hiring full-time workers for short-term tasks is <strong>resource‑intensive and costly</strong>.
                  Staff Augmentation offers a <strong>cost‑effective</strong> way to supplement your team—combining the
                  reliability of full‑time staff with the <strong>flexibility to scale</strong> up or down.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Our process goes beyond simply matching a skillset to a need. We start by partnering to understand not
                  just the skills, but the <strong>culture and behavioral traits</strong> needed for a seamless
                  integration—delivering a true <strong>“hand‑in‑glove” fit</strong>.
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
            Need Talent Now?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            We’ll bring the right people at the right time with the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
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


