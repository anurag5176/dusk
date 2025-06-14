"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp, Brain, Zap, Shield, Rocket } from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories = ["All", "AI & Automation", "Industry Insights", "Case Studies", "Technology", "Best Practices"]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Automation: 2024 Trends and Predictions",
      excerpt:
        "Explore the cutting-edge trends shaping the automation landscape and how businesses can prepare for the AI-driven future.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Automation",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      tags: ["AI", "Automation", "Trends", "Future Tech"],
    },
    {
      id: 2,
      title: "Case Study: How TechFlow Industries Achieved 400% Efficiency Gains",
      excerpt:
        "A deep dive into our successful automation implementation that transformed TechFlow's operations and boosted their bottom line.",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Case Studies",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Case Study", "Success Story", "ROI", "Implementation"],
    },
    {
      id: 3,
      title: "Security in AI Automation: Best Practices for Enterprise",
      excerpt:
        "Essential security considerations and best practices when implementing AI automation in enterprise environments.",
      author: "Dr. Emily Watson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Best Practices",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Security", "Enterprise", "Best Practices", "Compliance"],
    },
    {
      id: 4,
      title: "Machine Learning Models in Production: Deployment Strategies",
      excerpt:
        "Learn how to successfully deploy and maintain machine learning models in production environments for maximum impact.",
      author: "Alex Kim",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Machine Learning", "Deployment", "Production", "MLOps"],
    },
    {
      id: 5,
      title: "Industry 4.0: Manufacturing Automation Revolution",
      excerpt: "How smart manufacturing and AI-driven automation are revolutionizing the industrial landscape.",
      author: "Jennifer Park",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Industry Insights",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Manufacturing", "Industry 4.0", "Smart Factory", "IoT"],
    },
    {
      id: 6,
      title: "Building Scalable Automation Workflows: A Technical Guide",
      excerpt:
        "Technical insights into designing and implementing automation workflows that scale with your business growth.",
      author: "David Chen",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["Workflows", "Scalability", "Architecture", "Technical"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Automation":
        return Brain
      case "Technology":
        return Zap
      case "Best Practices":
        return Shield
      case "Industry Insights":
        return TrendingUp
      case "Case Studies":
        return Rocket
      default:
        return Brain
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden theme-transition">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="twinkling-star w-0.5 h-0.5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Dusk AI Insights</h1>
            <p className="text-xl md:text-2xl mb-6">Intelligence, Innovation, and Industry Leadership</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, best practices, and success stories in AI automation. Our expert insights help
              you navigate the future of intelligent business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border theme-transition">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input border-border focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-primary to-accent text-accent-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-gradient-to-b from-background to-secondary theme-transition">
          <div className="container mx-auto px-4">
            <div className="scroll-reveal">
              <div className="text-center mb-12">
                <Badge className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold mb-4">
                  Featured Article
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-glow">Editor's Pick</h2>
              </div>

              <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-glow transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm mb-6">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-primary/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold hover:element-glow-effect transition-all duration-300 w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-background theme-transition">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-glow">
                {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
              </h2>
              <p>
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Search size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Articles Found</h3>
                <p className="mb-6">Try adjusting your search terms or category filter.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => {
                  const CategoryIcon = getCategoryIcon(post.category)
                  return (
                    <Card
                      key={post.id}
                      className="scroll-reveal bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground flex items-center">
                          <CategoryIcon size={12} className="mr-1" />
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-glow transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm mb-4">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="border-primary/50 text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="border-muted/50 text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:bg-primary hover:text-primary-foreground p-2"
                          >
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary to-background relative overflow-hidden theme-transition">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="scroll-reveal max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Stay Updated</h2>
            <p className="text-xl mb-8">
              Get the latest insights on AI automation, industry trends, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-input border-border focus:border-primary"
              />
              <Button className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold hover:element-glow-effect transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
