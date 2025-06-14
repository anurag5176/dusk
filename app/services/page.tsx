"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Shield,
  Database,
  Workflow,
  BarChart3,
  Settings,
  CheckCircle,
  Users,
  Network,
  Cog,
  Bot,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20

    setMousePosition({ x, y })
    setHoveredCard(cardIndex)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0 })
  }

  const services = [
    {
      icon: Cog,
      title: "Process Automation",
      subtitle: "Intelligent Workflow Optimization",
      description:
        "Transform repetitive tasks into intelligent, self-managing processes that adapt and improve over time with advanced AI algorithms.",
      features: [
        "Automated data processing",
        "Intelligent document management",
        "Workflow orchestration",
        "Real-time monitoring",
      ],
      color: "from-primary to-accent",
      bgPattern: "cog",
    },
    {
      icon: Brain,
      title: "AI Integration",
      subtitle: "Seamless Intelligence Enhancement",
      description:
        "Integrate cutting-edge AI capabilities directly into your existing systems without disruption or downtime.",
      features: [
        "Natural language processing",
        "Computer vision",
        "Predictive analytics",
        "Machine learning deployment",
      ],
      color: "from-accent to-primary",
      bgPattern: "brain",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Intelligence",
      subtitle: "Transform Data into Actionable Insights",
      description:
        "Unlock the hidden value in your data with advanced analytics and real-time business intelligence dashboards.",
      features: ["Real-time dashboards", "Predictive modeling", "Customer behavior analysis", "Automated reporting"],
      color: "from-primary to-[#0099CC]",
      bgPattern: "chart",
    },
    {
      icon: Shield,
      title: "Secure Enterprise Solutions",
      subtitle: "Enterprise-Grade Security & Compliance",
      description:
        "Implement robust, secure automation solutions that meet the highest enterprise standards and compliance requirements.",
      features: [
        "End-to-end encryption",
        "Multi-factor authentication",
        "Compliance automation",
        "Security monitoring",
      ],
      color: "from-[#0099CC] to-primary",
      bgPattern: "shield",
    },
    {
      icon: Network,
      title: "API & System Integration",
      subtitle: "Seamless Connectivity Solutions",
      description:
        "Connect disparate systems and create unified workflows with our advanced API integration and middleware solutions.",
      features: [
        "RESTful API development",
        "Legacy system integration",
        "Real-time data synchronization",
        "Microservices architecture",
      ],
      color: "from-accent to-[#0099CC]",
      bgPattern: "network",
    },
    {
      icon: Bot,
      title: "Intelligent Chatbots & Virtual Assistants",
      subtitle: "AI-Powered Customer Engagement",
      description:
        "Deploy sophisticated conversational AI that understands context, learns from interactions, and provides exceptional customer experiences.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "Sentiment analysis",
        "Continuous learning",
      ],
      color: "from-[#0099CC] to-accent",
      bgPattern: "bot",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Animated Geometric Patterns */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-primary/10 relative overflow-hidden theme-transition">
        {/* Animated Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <pattern id="geometric-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <polygon
                    points="50,10 90,50 50,90 10,50"
                    fill="none"
                    stroke="#00CFD8"
                    strokeWidth="0.5"
                    opacity="0.3"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 50 50;360 50 50"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                  <circle cx="50" cy="50" r="3" fill="#00CFD8" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Our Arsenal of Automation Solutions</h1>
            <p className="text-xl md:text-2xl text-primary mb-6">
              Precision-Engineered Intelligence for Every Business Challenge
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "We don't just automate processes – we architect intelligent ecosystems that evolve, adapt, and amplify
              human potential across every dimension of your business operations."
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 3D Services Grid */}
      <section className="py-20 bg-background relative overflow-hidden theme-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Flagship Automation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each solution is meticulously crafted with cutting-edge AI technology and designed to deliver exponential
              business growth.
            </p>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-reveal group perspective-1000"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <Card
                  className={`
                    relative h-96 bg-card
                    border-2 border-primary/20 hover:border-primary
                    transition-all duration-500 cursor-pointer overflow-hidden
                    transform-gpu preserve-3d
                    ${hoveredCard === index ? "shadow-2xl shadow-primary/20" : ""}
                  `}
                  style={{
                    transform:
                      hoveredCard === index
                        ? `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(20px)`
                        : "rotateY(0deg) rotateX(0deg) translateZ(0px)",
                  }}
                >
                  {/* Metallic Shine Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(${mousePosition.x + 45}deg, transparent 30%, rgba(0, 207, 216, 0.1) 50%, transparent 70%)`,
                    }}
                  />

                  {/* 3D Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${service.color}`}
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>

                  <CardContent className="relative z-10 p-6 h-full flex flex-col">
                    {/* 3D Icon Container */}
                    <div className="relative mb-6">
                      <div
                        className={`
                          w-20 h-20 mx-auto bg-gradient-to-br ${service.color} 
                          rounded-2xl flex items-center justify-center
                          transform transition-all duration-500
                          ${hoveredCard === index ? "rotate-12 scale-110" : "rotate-0 scale-100"}
                        `}
                        style={{
                          boxShadow:
                            hoveredCard === index
                              ? "0 20px 40px rgba(0, 207, 216, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                              : "0 10px 20px rgba(0, 207, 216, 0.1)",
                        }}
                      >
                        <service.icon
                          size={40}
                          className={`
                            text-background transition-all duration-500
                            ${hoveredCard === index ? "scale-110" : "scale-100"}
                          `}
                        />
                      </div>

                      {/* Floating Particles */}
                      {hoveredCard === index && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: "2s",
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`
                          text-xl font-bold mb-2 transition-all duration-300
                          ${hoveredCard === index ? "text-primary text-glow" : "text-foreground"}
                        `}
                      >
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">{service.subtitle}</p>
                      <p
                        className={`
                          text-muted-foreground text-sm leading-relaxed mb-4 transition-all duration-300
                          ${hoveredCard === index ? "text-[#CCCCCC]" : ""}
                        `}
                      >
                        {service.description}
                      </p>

                      {/* Feature List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`
                              flex items-center text-xs text-[#777777] transition-all duration-300
                              ${hoveredCard === index ? "text-muted-foreground translate-x-1" : ""}
                            `}
                            style={{ transitionDelay: `${featureIndex * 50}ms` }}
                          >
                            <CheckCircle size={12} className="text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="sm"
                      className={`
                        w-full bg-gradient-to-r ${service.color} text-background font-semibold
                        transition-all duration-300 transform
                        ${hoveredCard === index ? "scale-105 shadow-lg shadow-primary/30" : "scale-100"}
                      `}
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className={`
                          ml-2 transition-transform duration-300
                          ${hoveredCard === index ? "translate-x-1" : "translate-x-0"}
                        `}
                      />
                    </Button>
                  </CardContent>

                  {/* Glow Effect Border */}
                  <div
                    className={`
                      absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none
                      ${hoveredCard === index ? "opacity-100" : "opacity-0"}
                    `}
                    style={{
                      background: `linear-gradient(45deg, transparent, ${service.color.includes("00CFD8") ? "#00CFD8" : "#00FFFF"}40, transparent)`,
                      padding: "2px",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                    }}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Background Ambient Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00CFD8]/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary theme-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful automation deployment with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your current processes and identify automation opportunities with AI-powered analysis",
                icon: Database,
              },
              {
                step: "02",
                title: "Strategy & Design",
                description:
                  "Create a customized automation strategy aligned with your business goals and technical requirements",
                icon: Workflow,
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and rigorously test your automation solutions in a secure, isolated environment",
                icon: Settings,
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launch your solutions with comprehensive training and 24/7 ongoing support",
                icon: Users,
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="scroll-reveal text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    {phase.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <phase.icon size={16} className="text-background" />
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary to-background relative overflow-hidden theme-transition">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00CFD8]/5 to-[#00FFFF]/5" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which automation solutions are right for your business and create a custom implementation
              plan that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-background font-semibold text-lg px-8 py-4 hover:glow-effect transition-all duration-300 transform hover:scale-105 group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
