import React, { useState } from 'react';
import {
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';

const categories = [
  'Entradas',
  'Pratos Principais',
  'Massas',
  'Sobremesas',
  'Bebidas',
  'Menu Infantil',
];

const menuItems = {
  Entradas: [
    {
      id: 1,
      name: 'Bruschetta Caprese',
      description: 'Pão italiano grelhado com tomate, mozzarella e manjericão',
      price: 28.9,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
      tags: ['Vegetariano'],
    },
    {
      id: 2,
      name: 'Carpaccio',
      description:
        'Finas fatias de filé mignon com molho de mostarda e alcaparras',
      price: 42.9,
      image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6',
      tags: ['Clássico'],
    },
  ],
  'Pratos Principais': [
    {
      id: 3,
      name: 'Filé ao Molho Madeira',
      description:
        'Filé mignon grelhado com molho madeira, acompanha salada e feijão',
      price: 89.9,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
      tags: ['Chef Special'],
    },
  ],
  Massas: [
    {
      id: 4,
      name: 'Fettuccine Alfredo',
      description: 'Massa fresca ao molho cremoso de queijo parmesão',
      price: 62.9,
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a',
      tags: ['Vegetariano'],
    },
    {
      id: 5,
      name: 'Spaghetti alla Carbonara',
      description: 'Massa italiana com pancetta, ovo e queijo pecorino',
      price: 58.9,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
      tags: ['Clássico'],
    },
  ],
  Sobremesas: [
    {
      id: 6,
      name: 'Tiramisù',
      description: 'Clássica sobremesa italiana com café e mascarpone',
      price: 32.9,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
      tags: ['Clássico'],
    },
    {
      id: 7,
      name: 'Petit Gateau',
      description: 'Bolo quente de chocolate com sorvete de baunilha',
      price: 34.9,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
      tags: ['Chef Special'],
    },
  ],
  Bebidas: [
    {
      id: 8,
      name: 'Vinho Tinto Reserva',
      description: 'Cabernet Sauvignon - 750ml',
      price: 189.9,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
      tags: ['Alcoólico'],
    },
    {
      id: 9,
      name: 'Limonada Especial',
      description: 'Limão siciliano, hortelã e água com gás',
      price: 18.9,
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859',
      tags: ['Sem Álcool'],
    },
  ],
  'Menu Infantil': [
    {
      id: 10,
      name: 'Mini Hambúrguer',
      description: 'Hambúrguer caseiro com queijo e batatas fritas',
      price: 42.9,
      image: 'https://images.unsplash.com/photo-1619881590738-a111d176d906',
      tags: ['Kids'],
    },
    {
      id: 11,
      name: 'Nuggets de Frango',
      description: 'Nuggets caseiros com molho especial e batatas fritas',
      price: 38.9,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710',
      tags: ['Kids'],
    },
  ],
};

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="app">
      <header className="header">
        <Menu size={32} />
        <h1>Restaurante Sabor & Arte</h1>
        <p>Experiência gastronômica única com sabores inesquecíveis</p>
      </header>

      <nav className="nav">
        <ul className="nav-list">
          {categories.map((category) => (
            <li
              key={category}
              className={`nav-item ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      <main className="menu-section">
        <h2 className="section-title">{activeCategory}</h2>
        <div className="menu-grid">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
            <div key={item.id} className="menu-item">
              <img
                src={item.image}
                alt={item.name}
                className="menu-item-image"
              />
              <div className="menu-item-content">
                <h3 className="menu-item-title">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <p className="menu-item-price">R$ {item.price.toFixed(2)}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Horário de Funcionamento</h3>
            <p>
              <Clock size={16} /> Seg - Sex: 11h às 23h
            </p>
            <p>Sáb - Dom: 11h às 00h</p>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <p>
              <Phone size={16} /> (11) 1234-5678
            </p>
            <p>
              <MapPin size={16} /> Rua das Delícias, 123 - São Paulo
            </p>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook />
              </a>
              <a href="#" className="social-link">
                <Instagram />
              </a>
              <a href="#" className="social-link">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;