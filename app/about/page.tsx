"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Award, TrendingUp, Star, Quote } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    efficiency: 0,
    revenue: 0,
    satisfaction: 0,
  })

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

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats()
          }
        })
      },
      { threshold: 0.5 },
    )

    const statsElement = document.getElementById("stats-section")
    if (statsElement) {
      statsObserver.observe(statsElement)
    }

    return () => {
      observer.disconnect()
      statsObserver.disconnect()
    }
  }, [])

  const animateStats = () => {
    const targets = { clients: 500, efficiency: 300, revenue: 250, satisfaction: 98 }
    const duration = 2000
    const steps = 60

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedStats({
        clients: Math.floor(targets.clients * easeOut),
        efficiency: Math.floor(targets.efficiency * easeOut),
        revenue: Math.floor(targets.revenue * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut),
      })

      if (step >= steps) {
        clearInterval(interval)
      }
    }, duration / steps)
  }

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & AI Research Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former MIT AI Lab researcher with 15+ years in machine learning and automation.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Systems Architect",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ex-Google engineer specializing in scalable AI infrastructure and enterprise integration.",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Product Innovation",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Stanford PhD in Computer Science, leading our next-generation automation platforms.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Dusk AI transformed our operations completely. We've seen a 400% increase in processing efficiency and our team can now focus on strategic initiatives instead of repetitive tasks.",
      author: "Jennifer Park",
      company: "TechFlow Industries",
      rating: 5,
    },
    {
      quote:
        "The AI integration was seamless and the results were immediate. Our customer response time improved by 80% and satisfaction scores reached all-time highs.",
      author: "David Thompson",
      company: "Global Solutions Corp",
      rating: 5,
    },
    {
      quote:
        "Working with Dusk AI has been a game-changer. Their automation solutions helped us scale our operations without increasing headcount.",
      author: "Maria Gonzalez",
      company: "Innovation Labs",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen pt-20 theme-transition">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Neural network background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" />
                  <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="100" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="scroll-reveal">
              <Quote size={48} className="text-primary mx-auto mb-6" />
              <blockquote className="text-3xl md:text-4xl font-bold mb-8 text-glow leading-relaxed">
                "We don't just automate processes – we reimagine what's possible when human creativity meets artificial
                intelligence."
              </blockquote>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Dusk AI</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pioneering the future of intelligent business automation since 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-background theme-transition">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We envision a world where businesses operate with unprecedented efficiency, where AI and human
                intelligence work in perfect harmony to solve complex challenges and unlock new possibilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to democratize access to advanced AI automation, making cutting-edge technology
                accessible to businesses of all sizes while maintaining the highest standards of security, reliability,
                and ethical AI practices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Target size={32} className="text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Pushing boundaries</p>
                </div>
                <div className="text-center">
                  <Award size={32} className="text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Uncompromising quality</p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="relative h-96 bg-card rounded-lg border-glow-effect overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dusk AI Vision"
                  className="w-full h-full object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">The Future is Automated</h3>
                  <p className="text-muted-foreground">Intelligent systems working seamlessly with human teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary theme-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Our Passionate Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds behind Dusk AI's revolutionary automation solutions. Our diverse team of AI
              researchers, engineers, and visionaries are united by a common goal: transforming the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="scroll-reveal bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success & Analytics */}
      <section id="stats-section" className="py-20 bg-background theme-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Client Success & Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. See how we've helped businesses across industries achieve remarkable
              growth through intelligent automation.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Happy Clients", value: animatedStats.clients, suffix: "+", icon: Users },
              { label: "Efficiency Increase", value: animatedStats.efficiency, suffix: "%", icon: TrendingUp },
              { label: "Revenue Growth", value: animatedStats.revenue, suffix: "%", icon: Award },
              { label: "Satisfaction Rate", value: animatedStats.satisfaction, suffix: "%", icon: Star },
            ].map((stat, index) => (
              <Card
                key={index}
                className="scroll-reveal bg-card border-border text-center group hover:element-glow-effect transition-all duration-300"
              >
                <CardContent className="p-6">
                  <stat.icon size={32} className="text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2 text-glow">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-primary fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div className="border-t border-primary/20 pt-4">
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary to-background relative overflow-hidden theme-transition">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Dusk AI can transform your business operations and drive unprecedented growth.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold text-lg px-8 py-4 hover:element-glow-effect transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Strategic Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
