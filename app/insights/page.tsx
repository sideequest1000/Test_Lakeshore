import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, User, Target, Users, Shield, Zap, TrendingUp } from "lucide-react"

export default function InsightsPage() {
  const articles = [
    {
      id: "digital-transformation-roadmap",
      title: "Building a Digital Transformation Roadmap That Actually Works",
      excerpt:
        "Most digital transformation initiatives fail due to poor planning and execution. Here's how to build a roadmap that delivers results.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Strategic Execution",
      icon: Zap,
      featured: true,
    },
    {
      id: "change-management-psychology",
      title: "The Psychology of Organizational Change: What Leaders Need to Know",
      excerpt:
        "Understanding the human side of change is crucial for successful transformation. Explore the psychological factors that drive adoption.",
      author: "Jennifer Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Change Management",
      icon: Users,
    },
    {
      id: "vendor-management-best-practices",
      title: "Vendor Management Best Practices for 2024",
      excerpt:
        "Navigate the evolving vendor landscape with proven strategies for selection, negotiation, and relationship management.",
      author: "David Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Vendor Management",
      icon: Shield,
    },
    {
      id: "program-management-frameworks",
      title: "Choosing the Right Program Management Framework",
      excerpt:
        "Compare popular program management methodologies and learn how to select the best approach for your organization.",
      author: "Michael Chen",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Program Management",
      icon: Target,
    },
    {
      id: "roi-consulting-investments",
      title: "Measuring ROI on Consulting Investments",
      excerpt:
        "Learn how to quantify the value of consulting engagements and build a business case for strategic initiatives.",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Strategic Execution",
      icon: TrendingUp,
    },
    {
      id: "remote-team-management",
      title: "Managing Remote Teams During Organizational Change",
      excerpt:
        "Practical strategies for leading distributed teams through transformation initiatives and maintaining engagement.",
      author: "Jennifer Rodriguez",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Change Management",
      icon: Users,
    },
  ]

  // Filters removed per request

  const featuredArticle = articles[0]
  const FeaturedIcon = featuredArticle.icon

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 tracking-tight">
              Insights & <span className="text-secondary">Thought Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Expert perspectives on management consulting, organizational transformation, and strategic execution from
              our team of experienced practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Filters removed per request */}

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured tag removed per request */}
          <div className="mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{featuredArticle.excerpt}</p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{featuredArticle.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{featuredArticle.date}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/insights/${featuredArticle.id}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg flex items-center justify-center">
                <FeaturedIcon className="h-24 w-24 text-secondary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest thinking on management consulting and organizational transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => {
              const ArticleIcon = article.icon
              return (
                <Card key={article.id} className="hover-lift cursor-pointer group h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <ArticleIcon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                    >
                      <Link href={`/insights/${article.id}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
