import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    case: "Property Dispute",
    text: "Shashi Mishra provided excellent legal guidance throughout my property case. His expertise and dedication resulted in a favorable outcome. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    case: "Family Law",
    text: "Professional, compassionate, and thorough. The team handled my divorce case with utmost sensitivity and achieved the best possible resolution for me and my children.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    case: "Cheque Bounce Case",
    text: "Excellent representation in my cheque dishonor case. The legal strategy was clear, communication was excellent, and the result exceeded expectations.",
    rating: 5,
  },
  {
    name: "Sunita Patel",
    case: "Motor Accident Claim",
    text: "After my accident, I was overwhelmed. Shashi Mishra And Associates handled everything professionally and secured fair compensation for my injuries.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients say about our legal services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.case}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary">★</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
