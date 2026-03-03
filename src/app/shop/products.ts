export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  details: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "medium-roast-blend",
    name: "Medium Roast Blend",
    category: "Roasted Beans",
    price: "UGX 35,000",
    description:
      "A balanced, smooth medium roast with notes of caramel and milk chocolate. Perfect for everyday brewing.",
    details: [
      "Origin: Ugandan Arabica",
      "Roast Level: Medium",
      "Tasting Notes: Caramel, Milk Chocolate, Nutty",
      "Weight: 250g",
    ],
    image: "/shop/roasted-beans-bag.jpg",
  },
  {
    id: "dark-roast-reserve",
    name: "Dark Roast Reserve",
    category: "Roasted Beans",
    price: "UGX 40,000",
    description:
      "Bold and full-bodied dark roast with rich, smoky depth. Ideal for espresso lovers who enjoy intensity.",
    details: [
      "Origin: Ugandan Robusta-Arabica Blend",
      "Roast Level: Dark",
      "Tasting Notes: Dark Chocolate, Smoky, Bold",
      "Weight: 250g",
    ],
    image: "/shop/dark-roast-tray.jpg",
  },
  {
    id: "light-roast-single-origin",
    name: "Light Roast Single Origin",
    category: "Roasted Beans",
    price: "UGX 45,000",
    description:
      "A bright and fruity light roast showcasing the bean's natural flavors. Best for pour-over and filter brewing.",
    details: [
      "Origin: Mt. Elgon Arabica",
      "Roast Level: Light",
      "Tasting Notes: Citrus, Berry, Floral",
      "Weight: 250g",
    ],
    image: "/shop/light-roast-sample.jpg",
  },
  {
    id: "specialty-roasted-beans",
    name: "Specialty Roasted Selection",
    category: "Roasted Beans",
    price: "UGX 50,000",
    description:
      "Hand-selected, precision-roasted specialty grade beans. A premium offering for the discerning palate.",
    details: [
      "Origin: Select Ugandan Farms",
      "Roast Level: Medium-Dark",
      "Tasting Notes: Brown Sugar, Plum, Cocoa",
      "Weight: 250g",
    ],
    image: "/shop/roasted-beans-hand.jpg",
  },
  {
    id: "green-beans-washed",
    name: "Green Beans — Washed Process",
    category: "Green Beans",
    price: "UGX 25,000",
    description:
      "Premium unroasted washed-process green beans, perfect for home roasters or commercial buyers looking for clean, bright profiles.",
    details: [
      "Origin: Ugandan Arabica",
      "Process: Fully Washed",
      "Grade: Specialty (80+ SCA)",
      "Weight: 1kg",
    ],
    image: "/shop/green-beans.jpg",
  },
  {
    id: "green-beans-natural",
    name: "Green Beans — Natural Process",
    category: "Green Beans",
    price: "UGX 25,000",
    description:
      "Sun-dried natural process green beans with fruity, wine-like character. Great for experimental roasting.",
    details: [
      "Origin: Ugandan Arabica",
      "Process: Natural / Dry",
      "Grade: Specialty (80+ SCA)",
      "Weight: 1kg",
    ],
    image: "/shop/green-beans-bulk.jpg",
  },
  {
    id: "pour-over-kit",
    name: "Pour-Over Brew Kit",
    category: "Brewing Equipment",
    price: "UGX 120,000",
    description:
      "Everything you need for a perfect pour-over at home. Includes V60 dripper, server, scale, and filters.",
    details: [
      "V60 Ceramic Dripper",
      "Glass Server",
      "Digital Brew Scale",
      "Pack of 40 Filters",
    ],
    image: "/shop/pour-over-setup.jpg",
  },
  {
    id: "chemex-brew-kit",
    name: "Chemex Brew Kit",
    category: "Brewing Equipment",
    price: "UGX 150,000",
    description:
      "The classic Chemex brewer for clean, elegant coffee. A beautiful centrepiece for any coffee lover's kitchen.",
    details: [
      "6-Cup Chemex Brewer",
      "Bonded Filters Included",
      "Brew Guide Card",
      "Perfect for 2-3 servings",
    ],
    image: "/shop/chemex-brew.jpg",
  },
  {
    id: "barista-training",
    name: "Barista Training Workshop",
    category: "Experiences",
    price: "UGX 200,000",
    description:
      "Hands-on barista skills workshop covering espresso extraction, milk steaming, latte art, and drink building.",
    details: [
      "Duration: Full Day (6 hours)",
      "Espresso Theory & Practice",
      "Milk Texturing & Latte Art",
      "Certificate of Completion",
    ],
    image: "/shop/barista-at-work.jpg",
  },
  {
    id: "roasting-masterclass",
    name: "Roasting Masterclass",
    category: "Experiences",
    price: "UGX 250,000",
    description:
      "Learn the art and science of coffee roasting from our expert roasters. Roast your own batch to take home.",
    details: [
      "Duration: Full Day (6 hours)",
      "Roasting Theory & Profiles",
      "Hands-on Roaster Operation",
      "Take Home 500g of Your Roast",
    ],
    image: "/shop/roaster-woman.jpg",
  },
];
