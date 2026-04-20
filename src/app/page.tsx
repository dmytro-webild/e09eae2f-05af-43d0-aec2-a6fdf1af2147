"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Gourmet Haven"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Unforgettable Dining Experiences"
      description="Where passion for flavor meets elegant ambiance. Join us for a culinary journey curated to delight all your senses."
      buttons={[
        {
          text: "Reserve Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wicker-gray-table-with-glass-gray-chairs_140725-3025.jpg"
      imageAlt="Luxurious restaurant dining space"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/vertical-shot-dish-with-shrimp-white-plate_181624-10332.jpg",
          alt: "Vertical shot of a dish with shrimp on a white plate",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-eating-tomato-salad-with-mozzarella-mint-served-with-white-wine_141793-2466.jpg",
          alt: "Woman eating tomato salad with mozzarella and mint served with white wine",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fried-shrimps-with-cucumber-rolls_140725-6657.jpg",
          alt: "Fried shrimps with cucumber rolls",
        },
        {
          src: "http://img.b2bpic.net/free-photo/boiled-coffee-cups-sweets_140725-3711.jpg",
          alt: "Boiled coffee in cups and sweets",
        },
        {
          src: "http://img.b2bpic.net/free-photo/wicker-gray-table-with-glass-gray-chairs_140725-3025.jpg",
          alt: "Luxurious restaurant dining space",
        },
      ]}
      avatarText="Join 15,000+ satisfied guests"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Crafting Flavors ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/cook-putting-vegetable-plate-with-salad_23-2148040235.jpg",
          alt: "Chef at work",
        },
        {
          type: "text",
          content: " with Passion",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "01",
          title: "Farm to Table",
          subtitle: "Sourced daily",
          description: "We partner with local farmers to ensure every ingredient is at its peak freshness.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-nuts-with-citrus-fruits-white-background-nut-snack-fresh-walnut-hazelnut-peanut_140725-99359.jpg",
        },
        {
          tag: "02",
          title: "Expert Sommelier",
          subtitle: "Curated selection",
          description: "Our cellar features handpicked vintages designed to pair perfectly with your meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-champagne-glasses-tray_23-2148356449.jpg",
        },
        {
          tag: "03",
          title: "Private Events",
          subtitle: "Exclusive space",
          description: "Host your special occasions in our elegant private dining room for unmatched intimacy.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891588.jpg?_wi=1",
        },
      ]}
      title="The Art of Cuisine"
      description="Discover what sets our dining experience apart."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          handle: "@alice_foodie",
          testimonial: "An absolutely incredible evening. The atmosphere was perfect.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166104.jpg",
        },
        {
          id: "t2",
          name: "Robert B.",
          handle: "@robert_gourmet",
          testimonial: "The attention to detail in every dish was spectacular.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-with-red-yellow-peper-professional-approach-business_1157-45088.jpg",
        },
        {
          id: "t3",
          name: "Sarah & Dave",
          handle: "@sarah_dave",
          testimonial: "Our anniversary dinner was flawless. Thank you for the service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/kissing-close-couple-with-wine_23-2148025327.jpg",
        },
        {
          id: "t4",
          name: "Marcus L.",
          handle: "@marcus_l",
          testimonial: "A must-visit for anyone who appreciates fine cuisine.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/chatting-with-colleague-lunchtime_1098-15100.jpg",
        },
        {
          id: "t5",
          name: "Jenny H.",
          handle: "@jennyh",
          testimonial: "Everything from the drinks to the dessert was top tier.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598352.jpg",
        },
      ]}
      showRating={true}
      title="What Our Guests Say"
      description="Hear directly from those who have enjoyed our service."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          price: "$85",
          name: "Discovery Menu",
          buttons: [
            {
              text: "Select",
            },
          ],
          features: [
            "5 Course Meal",
            "Wine Pairing",
            "Fresh Appetizers",
          ],
        },
        {
          id: "p2",
          price: "$125",
          name: "Signature Menu",
          buttons: [
            {
              text: "Select",
            },
          ],
          features: [
            "7 Course Meal",
            "Reserve Wine Pairing",
            "Special Chef's Selection",
          ],
        },
        {
          id: "p3",
          price: "$180",
          name: "Executive Menu",
          buttons: [
            {
              text: "Select",
            },
          ],
          features: [
            "9 Course Meal",
            "Premium Pairing",
            "Exclusive Table Location",
          ],
        },
      ]}
      title="Tasting Menus"
      description="Experience our best culinary compositions."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15,000+",
          title: "Dishes Served",
          description: "Happy plates delivered.",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-breakfast-with-vegetables_23-2148169168.jpg",
        },
        {
          id: "m2",
          value: "4.9",
          title: "Customer Rating",
          description: "Based on reviews.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-enjoying-dinner-party_52683-132626.jpg",
        },
        {
          id: "m3",
          value: "12",
          title: "Awards Won",
          description: "Culinary excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-chef-holding-delicious-food_23-2148510894.jpg",
        },
      ]}
      title="Our Culinary Journey"
      description="Numbers behind our passion."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you accept reservations?",
          content: "Yes, reservations are highly recommended.",
        },
        {
          id: "f2",
          title: "Are there vegetarian options?",
          content: "Absolutely, we have a dedicated plant-based menu.",
        },
        {
          id: "f3",
          title: "Is parking available?",
          content: "Complimentary valet parking is available for all guests.",
        },
      ]}
      mediaAnimation="slide-up"
      title="Common Inquiries"
      description="Everything you need to know."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891588.jpg?_wi=2"
      imageAlt="Private dining room"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserve Your Table"
      description="Fill out the form to request a reservation."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Special requests or seating preference",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/girl-cafe-reads-something-tablet_1304-5538.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Gourmet Haven"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
