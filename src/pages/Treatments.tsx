import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, DollarSign } from "lucide-react";

const Treatments = () => {
  const treatments = [
    {
      title: "Sports Massage",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80",
      description: "Designed specifically for athletes, this massage focuses on preventing and treating injuries, improving flexibility, and enhancing athletic performance. Techniques include deep pressure, stretching, and trigger point work.",
      benefits: ["Improves flexibility", "Reduces muscle tension", "Enhances performance", "Prevents injuries"]
    },
    {
      title: "Deep Tissue Therapy",
      duration: "75 minutes",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
      description: "Intensive therapy targeting the deeper layers of muscle and connective tissue. Ideal for chronic pain, muscle knots, and areas of persistent tension. Uses slow, deep strokes to release chronic muscle tension.",
      benefits: ["Relieves chronic pain", "Breaks down scar tissue", "Improves posture", "Increases mobility"]
    },
    {
      title: "Recovery & Rehabilitation",
      duration: "90 minutes",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive recovery program combining multiple techniques to address specific athletic injuries or post-competition recovery. Includes assessment, treatment, and personalized recovery plan.",
      benefits: ["Accelerates healing", "Reduces inflammation", "Restores function", "Prevents re-injury"]
    },
    {
      title: "Pre-Event Preparation",
      duration: "30 minutes",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      description: "Quick, focused treatment before competition or training. Increases blood flow, warms up muscles, and mentally prepares you for peak performance. Best scheduled 24-48 hours before your event.",
      benefits: ["Increases blood flow", "Warms up muscles", "Improves focus", "Boosts confidence"]
    },
    {
      title: "Post-Event Recovery",
      duration: "45 minutes",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      description: "Specialized treatment focusing on reducing muscle soreness, removing metabolic waste, and speeding up recovery after intense activity. Uses gentle techniques to aid the body's natural healing process.",
      benefits: ["Reduces soreness", "Speeds recovery", "Prevents stiffness", "Promotes healing"]
    },
    {
      title: "Maintenance Sessions",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      description: "Regular maintenance treatments to keep your body in optimal condition. Preventative care that identifies and addresses potential issues before they become problems. Recommended weekly or bi-weekly.",
      benefits: ["Prevents injuries", "Maintains flexibility", "Identifies issues early", "Optimizes performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">
              Our <span className="text-primary">Treatments</span>
            </h1>
            <p className="font-montserrat text-xl text-muted-foreground leading-relaxed">
              Specialized body treatments designed to help athletes recover faster, perform better, and stay injury-free
            </p>
          </div>
          
          {/* Treatments Grid */}
          <div className="space-y-12">
            {treatments.map((treatment, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`h-64 md:h-auto overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <CardHeader>
                      <CardTitle className="font-playfair text-3xl">{treatment.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground font-montserrat text-sm pt-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {treatment.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-montserrat text-muted-foreground leading-relaxed">
                        {treatment.description}
                      </p>
                      <div>
                        <h4 className="font-playfair font-semibold text-lg mb-2">Key Benefits:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-montserrat text-sm">
                          {treatment.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary text-primary-foreground rounded-lg p-12 text-center space-y-6">
            <h2 className="font-playfair text-4xl font-bold">
              Ready to Experience Professional Recovery?
            </h2>
            <p className="font-montserrat text-lg max-w-2xl mx-auto opacity-90">
              Book your treatment today and discover how our specialized therapies can help you perform at your best.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-montserrat font-semibold text-lg px-8 py-6">
                Book Your Treatment
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Treatments;
