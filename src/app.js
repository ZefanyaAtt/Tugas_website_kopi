document.addEventListener("alpine.init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Americano", img: "Americano.jpg", price: 15000 },
      { id: 1, name: "Long Black", img: "Long-Black.jpg", price: 15000 },
      { id: 1, name: "Iced Milk Coffe", img: "menu-kopi.jpg", price: 15000 },
      { id: 1, name: "Espresso Bomb", img: "Espresso-Bomb.jpg", price: 15000 },
    ],
  }));
});
