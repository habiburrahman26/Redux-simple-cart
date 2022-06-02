import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First book',
    description: 'My first book I erver write',
  },
  {
    id: 'p2',
    price: 6,
    title: 'My Second book',
    description: 'My Second book I erver write',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
