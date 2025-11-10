import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, Home, Building, Shield, FileText, Car, CreditCard } from "lucide-react";

const practiceAreasDetailed = [
  {
    icon: Scale,
    title: "Civil Law",
    description: "Comprehensive legal representation in civil disputes and litigation matters.",
    details: [
      "Civil litigation and dispute resolution",
      "Writs and appeals",
      "Arbitration and mediation",
      "Contract disputes and enforcement",
      "Tort claims and liability matters",
      "Legal consultation and advisory",
    ],
  },
  {
    icon: Users,
    title: "Matrimonial & Family Law",
    description: "Expert handling of all family-related legal matters with sensitivity and professionalism.",
    details: [
      "Divorce and judicial separation",
      "Child custody and guardianship",
      "Maintenance and alimony",
      "Domestic violence protection orders",
      "Mutual consent divorce",
      "Adoption proceedings",
    ],
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Complete legal services for urban and rural property matters.",
    details: [
      "Property documentation and verification",
      "Title disputes and ownership issues",
      "Property transfer and registration",
      "Land acquisition matters",
      "Tenancy and rent control cases",
      "Property partition and inheritance",
    ],
  },
  {
    icon: Building,
    title: "Company Law",
    description: "Corporate legal services for businesses of all sizes.",
    details: [
      "Company incorporation and registration",
      "Corporate compliance and governance",
      "Commercial contracts and agreements",
      "Mergers and acquisitions",
      "Shareholder disputes",
      "Intellectual property protection",
    ],
  },
  {
    icon: Car,
    title: "Motor Accident Claims (MACT)",
    description: "Expert representation in motor accident compensation cases.",
    details: [
      "Claim petitions before MACT",
      "Compensation assessment",
      "Third-party insurance claims",
      "Hit and run cases",
      "Death and injury claims",
      "Appeal and revision matters",
    ],
  },
  {
    icon: CreditCard,
    title: "Cheque Bounce Cases",
    description: "Legal assistance in dishonored cheque matters under Negotiable Instruments Act.",
    details: [
      "Section 138 NI Act proceedings",
      "Demand notice drafting",
      "Complaint filing and prosecution",
      "Defense in cheque dishonor cases",
      "Settlement negotiations",
      "Appeals and revisions",
    ],
  },
  {
    icon: FileText,
    title: "Service Matters",
    description: "Representation in employment and service-related disputes.",
    details: [
      "Wrongful termination cases",
      "Service conditions disputes",
      "Pension and retirement matters",
      "Disciplinary proceedings defense",
      "Industrial disputes",
      "Employment tribunal representation",
    ],
  },
];

const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Practice Areas</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Comprehensive legal services across multiple domains to serve your every legal need
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {practiceAreasDetailed.map((area) => (
                <Card key={area.title} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-4 bg-secondary/10 rounded-full">
                        <area.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {area.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2 mt-1">✓</span>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Need Legal Assistance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced legal team is ready to help you navigate your legal challenges. 
                Schedule a consultation today to discuss your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Schedule Consultation
                </a>
                <a
                  href="tel:+919899796839"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                >
                  Call +91 98997 96839
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreasPage;
