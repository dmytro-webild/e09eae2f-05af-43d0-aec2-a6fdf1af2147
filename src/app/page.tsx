"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Clock, Flame, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Topaz Kitchen"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Authentic Jamaican Flavors in North York"
      description="Experience fresh, fire-grilled seafood and traditional Jamaican recipes prepared daily. Always fresh, always authentic."
      kpis={[
        {
          value: "4.5",
          label: "Google Rating",
        },
        {
          value: "194+",
          label: "Customer Reviews",
        },
        {
          value: "24/7",
          label: "Available Hours",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-chicken-chicken-herbs-onion-lemon-board-wooden-board_140725-73657.jpg"
      imageAlt="Authentic Jamaican food platter"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/black-plate-vegetables-chicken-cutlets_114579-83636.jpg",
          alt: "Diner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-grilled-chicken-fillet-with-sauce-rice-garnish-tray_141793-3632.jpg",
          alt: "Diner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/azerbaijani-chicken-kebab-served-with-grilled-vegetables-flatbread_141793-1848.jpg",
          alt: "Diner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-close-up-view-chicken-chicken-with-herbs-onion-lavash-board-fork-knife_140725-72523.jpg",
          alt: "Diner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/us-labor-day-celebration-with-food-top-view_23-2150347544.jpg",
          alt: "Diner 5",
        },
      ]}
      avatarText="Loved by our local community"
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Ingredients",
        },
        {
          type: "text",
          text: "Authentic Spices",
        },
        {
          type: "text",
          text: "Fire-Grilled",
        },
        {
          type: "text",
          text: "Traditional Recipes",
        },
        {
          type: "text",
          text: "Island Soul",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="The Topaz Kitchen Tradition"
      description="For years, we have been serving our community with the heart and soul of Jamaican cooking. From fire-fresh seafood to perfectly seasoned jerk dishes, everything we serve is a testament to quality and tradition."
      imageSrc="http://img.b2bpic.net/free-photo/fresh-fish-ice-with-spices-arround_23-2148295184.jpg"
      imageAlt="Kitchen cooking process"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Topaz Kitchen",
          name: "Seafood Pasta",
          price: "$22.00",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-white-cauliflower-plate_1150-23055.jpg",
        },
        {
          id: "2",
          brand: "Topaz Kitchen",
          name: "Brown Stew Fish",
          price: "$25.00",
          rating: 5,
          reviewCount: "62",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-plate-with-chicken-soup-black-background_140725-114589.jpg",
        },
        {
          id: "3",
          brand: "Topaz Kitchen",
          name: "Jerk Salmon",
          price: "$24.00",
          rating: 4,
          reviewCount: "48",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-cod-with-vegetables-blue-wooden-table_123827-20244.jpg",
        },
        {
          id: "4",
          brand: "Topaz Kitchen",
          name: "Steam Fish",
          price: "$23.00",
          rating: 5,
          reviewCount: "91",
          imageSrc: "http://img.b2bpic.net/free-photo/caesar-salad-with-shrimp-prawn_74190-952.jpg",
        },
        {
          id: "5",
          brand: "Topaz Kitchen",
          name: "Coconut Shrimp",
          price: "$18.00",
          rating: 5,
          reviewCount: "77",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pakistan-meal-assortment-basket_23-2148821573.jpg",
        },
        {
          id: "6",
          brand: "Topaz Kitchen",
          name: "Jerk Chicken Combo",
          price: "$19.00",
          rating: 5,
          reviewCount: "104",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-fish-slices-with-lemon-cutlery-dark-table_140725-142035.jpg",
        },
      ]}
      title="Popular Menu Highlights"
      description="Discover our signature dishes, crafted with fresh, authentic ingredients."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: Utensils,
          title: "Years Serving",
          value: "10+",
        },
        {
          id: "m2",
          icon: Flame,
          title: "Daily Dishes",
          value: "500+",
        },
        {
          id: "m3",
          icon: Clock,
          title: "Open Hours",
          value: "24/7",
        },
      ]}
      title="Our Kitchen by the Numbers"
      description="Consistently providing quality and satisfaction to our loyal patrons in North York."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Regular",
          company: "Local Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-lunch-together-restaurant_58466-16804.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Foodie",
          company: "Visitor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-having-lunch-together-restaurant_23-2150520109.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Regular",
          company: "North York",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-eating-together_23-2149061571.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "New Customer",
          company: "Food Critic",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-happy-people-communicating-while-having-lunch-together-dining-room_637285-3564.jpg",
        },
        {
          id: "5",
          name: "Linda Smith",
          role: "Regular",
          company: "Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-young-businessman-eating-croissant-while-sitting-outdoor-cafe_637285-10394.jpg",
        },
      ]}
      title="What Our Community Says"
      description="Authentic taste that keeps our customers coming back for more."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you deliver?",
          content: "Yes, we partner with major delivery platforms and offer efficient delivery service.",
        },
        {
          id: "q2",
          title: "Are you open 24 hours?",
          content: "Yes, we operate 24 hours a day to satisfy your cravings anytime.",
        },
        {
          id: "q3",
          title: "Where are you located?",
          content: "We are located at 1230 Sheppard Ave W, North York, ON.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Get answers to common queries about our menu and services."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/top-view-fresh-fish-ready-be-cooked_23-2148295190.jpg"
      imageAlt="Chef preparing traditional meal"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "UberEats",
        "DoorDash",
        "SkipTheDishes",
        "Health Rating A",
        "Community Partner",
      ]}
      title="Trusted Partners & Accolades"
      description="Proud to be recognized and supported by our community."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Newsletter"
      title="Stay Connected"
      description="Sign up for our newsletter to get updates on special menu additions and seasonal promotions."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/top-view-fresh-sliced-fish-with-onion-rings-tomatoes-dark-background_140725-132958.jpg"
      imageAlt="Fresh ingredients display"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#menu",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Yelp",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Topaz Kitchen"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
