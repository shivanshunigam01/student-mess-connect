import { motion } from "framer-motion"
import { Search, MapPin, Star, Clock, Phone, ArrowRight, Users, Utensils, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-mess-food.jpg"
import messHallImage from "@/assets/mess-hall-interior.jpg"
import thaliImage from "@/assets/indian-thali.jpg"

const featuredMesses = [
  {
    id: 1,
    name: "Shree Krishna Mess",
    location: "Near Main Gate",
    rating: 4.5,
    image: thaliImage,
    speciality: "Gujarati Thali",
    price: "₹120",
    services: ["Sitting", "Tiffin"],
    timing: "7 AM - 10 PM"
  },
  {
    id: 2,
    name: "Annapurna Mess",
    location: "College Road",
    rating: 4.3,
    image: thaliImage,
    speciality: "South Indian",
    price: "₹100",
    services: ["Sitting", "Parcel"],
    timing: "6 AM - 11 PM"
  },
  {
    id: 3,
    name: "Rajdhani Mess",
    location: "Hostel Block A",
    rating: 4.7,
    image: thaliImage,
    speciality: "Punjabi Cuisine",
    price: "₹150",
    services: ["Sitting", "Tiffin", "Parcel"],
    timing: "8 AM - 9 PM"
  }
]

const dailyHighlights = [
  { name: "Chole Bhature", price: "₹40", mess: "Punjab Mess", image: thaliImage },
  { name: "Masala Dosa", price: "₹35", mess: "Udipi Corner", image: thaliImage },
  { name: "Rajma Chawal", price: "₹50", mess: "Home Kitchen", image: thaliImage },
  { name: "Pav Bhaji", price: "₹45", mess: "Mumbai Express", image: thaliImage },
]

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Delicious mess food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Find Your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Mess Menu
                </span>{" "}
                in Seconds
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Discover the best mess food in your college area. Connect with local mess operators, 
                explore daily menus, and never miss your favorite meal again.
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by mess name or dish..." 
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                  <Link to="/mess-list">
                    Find Messes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Happy Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  <span>50+ Partner Messes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>1000+ Dishes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Messes Carousel */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Messes</h2>
          <p className="text-xl text-muted-foreground">Discover the most popular messes in your area</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMesses.map((mess, index) => (
            <motion.div
              key={mess.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mess.image} 
                    alt={mess.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    {mess.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{mess.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{mess.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{mess.timing}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mess.services.map((service) => (
                      <Badge key={service} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{mess.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="cta" asChild>
                        <Link to={`/mess/${mess.id}`}>View Menu</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Highlights */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Today's Special Dishes</h2>
            <p className="text-xl text-muted-foreground">Don't miss these popular items from our partner messes</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyHighlights.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{dish.mess}</p>
                    <p className="text-lg font-bold text-primary">{dish.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Connecting Students with
              <span className="text-primary"> Great Food</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Daily Plate bridges the gap between hungry students and quality mess food. 
              We make it easy for students to discover local messes and for mess operators 
              to showcase their delicious offerings.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">For Students</h3>
                  <p className="text-muted-foreground">Find and review the best mess food in your area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">For Mess Owners</h3>
                  <p className="text-muted-foreground">Easy menu management and customer connection</p>
                </div>
              </div>
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={messHallImage} 
              alt="Students enjoying mess food"
              className="rounded-lg shadow-elegant w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}