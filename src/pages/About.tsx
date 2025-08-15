import { motion } from "framer-motion"
import { Users, Target, Heart, ChefHat, Star, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import messHallImage from "@/assets/mess-hall-interior.jpg"

const benefits = {
  students: [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Discover Quality Food",
      description: "Find the best mess food in your area with authentic reviews and ratings"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Save Your Favorites",
      description: "Keep track of your favorite dishes and messes for quick access"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Reviews",
      description: "Read and write reviews to help fellow students make better food choices"
    }
  ],
  owners: [
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Easy Menu Management",
      description: "Update your daily menu with our simple and intuitive interface"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Reach More Students",
      description: "Connect with hundreds of students looking for quality mess food"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Business Insights",
      description: "Get feedback and insights to improve your food and service quality"
    }
  ]
}

export default function About() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            About{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              The Daily Plate
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to connect college students with the best mess food in their area, 
            while helping mess operators grow their business through digital presence.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={messHallImage} 
              alt="Students enjoying mess food"
              className="rounded-lg shadow-elegant w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  To revolutionize how college students discover and enjoy mess food by creating 
                  a seamless digital platform that connects students with quality food providers 
                  in their local area.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  To become the go-to platform for college food discovery, ensuring no student 
                  goes hungry and every mess operator has the tools to succeed in the digital age.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Students Benefit */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">How Students Benefit</h2>
            <p className="text-xl text-muted-foreground">
              Discover why thousands of students trust The Daily Plate for their food needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.students.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Mess Owners Benefit */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">How Mess Owners Benefit</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of mess operators who've grown their business with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.owners.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center h-full hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Partner Messes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/80">Daily Orders</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}