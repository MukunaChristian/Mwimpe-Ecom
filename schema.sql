CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);

INSERT INTO products (name, price, description, image) VALUES
('Natural Face Cream', 29.99, 'A nourishing face cream made with all-natural ingredients to hydrate and rejuvenate your skin.', '/placeholder.svg?height=400&width=400'),
('Organic Lip Balm', 9.99, 'Keep your lips soft and moisturized with our organic lip balm, infused with natural oils and vitamins.', '/placeholder.svg?height=400&width=400'),
('Revitalizing Serum', 39.99, 'Boost your skin\'s radiance with our revitalizing serum, packed with antioxidants and essential nutrients.', '/placeholder.svg?height=400&width=400'),
('Gentle Cleansing Foam', 19.99, 'A gentle, foaming cleanser suitable for all skin types, leaving your skin clean and refreshed.', '/placeholder.svg?height=400&width=400'),
('Anti-Aging Night Cream', 49.99, 'Combat signs of aging with our powerful night cream, working while you sleep for younger-looking skin.', '/placeholder.svg?height=400&width=400'),
('Hydrating Toner', 24.99, 'Balance and hydrate your skin with our alcohol-free toner, enriched with natural botanicals.', '/placeholder.svg?height=400&width=400');