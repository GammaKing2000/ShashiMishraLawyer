import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a consultation with our experienced legal team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-secondary rounded-full">
                <Phone className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-primary-foreground/90">+91 98997 96839</p>
            <p className="text-primary-foreground/90">83685 79322</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-secondary rounded-full">
                <Mail className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-primary-foreground/90">sm200803@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-secondary rounded-full">
                <MapPin className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Office</h3>
            <p className="text-primary-foreground/90">Chamber No 134, 1st Floor</p>
            <p className="text-primary-foreground/90">Sector 12, Faridabad 121007</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-secondary rounded-full">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-primary-foreground/90">Monday - Saturday</p>
            <p className="text-primary-foreground/90">10:00 AM - 7:30 PM</p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
