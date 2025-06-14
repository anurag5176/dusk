"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Brain, Rocket, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bookingSectionRef = useRef<HTMLDivElement>(null)

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

    // Booking section scroll animation observer
    const bookingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          } else {
            entry.target.classList.remove("in-view")
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    if (bookingSectionRef.current) {
      bookingObserver.observe(bookingSectionRef.current)
    }

    return () => {
      observer.disconnect()
      bookingObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen theme-transition">
      {/* Hero Section with Enhanced Twinkling Stars */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-end overflow-hidden pb-8">
        {/* Enhanced Sharp Twinkling Star Background */}
        <div className="absolute inset-0 bg-black">
          {/* Sharp Twinkling Stars - Small and Precise */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`sharp-${i}`}
              className="twinkling-star w-1 h-1"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 1}s`,
              }}
            />
          ))}

          {/* Medium Sharp Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`medium-sharp-${i}`}
              className="twinkling-star w-0.5 h-0.5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`,
              }}
            />
          ))}

          {/* Tiny Precise Stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`tiny-${i}`}
              className="absolute w-px h-px bg-primary animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Central Motion Graphics Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.8, width: '80%', height: '80%' }}
          >
            <source src="/Motion_graphics.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content - Positioned in Center */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold text-lg px-8 py-4 hover:element-glow-effect transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Discover Automation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary theme-transition">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center content-section p-8">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">The Future of Business Automation</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                At Dusk AI, we're not just building automation tools – we're crafting the intelligent systems that will
                define the next generation of business operations. Our AI-powered solutions seamlessly integrate with
                your existing workflows, amplifying human potential while eliminating repetitive tasks.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                From small startups to enterprise giants, we've helped organizations achieve 300% efficiency gains and
                unlock new revenue streams through intelligent automation.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Meet Dusk AI
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            <div className="scroll-reveal">
              <div className="relative h-96 bg-card rounded-lg border-glow-effect flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative z-10 w-full h-full">
                  <iframe
                    src="https://my.spline.design/robotfollowcursorforlandingpage-b6xRut1l0T7w8nud7mtygeUy/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    title="3D Robot Model"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent rounded-full animate-pulse" />
                <div className="absolute top-1/2 right-4 w-4 h-4 border border-primary rounded-full animate-spin" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase - 3D Cards */}
      <section className="py-20 bg-background theme-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Elevate Your Enterprise</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered automation solutions designed to transform every aspect of
              your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Process Automation",
                description: "Streamline workflows with intelligent automation that adapts and learns.",
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "Seamlessly integrate advanced AI capabilities into your existing systems.",
              },
              {
                icon: Rocket,
                title: "Performance Optimization",
                description: "Boost efficiency and productivity with data-driven optimization.",
              },
              {
                icon: Shield,
                title: "Secure Solutions",
                description: "Enterprise-grade security with AI-powered threat detection.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="scroll-reveal card-3d bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer rounded-lg content-section"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:element-glow-effect transition-all duration-300">
                    <service.icon size={32} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-glow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section with Scroll Animation */}
      <section ref={bookingSectionRef} className="py-20 booking-section relative overflow-hidden theme-transition">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="scroll-reveal content-section p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Ready to Revolutionize Your Business?</h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies that have transformed their operations with Dusk AI's
              intelligent automation solutions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold text-lg px-8 py-4 hover:element-glow-effect transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Strategic Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
