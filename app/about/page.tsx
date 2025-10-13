import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Target, Heart, Award, Lightbulb, Shield, Handshake, GroupIcon as Group, Brain } from "lucide-react"

export default function AboutPage() {
  const leadership = [
    {
      name: "Tina Garrity",
      title: "Managing Principal",
      specialization: "Strategic Transformation",
      linkedin: "https://www.linkedin.com/in/tina-garrity-a90845/",
      image: "/Tina1.png",
      bio: "Founder of Lake Shore Associates with 20+ years as a management consultant to Fortune 500 firms. Expert in planning and executing large-scale transformations with a focus on quality and sustainability. Skilled at mobilizing multi-skilled teams through both Program Management Offices and agile structures. Recognized for strong communication and building long-lasting client relationships.",
    },
    {
      name: "Eileen Koch",
      title: "Vice President, Consulting",
      specialization: "Program & Vendor Management",
      linkedin: "https://www.linkedin.com/in/eileenkoch/",
      image: "/Eileen1.png",
      bio: "20+ years of management consulting experience across telecom, banking, manufacturing, retail, supply chain, and insurance. Leader in executing business strategy with expertise in program and vendor management, organizational change, and process improvement. Known for servant leadership, direct communication, and mentoring to strengthen teams.",
    },
    {
      name: "David Wise",
      title: "Director",
      specialization: "Enterprise Program Leadership",
      linkedin: "https://www.linkedin.com/company/lake-shore-associates-inc./",
      image: "/Dave1.png",
      bio: "Over 20 years as a consultant and leader for Fortune 500 companies in telecom, technology, quick-serve restaurants, and professional services. Experienced in enterprise application integration, workforce alignment, and vendor management. Expertise in solution architecture, business process reengineering, and organizational change management. Strong communicator with a track record of execution excellence.",
    },
    {
      name: "Frank Carrera",
      title: "Director",
      specialization: "Enterprise PMO & Product Management",
      linkedin: "https://www.linkedin.com/in/frankcarrera1/",
      image: "/Frank1.png",
      bio: "20+ years of consulting experience with Fortune 500 clients across telecom, health insurance, technology, financial services, retail, and consumer packaged goods. Results-driven leader with expertise in enterprise program management, product development, and large-scale technology initiatives. Skilled in cloud services delivery, multi-channel operations, and customer experience strategy.",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Each of us does our best, shows strength of character, and takes responsibility for our work.",
    },
    {
      icon: Handshake,
      title: "Respect for Others",
      description:
        "Create an environment where respect is paramount—treat everyone with dignity and set positive examples.",
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      description:
        "Increase our capacity to make choices and transform them into actions and outcomes for our clients.",
    },
    {
      icon: Target,
      title: "Client Focus",
      description:
        "Serve our clients’ best interests by aligning to their goals and building long‑term relationships.",
    },
    {
      icon: Users,
      title: "Team‑First Mentality",
      description:
        "We achieve more together—collaborative thinking and combined effort drive better results.",
    },
    {
      icon: Heart,
      title: "Diversity",
      description:
        "Recognize that each person is unique; respect and leverage individual differences.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/About_us_banner.jpg"
          alt="About Lake Shore Associates banner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-[125%] bg-gradient-to-t from-black/80 via-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight text-white">
              About <span className="text-secondary">Lake Shore Associates</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
              We align our values to how we behave on every engagement. Our clients trust us to partner with them to
              lead engagements and deliver solutions—combining experience with curiosity, hard work, and flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                <span className="font-semibold">Vision:</span> Be the consultancy of choice that solves clients’ most
                complex, highly visible, and sometimes unpopular problems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                <span className="font-semibold">Mission:</span> LSA provides clients with seasoned professionals and the
                expertise necessary to drive transformational change through Program / Project / Portfolio Management
                (P3MO), Supplier Lifecycle Management, and Strategic Change Advisory. Leveraging proven methodologies,
                our consultants drive bottom‑line results while balancing the unique needs of each client’s culture.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Provide outstanding value to our clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Offer unparalleled service through repeatable methodologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Integrate seamlessly with our clients to enable their success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Win in the marketplace by striving for delivery excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Embrace a collaborative community</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/LS_Book.png"
                    alt="LSA book illustration"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section removed per request */}

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by a leadership team that averages over 20 years of experience in industry and consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-stretch min-h-[280px]">
                    {/* Left: portrait headshot focal area */}
                    <div className="relative md:w-1/3 w-full min-h-[220px] md:min-h-[280px] rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden bg-card p-4">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} headshot`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                        className="object-contain object-center"
                        priority={false}
                      />
                    </div>

                    {/* Right: info area */}
                    <div className="md:w-2/3 w-full p-6 pt-4 md:pt-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-xl">{leader.name}</CardTitle>
                          <CardDescription className="text-secondary font-medium">{leader.title}</CardDescription>
                        </div>
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${leader.name}'s LinkedIn profile`}
                            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-secondary/10 transition-colors overflow-hidden"
                          >
                            <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} className="h-5 w-5 object-contain" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3 mt-1">
                        <strong>Specialization:</strong> {leader.specialization}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">20+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$100M+</div>
              <div className="text-muted-foreground">Value Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section removed per request */}

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let us accompany you on your journey to success. Contact us today to discuss how we can help improve your
            organization's productivity and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
