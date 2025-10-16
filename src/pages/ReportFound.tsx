import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemForm from "@/components/ItemForm";

const ReportFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 px-4 bg-background">
        <ItemForm type="found" />
      </main>
      <Footer />
    </div>
  );
};

export default ReportFound;
