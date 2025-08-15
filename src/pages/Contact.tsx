import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "Send us your queries anytime",
    value: "hello@thedailyplate.com",
    action: "mailto:hello@thedailyplate.com"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "Talk to our support team",
    value: "+91 9876543210",
    action: "tel:+919876543210"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    description: "Come meet us in person",
    value: "Mumbai, Maharashtra, India",
    action: "#"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Support Hours",
    description: "We're here to help",
    value: "Mon - Fri: 9 AM - 6 PM",
    action: "#"
  }
]

export default function Contact() {
  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions, suggestions, or need help? We'd love to hear from you. 
            Reach out to us and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                  <a 
                    href={info.action}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 9876543210" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map/Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-card rounded-lg flex items-center justify-center border">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How do I register my mess?</h4>
                  <p className="text-sm text-muted-foreground">
                    Simply click on "For Mess Owners" in the header and fill out our registration form. 
                    We'll get you set up within 24 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Is the platform free for students?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! The Daily Plate is completely free for students. Browse messes, read reviews, 
                    and discover great food without any charges.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How do I report an issue?</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the contact form above or email us directly. We take all reports seriously 
                    and will investigate promptly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}