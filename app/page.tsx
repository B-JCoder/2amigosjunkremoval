"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Truck,
  Home,
  Building,
  Trash2,
  CheckCircle,
  Clock,
  Shield,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const handleCall = () => {
    window.location.href = "tel:2104455274"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you soon for your free estimate.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-header border-b border-border/50 red-shadow">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Image
                src="/public/images/newlogo.png"
                alt="Mendoza Strong 💪🏽 junk removal LLC"
                width={100}
                height={50}
                className="rounded-lg sm:w-[160px] sm:h-[60px]"
              />
              <div>
             
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <Button onClick={handleCall} variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                (210) 445-5274
              </Button>
            </nav>

            <div className="flex items-center space-x-2 lg:hidden">
              <Button onClick={handleCall} variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button onClick={handleCall} variant="outline" size="sm" className="sm:hidden p-2 bg-transparent">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-3 pt-4">
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick("#services")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("#gallery")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Gallery
                </button>
                <button
                  onClick={() => handleNavClick("#pricing")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Pricing
                </button>
                <button
                  onClick={() => handleNavClick("#testimonials")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Reviews
                </button>
                <Button onClick={scrollToContact} className="w-full mt-2">
                  Get Free Estimate
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
<section className="py-12 sm:py-16 lg:py-20 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="max-w-4xl mx-auto">
      <Badge className="mb-4 sm:mb-6 bg-accent text-accent-foreground text-sm red-shadow font-semibold">
        Junk In, Junk Out!
      </Badge>

      {/* New headline */}
      <p className="text-lg sm:text-xl font-semibold text-primary mb-2">
        Family Owned &amp; Operated
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-[family-name:var(--font-playfair)] text-balance leading-tight">
        Professional Junk Removal in San Antonio
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto px-2">
        Fast, reliable, and affordable junk removal services. Serving Converse, Selma, and surrounding areas with
        free estimates and same-day service.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
        <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          Get Free Estimate
        </Button>
        <Button onClick={handleCall} size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
          <Phone className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Call Now: </span>(210) 445-5274
        </Button>
      </div>

      <div className="mb-8 px-4">
        <Image
          src="/images/special-offer.png"
          alt="Special Offer - Free Estimates"
          width={800}
          height={400}
          className="mx-auto rounded-lg red-shadow-lg w-full max-w-3xl h-auto"
        />
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 glass-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 font-[family-name:var(--font-playfair)]">
               About Mendoza Strong 💪🏽 junk removal LLC

            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <Shield className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fully licensed and insured for your peace of mind
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Quick response times and flexible scheduling
                </p>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-sm sm:text-base text-muted-foreground">We recycle and donate whenever possible</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              We are your trusted local junk removal experts serving San Antonio, Converse, and Selma. Our professional
              team provides reliable, efficient, and eco-friendly junk removal services for residential and commercial
              properties. From single items to complete cleanouts, we handle it all with care and professionalism.
            </p>
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
              Schedule Your Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Comprehensive junk removal solutions for all your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg p-6">
              <div className="pb-4">
                <Truck className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Valet Trash Services</h3>
              </div>
              <div>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                  Convenient curbside pickup for residential and commercial properties
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto glass border-primary/50 hover:bg-primary/20 text-foreground bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg p-6">
              <div className="pb-4">
                <Home className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Small Move Services</h3>
              </div>
              <div>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                  Efficient moving services for apartments, condos, and small homes
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto glass border-primary/50 hover:bg-primary/20 text-foreground bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg p-6">
              <div className="pb-4">
                <Building className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Cleanout Services</h3>
              </div>
              <div>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                  Complete cleanouts for estates, evictions, sheds, and garages
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto glass border-primary/50 hover:bg-primary/20 text-foreground bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg p-6">
              <div className="pb-4">
                <Trash2 className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Removal Services</h3>
              </div>
              <div>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                  Appliances, furniture, and unwanted junk removal
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto glass border-primary/50 hover:bg-primary/20 text-foreground bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 glass-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Our Work Gallery
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">See the quality of our junk removal services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg red-shadow hover:red-shadow-lg transition-all duration-300"
              >
                <Image
                  src={`/images/gallery/work${i}.jpg`}
                  alt={`Junk removal work ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-foreground font-semibold text-sm sm:text-base">Professional Cleanup</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">No hidden fees - just honest, upfront pricing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
                  Basic
                </h3>
                <p className="text-muted-foreground mb-4">Perfect for small cleanups</p>
                <div className="text-2xl sm:text-3xl font-bold text-primary mt-4">$99+</div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Up to 1/4 truck load</li>
                  <li>• Single room cleanout</li>
                  <li>• Few furniture pieces</li>
                  <li>• Free estimates</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full red-shadow">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="glass-strong text-center transition-all duration-300 red-shadow-lg border-primary/50 rounded-lg">
              <div className="p-6">
                <Badge className="mb-2 bg-primary text-primary-foreground red-shadow">Most Popular</Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
                  Standard
                </h3>
                <p className="text-muted-foreground mb-4">Great for home cleanouts</p>
                <div className="text-2xl sm:text-3xl font-bold text-primary mt-4">$199+</div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Up to 1/2 truck load</li>
                  <li>• Multiple room cleanout</li>
                  <li>• Appliance removal</li>
                  <li>• Same-day service</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full red-shadow">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="glass text-center hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-2">
                  Premium
                </h3>
                <p className="text-muted-foreground mb-4">Complete property cleanouts</p>
                <div className="text-2xl sm:text-3xl font-bold text-primary mt-4">$399+</div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Full truck load</li>
                  <li>• Whole house cleanout</li>
                  <li>• Estate/eviction cleanup</li>
                  <li>• Priority scheduling</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full red-shadow">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 glass-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="glass hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Maria Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-4">Converse, TX</p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground">
                  "Excellent service! They arrived on time, worked efficiently, and cleaned up everything perfectly. The
                  pricing was very fair and transparent. Highly recommend!"
                </p>
              </div>
            </div>

            <div className="glass hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">James Thompson</h3>
                <p className="text-sm text-muted-foreground mb-4">San Antonio, TX</p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground">
                  "Professional team that handled our estate cleanout with care and respect. They even donated items
                  that were still in good condition. Great service!"
                </p>
              </div>
            </div>

            <div className="glass hover:glass-strong transition-all duration-300 red-shadow hover:red-shadow-lg rounded-lg md:col-span-2 lg:col-span-1">
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-4">Selma, TX</p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground">
                  "Quick response and same-day service! They removed our old appliances and furniture without any
                  hassle. Will definitely use them again."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
                Get Your Free Estimate
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground px-2">
                Ready to get rid of your junk? Contact us today for a free, no-obligation estimate.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 font-[family-name:var(--font-playfair)] text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:2104455274"
                        className="text-muted-foreground hover:text-primary text-sm sm:text-base"
                      >
                        (210) 445-5274
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:junkremoval2amigos@gmail.com"
                        className="text-muted-foreground hover:text-primary text-sm sm:text-base break-all"
                      >
                        junkremoval2amigos@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Service Areas</p>
                      <p className="text-muted-foreground text-sm sm:text-base">San Antonio, Converse, Selma, TX</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button onClick={handleCall} size="lg" className="w-full lg:w-auto red-shadow">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Immediate Service
                  </Button>
                </div>
              </div>
              <div className="glass red-shadow-lg rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Request Free Estimate</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="text-base glass border-border/50 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="text-base glass border-border/50 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="text-base glass border-border/50 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Describe what you need removed..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        required
                        className="text-base resize-none glass border-border/50 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full red-shadow" size="lg">
                      Get My Free Estimate
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong border-t border-border/50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/publicimagesnewlogo.png"
                  alt="Mendoza Strong 💪🏽 junk removal LLC"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-playfair)]">
                  Mendoza Strong 💪🏽 junk removal LLC
                </h3>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Professional junk removal services in San Antonio, TX. Licensed, insured, and eco-friendly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Valet Trash Services</li>
                <li>Small Move Services</li>
                <li>Cleanout Services</li>
                <li>Removal Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>San Antonio, TX</li>
                <li>Converse, TX</li>
                <li>Selma, TX</li>
                <li>Surrounding Areas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <p>Phone: (210) 445-5274</p>
                <p className="break-all">Email: junkremoval2amigos@gmail.com</p>
                <p>Tagline: "Junk In, Junk Out!"</p>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-secondary-foreground/60">
              © 2025 Mendoza Strong 💪🏽 junk removal LLC. All rights reserved. Licensed and insured in Texas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
