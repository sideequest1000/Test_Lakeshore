 
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Map } from "lucide-react"

export default function StrategicExecutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background banner */}
        <Image
          src="/strategic-execution-banner.jpg"
          alt="Strategic Execution banner"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <Badge variant="secondary">Service</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Strategic Execution
            </h1>
            <p className="text-xl text-white/85 text-pretty max-w-2xl">
              From vision to reality—align strategy, prioritize initiatives, and execute with clarity.
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
                  src="/Strat_Execution_Medallion.png"
                  alt="Strategic Execution Medallion"
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
                  <strong>Visionaries inspire and motivate</strong> us to reach for the stars. The challenge comes when it
                  is time to create and communicate a <strong>roadmap people understand and can follow</strong>. Absent a
                  clear map with directions, any road seems to be the right road—often leading to <strong>false starts
                  and backtracking</strong>.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Transformations come in various shapes and sizes. Our process builds the bridges from vision to reality
                  by establishing the <strong>strategic imperatives</strong>. Trade-offs are weighed, benefits evaluated,
                  and priorities established to map the best route for the organization to drive toward.
                </p>
                <p className="text-lg text-muted-foreground text-pretty">
                  Once leadership is aligned and <strong>mission objectives are clear</strong>, it’s time to drive into the
                  future. We integrate the needed ingredients from our suite of service offerings to ensure your
                  <strong>vision becomes the new reality</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <Card className="shine-card">
                    <CardHeader>
                      <CardTitle className="text-base">Project Management</CardTitle>
                      <CardDescription>Delivering results one project at a time</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="shine-card">
                    <CardHeader>
                      <CardTitle className="text-base">Organizational Change</CardTitle>
                      <CardDescription>From resistance to adoption</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="shine-card">
                    <CardHeader>
                      <CardTitle className="text-base">Vendor Management</CardTitle>
                      <CardDescription>Aligned to roadmap objectives</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Align Strategy and Execute with Confidence
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let’s turn your strategic vision into measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Start the Journey <ArrowRight className="ml-2 h-5 w-5" />
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


