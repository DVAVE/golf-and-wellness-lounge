import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text & CTA */}
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Peak Performance</span> Starts Here
              </h1>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                Specialized muscle recovery and body treatments for athletes at Chapman Golf Club. 
                Our internationally trained therapists help you get back in the game.
              </p>
              <div className="space-y-4">
                <Link to="/contact">
                  <Button size="lg" className="font-montserrat font-semibold text-lg px-8 py-6">
                    Book Your Session
                  </Button>
                </Link>
                <p className="font-montserrat text-sm text-muted-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Join 500+ Athletes Already Recovering With Us
                </p>
              </div>
            </div>
            
            {/* Right Column - Circular Images */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" 
                  alt="Sports Massage Therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-12 left-0 w-56 h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80" 
                  alt="Golfer Athlete" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-40 right-32 w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                  alt="Wellness Lounge" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Welcome to the <span className="text-primary">Golf & Wellness Lounge</span>
            </h2>
            <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
              At Golf & Wellness Lounge, we specialize in helping athletes achieve peak performance through 
              targeted muscle recovery and body treatments. Located at the prestigious Chapman Golf Club in Harare, 
              our internationally trained therapists bring world-class expertise to every session.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <Card>
                <CardContent className="pt-6 text-center space-y-3">
                  <Award className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="font-playfair font-semibold text-xl">Internationally Trained</h3>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    World-class expertise and techniques
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-3">
                  <Users className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="font-playfair font-semibold text-xl">Athlete-Focused</h3>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    Specialized treatments for peak recovery
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-3">
                  <MapPin className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="font-playfair font-semibold text-xl">Premier Location</h3>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    At Chapman Golf Club, Harare
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Treatments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Treatments</span>
            </h2>
            <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized body treatments designed for athletes and active individuals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80" 
                  alt="Sports Massage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-playfair font-semibold text-2xl">Sports Massage</h3>
                <p className="font-montserrat text-muted-foreground">
                  Targeted massage therapy designed to enhance athletic performance and accelerate recovery.
                </p>
                <Link to="/treatments">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80" 
                  alt="Deep Tissue Therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-playfair font-semibold text-2xl">Deep Tissue Therapy</h3>
                <p className="font-montserrat text-muted-foreground">
                  Intensive treatment focusing on chronic tension and muscle knots for lasting relief.
                </p>
                <Link to="/treatments">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" 
                  alt="Recovery Programs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-playfair font-semibold text-2xl">Recovery Programs</h3>
                <p className="font-montserrat text-muted-foreground">
                  Comprehensive recovery plans tailored to your specific sport and training regimen.
                </p>
                <Link to="/treatments">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              What Our <span className="text-primary">Athletes</span> Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="font-montserrat text-muted-foreground italic">
                  "The recovery treatments here have transformed my game. I feel stronger and more flexible than ever."
                </p>
                <div>
                  <p className="font-playfair font-semibold">James M.</p>
                  <p className="font-montserrat text-sm text-muted-foreground">Professional Golfer</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="font-montserrat text-muted-foreground italic">
                  "Internationally trained therapists who really understand athletes. Best sports massage in Harare!"
                </p>
                <div>
                  <p className="font-playfair font-semibold">Sarah K.</p>
                  <p className="font-montserrat text-sm text-muted-foreground">Marathon Runner</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="font-montserrat text-muted-foreground italic">
                  "After every session, I notice immediate improvements in my performance. Highly recommend!"
                </p>
                <div>
                  <p className="font-playfair font-semibold">Michael T.</p>
                  <p className="font-montserrat text-sm text-muted-foreground">Tennis Player</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">
            Ready to Elevate Your Performance?
          </h2>
          <p className="font-montserrat text-lg max-w-2xl mx-auto opacity-90">
            Book your specialized body treatment today and experience the difference professional, 
            internationally-trained care can make.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-montserrat font-semibold text-lg px-8 py-6">
              Book Your Session Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
