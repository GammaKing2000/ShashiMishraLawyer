import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Scale, Target } from "lucide-react";
import lawyerProfile from "@/assets/lawyer-profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shashi Mishra And Associates</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional legal excellence rooted in integrity, dedication, and unwavering commitment to justice
            </p>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={lawyerProfile} 
                  alt="Shashi Mishra - Professional Lawyer at Faridabad District Courts"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Shashi Mishra</h2>
                <p className="text-foreground mb-4">
                  Shashi Mishra is a distinguished legal professional with extensive experience in various 
                  fields of law, practicing at the District Courts, Faridabad. With a strong commitment to 
                  providing ethical, professional, and result-oriented legal support, the firm has successfully 
                  represented numerous clients across diverse legal matters.
                </p>
                <p className="text-foreground mb-4">
                  The firm specializes in Civil and Criminal Law, Matrimonial and Family Law, Property Law, 
                  Company Law, Bail Matters, Motor Accident Claims (MACT), Cheque Bounce Cases, and Service 
                  Matters. Each case is handled with meticulous attention to detail and a client-centric approach.
                </p>
                <p className="text-foreground">
                  With years of courtroom experience and a deep understanding of legal complexities, 
                  Shashi Mishra And Associates has built a reputation for excellence, earning the trust 
                  of clients from various backgrounds.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Award className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Professional Excellence</h3>
                        <p className="text-muted-foreground">
                          Recognized for outstanding legal representation and successful case outcomes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <BookOpen className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Extensive Experience</h3>
                        <p className="text-muted-foreground">
                          Years of practice across multiple legal domains in District Courts
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Scale className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Bar Council Compliant</h3>
                        <p className="text-muted-foreground">
                          Fully compliant with Bar Council of India rules and regulations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-secondary rounded-full">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Mission & Values</h2>
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Mission Statement</h3>
                      <p className="text-foreground">
                        To provide comprehensive, ethical, and result-oriented legal services that uphold 
                        the principles of justice, equality, and client advocacy. We are committed to 
                        protecting our clients' rights and interests with unwavering dedication and 
                        professional excellence.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Core Values</h3>
                      <ul className="space-y-3 text-foreground">
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span><strong>Integrity:</strong> Maintaining the highest ethical standards in all legal matters</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span><strong>Excellence:</strong> Delivering superior legal services and achieving optimal outcomes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span><strong>Client Focus:</strong> Prioritizing client needs and providing personalized attention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span><strong>Justice:</strong> Advocating for equality and fairness in every case</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span><strong>Professionalism:</strong> Upholding the dignity of the legal profession</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <blockquote className="mt-8 text-center italic text-lg text-muted-foreground border-l-4 border-secondary pl-6 py-4">
                "Equality has been and is the single greatest craving of all human beings at all points of time."
                <footer className="text-sm mt-2 font-semibold text-foreground">— Justice B.P. Jeevan</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Office</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Chamber No 134, 1st Floor
                  </p>
                  <p className="text-lg text-foreground mb-2">
                    Lawyers Chamber Building
                  </p>
                  <p className="text-lg text-foreground mb-4">
                    Sector 12, Faridabad, Haryana 121007
                  </p>
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-muted-foreground">
                      <strong>Office Hours:</strong> Monday - Saturday, 10:00 AM - 7:30 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
