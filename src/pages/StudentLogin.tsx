import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Eye, EyeOff, User, Mail, Phone, Star, Heart, Trophy, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function StudentLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const features = [
    {
      icon: Star,
      title: "Review & Rate",
      description: "Share your experience and help others find the best messes"
    },
    {
      icon: Heart,
      title: "Favorite Dishes",
      description: "Save your favorite dishes and never miss them again"
    },
    {
      icon: Trophy,
      title: "Weekly Voting",
      description: "Vote for the best dish and mess of the week"
    },
    {
      icon: Gift,
      title: "Refer & Earn",
      description: "Earn badges and stickers by referring friends"
    }
  ]

  return (
    <div className="min-h-screen py-8 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Welcome <span className="text-primary">Students</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Join the community and discover amazing mess food near you
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* Login/Register Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Student Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email or Phone</Label>
                      <Input 
                        id="login-email" 
                        type="text" 
                        placeholder="Enter email or phone number"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-12 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-12 w-12"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full h-12" variant="cta">
                      Login to Your Account
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      <Link to="/forgot-password" className="text-primary hover:underline">
                        Forgot your password?
                      </Link>
                    </p>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="h-12 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-12 w-12"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full h-12" variant="cta">
                      Create Student Account
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      By registering, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Join The Daily Plate?
              </h2>
              <p className="text-muted-foreground">
                Discover, review, and enjoy the best mess food in your area
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Benefits Badges */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Student Benefits:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="py-1 px-3">
                  🔍 Search by Dish Name
                </Badge>
                <Badge variant="secondary" className="py-1 px-3">
                  📍 Direct Navigation
                </Badge>
                <Badge variant="secondary" className="py-1 px-3">
                  📞 Quick Call to Mess
                </Badge>
                <Badge variant="secondary" className="py-1 px-3">
                  💰 Price Comparison
                </Badge>
                <Badge variant="secondary" className="py-1 px-3">
                  🏆 Weekly Voting
                </Badge>
                <Badge variant="secondary" className="py-1 px-3">
                  🎯 Refer & Earn
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}