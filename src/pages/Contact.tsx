import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Get in touch with our legal team for consultation and assistance
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="text-sm font-medium text-foreground block mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Brief subject of inquiry"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Describe your legal matter or inquiry..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground">
                        * All fields are required. Your information will be kept confidential.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-semibold">+91 98997 96839</p>
                    <p className="text-foreground font-semibold">83685 79322</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-semibold">sm200803@gmail.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Office Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">Chamber No 134, 1st Floor</p>
                    <p className="text-foreground">Lawyers Chamber Building</p>
                    <p className="text-foreground">Sector 12, Faridabad</p>
                    <p className="text-foreground">Haryana 121007</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Business Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-semibold">Monday - Saturday</p>
                    <p className="text-foreground">10:00 AM - 7:30 PM</p>
                    <p className="text-muted-foreground text-sm mt-2">Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Find Our Office</h2>
            <div className="max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <iframe
                    title="Office Location"
                    src="https://maps.google.com/maps?q=Chamber+No+134,+1st+Floor,+Sector+12,+Faridabad+121007&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
              <p className="text-center text-muted-foreground mt-4">
                Chamber No 134, 1st Floor, Lawyers Chamber Building, Sector 12, Faridabad, Haryana 121007
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
