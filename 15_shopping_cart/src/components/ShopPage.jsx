import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";
import PropTypes from "prop-types";

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

ShopPage.propTypes = {
  products: PropTypes.array,
};

export default ShopPage;
