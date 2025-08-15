import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, MapPin, Star, Clock, Phone, Utensils, Car, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"
import thaliImage from "@/assets/indian-thali.jpg"

const messes = [
  {
    id: 1,
    name: "Shree Krishna Mess",
    location: "Near Main Gate, College Road",
    rating: 4.5,
    reviews: 120,
    image: thaliImage,
    speciality: "Gujarati Thali",
    price: "₹120",
    services: ["Sitting", "Tiffin"],
    timing: "7 AM - 10 PM",
    isOpen: true,
    badge: "Best Mess of the Week",
    cuisine: "Gujarati",
    distance: "0.5 km"
  },
  {
    id: 2,
    name: "Annapurna Mess",
    location: "College Road, Block B",
    rating: 4.3,
    reviews: 85,
    image: thaliImage,
    speciality: "South Indian",
    price: "₹100",
    services: ["Sitting", "Parcel"],
    timing: "6 AM - 11 PM",
    isOpen: true,
    cuisine: "South Indian",
    distance: "0.8 km"
  },
  {
    id: 3,
    name: "Rajdhani Mess",
    location: "Hostel Block A",
    rating: 4.7,
    reviews: 200,
    image: thaliImage,
    speciality: "Punjabi Cuisine",
    price: "₹150",
    services: ["Sitting", "Tiffin", "Parcel"],
    timing: "8 AM - 9 PM",
    isOpen: false,
    cuisine: "Punjabi",
    distance: "1.2 km"
  },
  {
    id: 4,
    name: "Mumbai Express",
    location: "Near Library",
    rating: 4.2,
    reviews: 95,
    image: thaliImage,
    speciality: "Street Food",
    price: "₹80",
    services: ["Sitting", "Parcel"],
    timing: "11 AM - 11 PM",
    isOpen: true,
    cuisine: "Street Food",
    distance: "0.3 km"
  },
  {
    id: 5,
    name: "Home Kitchen",
    location: "Behind Canteen",
    rating: 4.4,
    reviews: 110,
    image: thaliImage,
    speciality: "Home Style",
    price: "₹90",
    services: ["Tiffin", "Parcel"],
    timing: "9 AM - 8 PM",
    isOpen: true,
    cuisine: "North Indian",
    distance: "0.7 km"
  },
  {
    id: 6,
    name: "Udipi Corner",
    location: "Main Market",
    rating: 4.6,
    reviews: 150,
    image: thaliImage,
    speciality: "Udipi Cuisine",
    price: "₹110",
    services: ["Sitting", "Tiffin"],
    timing: "7 AM - 10 PM",
    isOpen: true,
    cuisine: "South Indian",
    distance: "1.0 km"
  }
]

const serviceIcons = {
  "Sitting": Utensils,
  "Tiffin": Package,
  "Parcel": Car
}

export default function MessList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const [filterService, setFilterService] = useState("all")
  const [filterCuisine, setFilterCuisine] = useState("all")

  const filteredMesses = messes
    .filter(mess => {
      const matchesSearch = mess.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           mess.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesService = filterService === "all" || mess.services.includes(filterService)
      const matchesCuisine = filterCuisine === "all" || mess.cuisine === filterCuisine
      
      return matchesSearch && matchesService && matchesCuisine
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "price") return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1))
      if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance)
      return 0
    })

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Discover <span className="text-primary">Messes</span> Near You
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect mess for your taste and budget
          </p>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-lg border border-border p-6 shadow-elegant"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by mess name or dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterService} onValueChange={setFilterService}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="Sitting">Sitting</SelectItem>
                  <SelectItem value="Tiffin">Tiffin</SelectItem>
                  <SelectItem value="Parcel">Parcel</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterCuisine} onValueChange={setFilterCuisine}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cuisines</SelectItem>
                  <SelectItem value="Gujarati">Gujarati</SelectItem>
                  <SelectItem value="South Indian">South Indian</SelectItem>
                  <SelectItem value="Punjabi">Punjabi</SelectItem>
                  <SelectItem value="North Indian">North Indian</SelectItem>
                  <SelectItem value="Street Food">Street Food</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Found {filteredMesses.length} messes
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mess Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMesses.map((mess, index) => (
            <motion.div
              key={mess.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:scale-105 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mess.image} 
                    alt={mess.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {mess.badge && (
                      <Badge className="bg-primary text-primary-foreground">
                        {mess.badge}
                      </Badge>
                    )}
                    <Badge variant={mess.isOpen ? "default" : "destructive"}>
                      {mess.isOpen ? "Open" : "Closed"}
                    </Badge>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                    {mess.rating} ({mess.reviews})
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{mess.name}</h3>
                      <p className="text-sm text-primary font-medium">{mess.speciality}</p>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{mess.location} • {mess.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{mess.timing}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {mess.services.map((service) => {
                        const Icon = serviceIcons[service as keyof typeof serviceIcons]
                        return (
                          <Badge key={service} variant="secondary" className="flex items-center gap-1">
                            <Icon className="h-3 w-3" />
                            {service}
                          </Badge>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-2xl font-bold text-primary">{mess.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" title="Call Mess">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="cta" asChild>
                          <Link to={`/mess/${mess.id}`}>View Menu</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}