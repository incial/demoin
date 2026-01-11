import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Milestones from "@/components/Milestones";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import ImageSection from "@/components/ImageSection";
import Works from "@/components/Works";
import BookConversation from "@/components/BookConversation";
import Footer from "@/components/Footer";
import PlayfulCursor from "@/components/PlayfulCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PlayfulCursor />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Milestones />
      <Team />
      <Clients />
      <Testimonials />
      <ImageSection />
      <Works />
      <BookConversation />
      <Footer />
    </div>
  );
};

export default Index;
