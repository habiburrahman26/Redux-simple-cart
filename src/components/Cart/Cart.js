import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const card = useSelector((state) => state.cart.cardItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {card.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.price * item.quantity,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
