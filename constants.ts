import { Truck, Car, Bike, Wrench, MapPin, Clock, Shield, Phone, DollarSign, Star, Navigation, Zap } from 'lucide-react';

// Business Information
export const BUSINESS_NAME = "FB Towing";
export const FULL_BUSINESS_NAME = "FB Towing";
export const ADDRESS = "14-16 PODMORE ST, DANDENONG VIC 3175";
export const PHONE = "0400446688";
export const PHONE_LINK = "tel:0400446688";
export const RATING = "4.9";
export const REVIEW_COUNT = "20+";

// Navigation
export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

// Image Assets - Using images from img folder
export const IMAGES = {
  HERO_BG: "/img/AF1QipPISMMnk7QI8HtgSp5O1kbeLn5fiQIqCdDA_28=s779-k-no.png",
  ABOUT_TRUCK: "/img/AF1QipNS7986UXtzRO73uSv15cZAVvd0JgX442RXyMc=s773-k-no.png",
  SERVICE_CAR: "/img/AF1QipMm-V25QfgRBxnns6phyNDvyDCd_M-Nv_vKFx4=s773-k-no.png",
  SERVICE_ACCIDENT: "/img/AF1QipMFGFoHEGKjfN-q9jDhK09qZJrwwqzczC8NpL0=w203-h150-k-no.png",
  SERVICE_MACHINERY: "/img/AF1QipMn-sD2lCVSy5pKN-NFB0cZgSO5SDdR7fxOCxI=w203-h148-k-no.png",
  SERVICE_BIKE: "/img/AF1QipPoW0jfvfo_wYONnxbadr3z45BUxp1-geIs5vA=w64-h64-p-k-no.png",
  SERVICE_LONG_DISTANCE: "/img/AF1QipPISMMnk7QI8HtgSp5O1kbeLn5fiQIqCdDA_28=s779-k-no.png",
  SERVICE_ROADSIDE: "/img/AF1QipMFGFoHEGKjfN-q9jDhK09qZJrwwqzczC8NpL0=w203-h150-k-no.png",
  SERVICE_TRANSPORT: "/img/AF1QipMm-V25QfgRBxnns6phyNDvyDCd_M-Nv_vKFx4=s773-k-no.png"
};

// Services Data
export const SERVICES = [
  {
    id: 1,
    title: "Car Towing",
    description: "Safe transport for all vehicle makes and models. We treat your car with the utmost care.",
    icon: Car,
    image: IMAGES.SERVICE_CAR
  },
  {
    id: 2,
    title: "Breakdown Towing",
    description: "Stranded? Our rapid response team gets to you fast to move your vehicle to safety.",
    icon: Wrench,
    image: IMAGES.SERVICE_ACCIDENT
  },
  {
    id: 3,
    title: "Accident Recovery",
    description: "Stress-free accident management. We handle the scene and transport to your repairer.",
    icon: Shield,
    image: IMAGES.SERVICE_ACCIDENT
  },
  {
    id: 4,
    title: "Machinery Transport",
    description: "Expert towing for bobcats, forklifts, and light industrial machinery.",
    icon: Truck,
    image: IMAGES.SERVICE_MACHINERY
  },
  {
    id: 5,
    title: "Motorcycle Towing",
    description: "Specialized equipment to keep your motorbike secure and upright during transport.",
    icon: Bike,
    image: IMAGES.SERVICE_BIKE
  },
  {
    id: 6,
    title: "Long Distance",
    description: "Reliable vehicle relocation services across Victoria at competitive rates.",
    icon: Navigation,
    image: IMAGES.SERVICE_LONG_DISTANCE
  },
  {
    id: 7,
    title: "Roadside Assist",
    description: "Jump starts, tire changes, and lockouts. We get you back on the road.",
    icon: Zap,
    image: IMAGES.SERVICE_ROADSIDE
  },
  {
    id: 8,
    title: "Trade Transport",
    description: "Scheduled transport solutions for mechanics, panel beaters, and dealerships.",
    icon: Clock,
    image: IMAGES.SERVICE_TRANSPORT
  }
];

// Why Choose Us Data
export const FEATURES = [
  {
    title: "24/7 Availability",
    description: "We never sleep. Our team is ready to dispatch day or night, rain or shine.",
    icon: Clock
  },
  {
    title: "Rapid Response",
    description: "Based in Hampton Park, we reach local suburbs in minutes, not hours.",
    icon: Zap
  },
  {
    title: "Best Prices",
    description: "Honest, upfront pricing. No hidden fees or surprise charges.",
    icon: DollarSign
  },
  {
    title: "Local Experts",
    description: "We know every shortcut in Dandenong South to get to you faster.",
    icon: MapPin
  }
];

// Coverage Areas
export const SUBURBS = [
  "Hampton Park",
  "Dandenong South",
  "Hallam",
  "Narre Warren",
  "Doveton",
  "Endeavour Hills",
  "Lynbrook",
  "Cranbourne",
  "Berwick",
  "Keysborough"
];

// FAQs
export const FAQS = [
  {
    question: "How quickly can you reach me?",
    answer: "For emergencies in Hampton Park, Dandenong South, and Hallam, we often arrive within 15-30 minutes. Traffic conditions may vary, but we always prioritize roadside safety."
  },
  {
    question: "Do you operate on public holidays?",
    answer: "Yes! We are a true 24/7 service. We operate on weekends, public holidays, and late nights."
  },
  {
    question: "What is the cost of towing?",
    answer: "Towing costs vary based on distance, vehicle type, and situation (e.g., accident vs. breakdown). Call us at 0400446688 for an immediate, fixed-price quote."
  },
  {
    question: "Can you tow lowered or modified cars?",
    answer: "Yes, our drivers are experienced with modified vehicles and use appropriate equipment to ensure damage-free loading and unloading."
  },
  {
    question: "Do you help with insurance claims?",
    answer: "We can tow your vehicle directly to your insurer's assessment center or preferred repairer and provide the necessary paperwork for your claim."
  }
];

// Reviews
export const REVIEWS = [
  {
    name: "Sarah Jenkins",
    text: "Saved me when I broke down on the Monash at 2am. Driver was polite, arrived within 20 minutes, and got me home safely. Highly recommend!",
    rating: 5,
    location: "Hampton Park"
  },
  {
    name: "Mike Thompson",
    text: "Used FB Towing to move a project car. Great price and very professional handling of the vehicle. The truck was clean and modern.",
    rating: 5,
    location: "Dandenong South"
  },
  {
    name: "Amit Patel",
    text: "Fastest towing service I've used. Called them for a flat battery jump start and they were there in 15 mins. Good price too.",
    rating: 5,
    location: "Narre Warren"
  },
  {
    name: "Jessica Lee",
    text: "Very friendly driver. Made a stressful accident situation much easier to deal with. Thank you for your help!",
    rating: 5,
    location: "Hallam"
  }
];