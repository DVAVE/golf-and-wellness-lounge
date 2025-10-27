import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", email: "", treatment: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">
              Contact & <span className="text-primary">Book</span>
            </h1>
            <p className="font-montserrat text-xl text-muted-foreground leading-relaxed">
              Ready to take your performance to the next level? Get in touch with us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-playfair font-semibold text-lg mb-1">Phone</h3>
                        <a 
                          href="tel:+263787028681" 
                          className="font-montserrat text-muted-foreground hover:text-primary transition-colors"
                        >
                          0787 028 681
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-playfair font-semibold text-lg mb-1">Location</h3>
                        <p className="font-montserrat text-muted-foreground">
                          Chapman Golf Club<br />
                          Harare, Zimbabwe
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-playfair font-semibold text-lg mb-1">Hours</h3>
                        <p className="font-montserrat text-muted-foreground">
                          Monday - Friday: 8am - 7pm<br />
                          Saturday: 9am - 5pm<br />
                          Sunday: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-playfair font-semibold text-xl mb-3">Quick Tip</h3>
                  <p className="font-montserrat text-sm opacity-90">
                    For best results, schedule your recovery session within 24-48 hours after intense training or competition.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-montserrat font-medium text-sm">
                          Full Name *
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="font-montserrat font-medium text-sm">
                          Phone Number *
                        </label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0787 028 681"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-montserrat font-medium text-sm">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="treatment" className="font-montserrat font-medium text-sm">
                        Desired Treatment *
                      </label>
                      <Input 
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        placeholder="e.g., Sports Massage, Deep Tissue"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-montserrat font-medium text-sm">
                        Additional Information
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about any specific concerns, injuries, or preferences..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full font-montserrat font-semibold">
                      Submit Booking Request
                    </Button>
                    
                    <p className="font-montserrat text-sm text-muted-foreground text-center">
                      We'll contact you within 24 hours to confirm your appointment
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-20">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Find Us at <span className="text-primary">Chapman Golf Club</span>
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0772858897634!2d31.0531!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMcKwMDMnMTEuMiJF!5e0!3m2!1sen!2szw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chapman Golf Club Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
