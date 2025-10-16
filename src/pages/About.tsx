import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center">About BatStateU Lost & Found</h1>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The BatStateU Lost & Found Portal is a dedicated service designed to help students, 
                faculty, and staff of Batangas State University recover their lost belongings efficiently 
                and securely. We understand how stressful it can be to lose important items, and our 
                mission is to make the recovery process as smooth and reliable as possible.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Security First</h3>
                    <p className="text-muted-foreground text-sm">
                      All reports require valid ID verification to ensure items are returned to 
                      their rightful owners and prevent fraudulent claims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Community Driven</h3>
                    <p className="text-muted-foreground text-sm">
                      Built by the BatStateU community, for the BatStateU community. We believe 
                      in helping each other and fostering a culture of honesty.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                    <p className="text-muted-foreground text-sm">
                      Real-time posting and searching capabilities ensure that lost items can be 
                      matched with finders as quickly as possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Compassionate Service</h3>
                    <p className="text-muted-foreground text-sm">
                      We understand the emotional value of personal belongings and treat every 
                      report with care and urgency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">How to Claim an Item</h2>
              <ol className="space-y-3 text-primary-foreground/90">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>Search for your lost item in our Found Items section</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>Contact the finder using the provided contact information</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>Prepare to verify ownership with specific details and your valid ID</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>Arrange a safe meeting location on campus to retrieve your item</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
