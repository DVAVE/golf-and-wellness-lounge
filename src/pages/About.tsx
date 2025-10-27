import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">
              About <span className="text-primary">Golf & Wellness Lounge</span>
            </h1>
            <p className="font-montserrat text-xl text-muted-foreground leading-relaxed">
              Bringing world-class muscle recovery and body treatments to athletes in Harare
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl font-bold">Our Mission</h2>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                At Golf & Wellness Lounge, we are dedicated to helping athletes achieve their peak performance 
                through specialized muscle recovery and body treatments. Located at the prestigious Chapman Golf 
                Club in Harare, Zimbabwe, we provide a sanctuary for athletes to recover, rejuvenate, and excel.
              </p>
              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
                Our mission is to deliver internationally-trained, professional care that addresses the unique 
                needs of athletes, from golfers to runners, cyclists, and beyond. We believe that proper recovery 
                is just as important as training itself.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" 
                alt="Wellness Lounge Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Values Section */}
          <div className="space-y-12 mb-20">
            <h2 className="font-playfair text-4xl font-bold text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Award className="w-16 h-16 text-primary" />
                  <h3 className="font-playfair text-2xl font-semibold">Internationally Trained</h3>
                  <p className="font-montserrat text-muted-foreground">
                    Our therapists have trained and worked internationally, bringing cutting-edge techniques 
                    and global best practices to every session. We continuously update our skills to provide 
                    you with the most effective treatments available.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Target className="w-16 h-16 text-primary" />
                  <h3 className="font-playfair text-2xl font-semibold">Athlete-Focused</h3>
                  <p className="font-montserrat text-muted-foreground">
                    Every treatment is tailored to the specific needs of athletes. We understand the demands 
                    of different sports and design our recovery programs to target the muscle groups and issues 
                    most relevant to your activity.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Globe className="w-16 h-16 text-primary" />
                  <h3 className="font-playfair text-2xl font-semibold">Professional Excellence</h3>
                  <p className="font-montserrat text-muted-foreground">
                    We maintain the highest standards of professionalism in every aspect of our service. 
                    From our clean, modern facilities to our client-centered approach, we ensure you receive 
                    nothing but the best.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Location Section */}
          <div className="bg-secondary rounded-lg p-12 text-center space-y-6">
            <h2 className="font-playfair text-4xl font-bold">Our Location</h2>
            <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located at Chapman Golf Club, one of Harare's premier sporting venues. 
              Our facility provides a peaceful, professional environment where athletes can focus on their recovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80" 
                  alt="Chapman Golf Club" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80" 
                  alt="Golf Course View" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
