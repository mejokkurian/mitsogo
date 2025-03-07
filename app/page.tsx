import AboutSectionOne from "@/components/About/AboutSectionOne";
import PlatformsSupported from "@/components/About/PlatformsSupported";
import LogoSlider from "@/components/LogoSlider";
import ScrollUp from "@/components/Common/ScrollUp";
import KioskFeatures from "@/components/KioskFeatures";
import KioskModes from "@/components/KioskModes";
import SignupSection from "@/components/SignUpSection";
import CustomerReviews from "@/components/CustomerReviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <AboutSectionOne />
      <KioskModes />
      <KioskFeatures />
      <CustomerReviews />
      <LogoSlider />
      <PlatformsSupported />
      <SignupSection />
    </>
  );
}
