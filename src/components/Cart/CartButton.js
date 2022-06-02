import classes from './CartButton.module.css';
import { showCartActions } from '../../store/showCart';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cart.cardItem);

  const handleCart = () => {
    dispatch(showCartActions.show());
  };

  const totalItem = card.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
