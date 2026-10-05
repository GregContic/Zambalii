export const restaurant = {
  name: "Zambalii Grill",
  shortName: "Zambalii",
  tagline: "Good food. Good times.",
  description:
    "A warm table in Baguio for smoky grilled favorites, Filipino comfort food, and time well spent.",
  address: "Tiptop Ambuklao Road, Baguio, Benguet, Philippines",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=16.4306997,120.6222734",
  contact: {
    phone: "0985 909 2146",
    phoneLink: "tel:+639859092146",
    email: "grillzambalii@gmail.com",
    emailLink: "mailto:grillzambalii@gmail.com",
  },
  facebook: null,
};

const demoImages = {
  hero:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85",
  grill:
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
  soup:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  ribs:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  interior:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
  table:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
  dining:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
};

export const restaurantImages = {
  hero: {
    local: "/images/zambalii-grill/hero/hero-main.jpg",
    demo: demoImages.hero,
    alt: "Zambalii Grill at night with its outdoor fire pit glowing",
  },
  featuredFood: [
    {
      name: "Featured BBQ",
      label: "Restaurant favorite",
      local: "/images/zambalii-grill/food/grilled-pork-rice.jpg",
      demo: demoImages.grill,
      alt: "Grilled pork served with rice, egg, and vegetables",
    },
    {
      name: "Grilled favorites",
      label: "Made for sharing",
      local: "/images/zambalii-grill/food/bbq-sharing-plate.jpg",
      demo: demoImages.ribs,
      alt: "A plate of grilled favorites served with rice",
    },
    {
      name: "Filipino comfort",
      label: "Warm and satisfying",
      local: "/images/zambalii-grill/food/sizzling-pork-rice.jpg",
      demo: demoImages.soup,
      alt: "Sizzling pork served with rice and a fried egg",
    },
  ],
  gallery: [
    { local: "/images/zambalii-grill/restaurant/restaurant-interior.jpg", demo: demoImages.interior, alt: "Zambalii Grill restaurant interior" },
    { local: "/images/zambalii-grill/restaurant/dining-area.jpg", demo: demoImages.table, alt: "Zambalii Grill dining area" },
    { local: "/images/zambalii-grill/restaurant/restaurant-exterior.jpg", demo: demoImages.dining, alt: "Zambalii Grill exterior" },
    { local: "/images/zambalii-grill/gallery/feature-wall.jpg", demo: demoImages.interior, alt: "Zambalii Grill feature wall" },
    { local: "/images/zambalii-grill/restaurant/restaurant-entrance.jpg", demo: demoImages.dining, alt: "Zambalii Grill entrance" },
    { local: "/images/zambalii-grill/gallery/interior-lighting.jpg", demo: demoImages.interior, alt: "Warm lighting inside Zambalii Grill" },
    { local: "/images/zambalii-grill/gallery/logo-wall.jpg", demo: demoImages.interior, alt: "Zambalii Grill illuminated logo wall" },
    { local: "/images/zambalii-grill/food/dessert-special.jpg", demo: demoImages.table, alt: "A heart-shaped dessert served at Zambalii Grill" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit us", href: "#visit" },
];
