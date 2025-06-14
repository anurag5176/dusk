"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM PST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@duskai.com",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Innovation Drive, Tech Valley, CA 94000",
      description: "Visit us by appointment",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      description: "Weekend support available",
    },
  ]

  const services = [
    "Process Automation",
    "AI Integration",
    "Data Analytics",
    "Custom Solutions",
    "Consulting Services",
    "Training & Support",
    "Other",
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-background theme-transition">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-accent-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Thank You!</h1>
          <p className="text-xl mb-8">
            Your message has been received. Our team will get back to you within 24 hours to discuss your automation
            needs.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
              })
            }}
            className="bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 theme-transition">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden theme-transition">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Connect With Us</h1>
            <p className="text-xl md:text-2xl mb-6">Let's Transform Your Business Together</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your operations with AI automation? Our experts are here to help you design and
              implement the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background theme-transition">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 scroll-reveal">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-glow flex items-center">
                    <MessageSquare className="mr-3" size={32} />
                    Send Us a Message
                  </CardTitle>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2 bg-input border-border focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 bg-input border-border focus:border-primary"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="font-medium">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2 bg-input border-border focus:border-primary"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 bg-input border-border focus:border-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="font-medium">
                        Service of Interest
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 bg-input border-border rounded-md focus:border-primary focus:outline-none sunset-text"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="mt-2 bg-input border-border focus:border-primary resize-none"
                        placeholder="Tell us about your automation needs and goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold text-lg py-3 hover:element-glow-effect transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 scroll-reveal">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-glow">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon size={24} className="text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="font-medium mb-1">{info.details}</p>
                        <p className="text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-glow">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold justify-start">
                    <Calendar className="mr-3" size={20} />
                    Schedule a Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary hover:bg-primary hover:text-primary-foreground justify-start"
                  >
                    <Users className="mr-3" size={20} />
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary hover:bg-primary hover:text-primary-foreground justify-start"
                  >
                    <Zap className="mr-3" size={20} />
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Clock size={32} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
                  <p>We typically respond to all inquiries within 24 hours during business days.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary theme-transition">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Visit Our Office</h2>
              <p className="text-xl max-w-2xl mx-auto">
                Located in the heart of Tech Valley, our office is designed for collaboration and innovation.
              </p>
            </div>

            <div className="relative h-96 bg-card rounded-2xl border-glow-effect overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p>123 Innovation Drive, Tech Valley, CA 94000</p>
                  <Button className="mt-4 bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
