const mockCategorias = [
    { id: 1, name: "Pizzas" },
    { id: 2, name: "Burguers" },
    { id: 3, name: "Pastas" },
    { id: 4, name: "Bebidas" },
    { id: 5, name: "Postres" }
];

const mockPlatos = [
    {
        id: 1,
        name: "Pizza Margherita San Junipero",
        description: "Nuestra versión de la clásica pizza con pomodoro italiano, mozzarella fior di latte y albahaca fresca.",
        price: 1200.00,
        image: "https://cdn.bolivia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg",
        isActive: true,
        category: { id: 1, name: "Pizzas" }
    },
    {
        id: 2,
        name: "Pepperoni Passion",
        description: "Cargada de pepperoni crujiente y extra mozzarella sobre nuestra base artesanal fermentada 48 hs.",
        price: 1500.00,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800",
        isActive: true,
        category: { id: 1, name: "Pizzas" }
    },
    {
        id: 3,
        name: "Bacon Cheese Burger Especial",
        description: "Doble carne de res premium, cheddar fundido, tocino ahumado y nuestra salsa secreta San Junipero.",
        price: 1800.00,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
        isActive: true,
        category: { id: 2, name: "Burguers" }
    },
    {
        id: 4,
        name: "Pasta Carbonara Auténtica",
        description: "Spaghetti con crema de huevo, guanciale crujiente y queso pecorino romano (sin crema).",
        price: 1400.00,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
        isActive: true,
        category: { id: 3, name: "Pastas" }
    },
    {
        id: 5,
        name: "Limonada Refrescante",
        description: "Limonada casera con menta fresca y jengibre.",
        price: 500.00,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
        isActive: true,
        category: { id: 4, name: "Bebidas" }
    },
    {
        id: 6,
        name: "Tiramisú de la Casa",
        description: "Capas de bizcocho café-soletilla rellenas de crema de mascarpone y cacao fino.",
        price: 850.00,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
        isActive: true,
        category: { id: 5, name: "Postres" }
    }
];

// Hacer que estén disponibles globalmente
window.mockCategorias = mockCategorias;
window.mockPlatos = mockPlatos;
