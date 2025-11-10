import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shashi Mishra And Associates
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Professional Legal Excellence in Faridabad
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Expert representation in Civil, Criminal, Family, Property, Company Law, and more. 
            Committed to justice, equality, and client advocacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
              <Link to="/practice-areas">Our Practice Areas</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center space-x-3 text-primary-foreground">
              <Phone className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-semibold">+91 98997 96839</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <Mail className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">sm200803@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <Clock className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Office Hours</p>
                <p className="font-semibold">Mon-Sat, 10:00 AM - 7:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
