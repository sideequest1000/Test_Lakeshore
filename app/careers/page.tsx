import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Heart, TrendingUp, Award } from "lucide-react"

export default function CareersPage() {

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Market-leading salary plus performance bonuses and equity participation",
    },
    {
      icon: Heart,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance plus 401k matching and flexible PTO",
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "Continuous learning opportunities, conference attendance, and certification support",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship and leadership development programs",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/Career_banner.jpg"
          alt="Careers banner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-[125%] bg-gradient-to-t from-black/80 via-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              Join Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
              Build your consulting career with a firm that values expertise, collaboration, and making a real impact
              for our clients. We're looking for talented professionals who share our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us removed per request */}

      {/* Culture Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We foster a collaborative environment where diverse perspectives are valued, continuous learning is
                encouraged, and work-life balance is prioritized.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Collaborative and supportive team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Commitment to diversity, equity, and inclusion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Flexible work arrangements and remote options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Focus on professional development and mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Opportunity to work on high-impact client projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/Our_culture.jpg"
                    alt="Our Culture"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
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
            Interested in Joining the Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to
            contribute to our team.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
