import { Link } from "react-router-dom";
import { Scale, Users, Home, Building, Shield, FileText, Car, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    icon: Scale,
    title: "Civil Law",
    description: "Comprehensive legal representation in civil disputes, litigation, and legal matters.",
  },
  {
    icon: Users,
    title: "Matrimonial & Family Law",
    description: "Expert handling of divorce, custody, maintenance, domestic violence, and guardianship cases.",
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Legal services for urban and rural property disputes, documentation, and transactions.",
  },
  {
    icon: Building,
    title: "Company Law",
    description: "Corporate legal services including compliance, contracts, and business disputes.",
  },
  {
    icon: Car,
    title: "Motor Accident Claims",
    description: "Expert representation in MACT cases to secure rightful compensation for accident victims.",
  },
  {
    icon: CreditCard,
    title: "Cheque Bounce Cases",
    description: "Legal assistance in dishonored cheque matters under Negotiable Instruments Act.",
  },
  {
    icon: FileText,
    title: "Service Matters",
    description: "Representation in employment and service-related legal disputes and tribunals.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services across multiple domains to serve your every legal need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {practiceAreas.map((area) => (
            <Card key={area.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <area.icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/practice-areas">View All Practice Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
