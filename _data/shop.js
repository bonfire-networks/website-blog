// Set it to "" to fall back to ordering by email.
const checkoutUrl = "https://donate.stripe.com/fZu7sNffXdQg7TQ7PP8AE00";
const emailOrderUrl = [
  "mailto:team@bonfire.cafe",
  "?subject=Bonfire%20limited-edition%20screen-print%20order",
  "&body=Hello%20Bonfire%20team%2C%0A%0AI%27d%20like%20to%20order%20the%20Bonfire%20limited-edition%20screen-print.%0A%0ADelivery%20country%3A%20%0AQuantity%3A%201%0A"
].join("");

module.exports = {
  product: {
    name: "The Bonfire Screen Print",
    artist: "Rocco Lombardi",
    artistUrl: "https://www.instagram.com/rocco00073/?hl=en",
    price: "250",
    currency: "EUR",
    format: "Limited-edition 1-colour screen-print",
    dimensions: "35 × 50 cm",
    editionSize: 250,
    paper: "Fine 300gsm stock",
    packaging: "Protective shipping tube",
    image: "/img/shop/bonfire-release-a3.jpg",
    imageWidth: 2000,
    imageHeight: 1400,
    url: "/shop/bonfire-poster/"
  },
  checkoutUrl,
  orderUrl: checkoutUrl || emailOrderUrl,
  stripeEnabled: Boolean(checkoutUrl),
  testMode: checkoutUrl.includes("/test_")
};
