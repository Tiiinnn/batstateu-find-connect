import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, FileText, CheckCircle, Shield } from "lucide-react";

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
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Report</h3>
                <p className="text-muted-foreground text-sm">
                  Submit a detailed report of your lost or found item with description and photo ID
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Search</h3>
                <p className="text-muted-foreground text-sm">
                  Browse through reported items or use our search feature to find matches
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verify</h3>
                <p className="text-muted-foreground text-sm">
                  Verify ownership through detailed descriptions and valid identification
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Reunite</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with the finder or owner to safely return the item
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/lost-items">
              <Card className="border-2 hover:border-primary transition-all cursor-pointer h-full hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Lost Items</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse through items that have been reported as lost by members of our community
                  </p>
                  <Button variant="outline" className="w-full">View Lost Items</Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/found-items">
              <Card className="border-2 hover:border-primary transition-all cursor-pointer h-full hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Found Items</h3>
                  <p className="text-muted-foreground mb-4">
                    Check if someone has found and reported your lost item
                  </p>
                  <Button variant="outline" className="w-full">View Found Items</Button>
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
