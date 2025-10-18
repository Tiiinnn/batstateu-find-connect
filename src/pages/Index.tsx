import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            BatStateU Lost & Found Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Helping our university community reunite with their lost belongings safely and efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report-lost">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                Report Lost Item
              </Button>
            </Link>
            <Link to="/report-found">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                Report Found Item
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Simple & Secure Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined system ensures your items are safely documented and returned through official channels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">1. Report Item</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Submit a detailed report with your student ID number and item description. All information is kept confidential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">2. Submit to Office</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Found items must be surrendered to the Department Dean's Office for secure processing and verification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">3. Claim Item</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visit the designated office with your student ID to claim your item after proper verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Browse Reported Items</h2>
            <p className="text-muted-foreground text-lg">
              Check our databases to see if your item has been reported
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/lost-items" className="group">
              <Card className="border-2 hover:border-primary transition-all h-full hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">Lost Items</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        View items reported as lost by students and staff. If you found something, check here to help return it.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Browse Lost Items
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/found-items" className="group">
              <Card className="border-2 hover:border-primary transition-all h-full hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">Found Items</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Check if someone has found and reported your lost item. Visit the designated office to claim it.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Browse Found Items
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
