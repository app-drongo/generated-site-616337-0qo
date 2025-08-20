// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-20T11:16:36.068Z
// Section: features
// Category: features
// Template ID: features-c001
// Page: Services
// Component: Features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cpu, 
  Shield, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: "SAP Integration",
      description: "Seamlessly connect your SAP systems with our custom integration solutions.",
      badge: "Integration"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      badge: "Security"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Gain deep insights and real-time metrics to drive informed decision-making.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Complete customization to match your brand identity perfectly.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Agile Methodology",
      description: "Iterative development and continuous improvement for maximum efficiency.",
      badge: "Delivery"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Round-the-clock expert support whenever you need assistance.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your data stays yours. We never sell or share your information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Key Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Power of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Integration
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the comprehensive features that make our SAP integration solutions 
            the best choice for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience our SAP integration solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}