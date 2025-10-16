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
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The BatStateU Lost & Found Portal is a dedicated reporting system designed to help students, 
                faculty, and staff of Batangas State University document lost and found items. This platform 
                serves as a centralized database where the university administration can monitor and manage 
                all lost and found reports for record-keeping and documentation purposes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All found items must be surrendered to the respective Department Dean's Office, where they 
                will be securely stored. This system ensures privacy and security by keeping contact information 
                confidential and maintaining proper administrative oversight.
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
                    <h3 className="font-bold text-lg mb-2">Privacy Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      Contact information remains confidential. All items are handled through the 
                      Department Dean's Office to ensure security and proper verification.
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
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">If You Found An Item:</h3>
                <ol className="space-y-3 text-primary-foreground/90">
                  <li className="flex gap-3">
                    <span className="font-bold">1.</span>
                    <span>Report the found item through our portal with detailed description</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">2.</span>
                    <span>Surrender the item to your Department Dean's Office immediately</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">3.</span>
                    <span>The Dean's Office will handle the verification and return process</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">If You Lost An Item:</h3>
                <ol className="space-y-3 text-primary-foreground/90">
                  <li className="flex gap-3">
                    <span className="font-bold">1.</span>
                    <span>Report your lost item through our portal with detailed description</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">2.</span>
                    <span>Check the Found Items section regularly to see if your item was reported</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">3.</span>
                    <span>If you find a match, visit your Department Dean's Office with valid ID</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">4.</span>
                    <span>Verify ownership with specific details before claiming the item</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
