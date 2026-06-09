import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import MeetAbaaSection from "@/components/MeetAbaaSection";
import FounderJourneySection from "@/components/FounderJourneySection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import GlobalImpactSection from "@/components/GlobalImpactSection";
import BooksSection from "@/components/BooksSection";
import PracticeAuthoritySection from "@/components/PracticeAuthoritySection";
import SpeakingSection from "@/components/SpeakingSection";
import ValuesSection from "@/components/ValuesSection";
import ReflectionsSection from "@/components/ReflectionsSection";
import FinalConversionSection from "@/components/FinalConversionSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Seo
        title="Arafat Bukola Adam Abdullahi Al Ilory (ABAA) | Founder, Systems Architect & Author"
        description="ABAA — Founder, systems architect, healthcare professional, author, and faith-inspired global voice building scalable ecosystems across healthcare, education, logistics, ethical technology, and human flourishing."
        canonical="/"
        type="profile"
      />
      <main>
        <HeroSection />            {/* 1, Magnetic Opening */}
        <MeetAbaaSection />        {/* 2, Who Is ABAA */}
        <FounderJourneySection />  {/* 3, Foundation / Founder Story */}
        <WhatIBuildSection />      {/* 4, What I Build */}
        <GlobalImpactSection />    {/* 5, Global Impact & Mission */}
        <BooksSection />           {/* 6, Books & Ideas */}
        <PracticeAuthoritySection /> {/* 7, Healthcare + Systems Authority */}
        <SpeakingSection />        {/* 8, Speaking / Media */}
        <ValuesSection />          {/* 9, Values */}
        <ReflectionsSection />     {/* 10, Reflections */}
        <FinalConversionSection /> {/* 11, Final Conversion */}
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
