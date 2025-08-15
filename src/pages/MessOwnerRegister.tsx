import { useState } from "react"
import { motion } from "framer-motion"
import { 
  ChefHat, 
  MapPin, 
  Clock, 
  Phone, 
  Upload, 
  Plus, 
  Minus, 
  Eye, 
  EyeOff,
  Bell,
  ToggleLeft,
  ToggleRight,
  Utensils,
  Package,
  Car,
  DollarSign,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function MessOwnerRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [messIsOpen, setMessIsOpen] = useState(true)
  const [selectedServices, setSelectedServices] = useState<string[]>(["Sitting"])
  const [menuItems, setMenuItems] = useState([
    { name: "", price: "", notes: "" }
  ])
  
  const [formData, setFormData] = useState({
    messName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    googleLocation: "",
    openingTime: "",
    closingTime: "",
    startTime: "",
    endTime: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const addMenuItem = () => {
    setMenuItems([...menuItems, { name: "", price: "", notes: "" }])
  }

  const removeMenuItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index))
  }

  const updateMenuItem = (index: number, field: string, value: string) => {
    const updated = menuItems.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    )
    setMenuItems(updated)
  }

  const services = [
    { id: "Sitting", icon: Utensils, label: "Sitting" },
    { id: "Tiffin", icon: Package, label: "Tiffin Service" },
    { id: "Parcel", icon: Car, label: "Parcel Service" }
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
            <span className="text-primary">Mess Owner</span> Portal
          </h1>
          <p className="text-xl text-muted-foreground">
            Register your mess and start reaching hungry students
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="register" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="register">Registration</TabsTrigger>
              <TabsTrigger value="dashboard">Daily Operations</TabsTrigger>
              <TabsTrigger value="menu">Menu Management</TabsTrigger>
            </TabsList>

            {/* Registration Tab */}
            <TabsContent value="register" className="space-y-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ChefHat className="h-5 w-5 text-primary" />
                      Mess Registration (One-time Setup)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="messName">Mess Name *</Label>
                        <Input
                          id="messName"
                          name="messName"
                          placeholder="e.g., Shree Krishna Mess"
                          value={formData.messName}
                          onChange={handleInputChange}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name *</Label>
                        <Input
                          id="ownerName"
                          name="ownerName"
                          placeholder="Your full name"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="password"
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

                    <Separator />

                    {/* Location Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location Details
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Full Address *</Label>
                        <Textarea
                          id="address"
                          name="address"
                          placeholder="Complete address with landmarks"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="min-h-[80px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="googleLocation">Google Maps Link (Optional)</Label>
                        <Input
                          id="googleLocation"
                          name="googleLocation"
                          placeholder="Paste Google Maps share link"
                          value={formData.googleLocation}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Timing Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Operating Hours
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="openingTime">Opening Time *</Label>
                          <Input
                            id="openingTime"
                            name="openingTime"
                            type="time"
                            value={formData.openingTime}
                            onChange={handleInputChange}
                            className="h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="closingTime">Closing Time *</Label>
                          <Input
                            id="closingTime"
                            name="closingTime"
                            type="time"
                            value={formData.closingTime}
                            onChange={handleInputChange}
                            className="h-12"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Services */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Services Offered *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <Label
                              htmlFor={service.id}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <service.icon className="h-4 w-4" />
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full h-12" variant="cta">
                      Register My Mess
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Daily Operations Tab */}
            <TabsContent value="dashboard" className="space-y-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      Daily Operations Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Open/Close Toggle */}
                    <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Mess Status</h3>
                        <p className="text-sm text-muted-foreground">
                          Toggle your mess open/closed status
                        </p>
                      </div>
                      <Button
                        variant={messIsOpen ? "cta" : "outline"}
                        size="lg"
                        onClick={() => setMessIsOpen(!messIsOpen)}
                        className="flex items-center gap-2"
                      >
                        {messIsOpen ? (
                          <>
                            <ToggleRight className="h-5 w-5" />
                            Open
                          </>
                        ) : (
                          <>
                            <ToggleLeft className="h-5 w-5" />
                            Closed
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Daily Timing */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startTime">Today's Start Time</Label>
                        <Input
                          id="startTime"
                          name="startTime"
                          type="time"
                          value={formData.startTime}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endTime">Today's End Time</Label>
                        <Input
                          id="endTime"
                          name="endTime"
                          type="time"
                          value={formData.endTime}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-12 flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Send Menu Reminder
                      </Button>
                      <Button variant="outline" className="h-12 flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        Quick Menu Upload
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Menu Management Tab */}
            <TabsContent value="menu" className="space-y-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary" />
                      Daily Menu Upload
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Menu Items */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Today's Menu Items</h3>
                        <Button onClick={addMenuItem} variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Item
                        </Button>
                      </div>

                      {menuItems.map((item, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Item #{index + 1}</h4>
                            {menuItems.length > 1 && (
                              <Button
                                onClick={() => removeMenuItem(index)}
                                variant="ghost"
                                size="sm"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Dish Name</Label>
                              <Input
                                placeholder="e.g., Aloo Bhaji, Dal Rice"
                                value={item.name}
                                onChange={(e) => updateMenuItem(index, 'name', e.target.value)}
                                className="h-12"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Price (₹)</Label>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  placeholder="0"
                                  value={item.price}
                                  onChange={(e) => updateMenuItem(index, 'price', e.target.value)}
                                  className="h-12 pl-10"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Notes (Optional)</Label>
                            <div className="relative">
                              <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Textarea
                                placeholder="Any special notes about this dish..."
                                value={item.notes}
                                onChange={(e) => updateMenuItem(index, 'notes', e.target.value)}
                                className="pl-10 min-h-[60px]"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Menu Images</h3>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Upload photos of your dishes
                        </p>
                        <Button variant="outline">
                          Choose Images
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full h-12" variant="cta">
                      Upload Today's Menu
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}