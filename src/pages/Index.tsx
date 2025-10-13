import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import { Problem } from "@/components/Problem";
import { IzaSolution } from "@/components/IzaSolution";
import { AntiNoShow } from "@/components/AntiNoShow";
import { Organization } from "@/components/Organization";
import { InvestmentControl } from "@/components/InvestmentControl";
import { Credibility } from "@/components/Credibility";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <IzaSolution />
      <AntiNoShow />
      <Organization />
      <InvestmentControl />
      <Credibility />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
