import { useSelector } from "react-redux";
import * as S from "./styles";
import { FiEyeOff } from "react-icons/fi";
import { RootReducer } from "../../redux/root-reducer";

interface CartProps {
  $ViewCart: boolean;
  toogleViewcart: () => void;
}

export const Cart: React.FC<CartProps> = ({ $ViewCart, toogleViewcart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);
  return (
    <S.Container $ViewCart={$ViewCart}>
      <S.HeaderCartWrraper>
        <FiEyeOff onClick={toogleViewcart} />
        <S.Title>Carrinho</S.Title>
      </S.HeaderCartWrraper>
      <S.CardProductList>
        {cart.map((product) => (
          <S.CardProductItem key={product.id}>
            {product.title} - R${product.price}
          </S.CardProductItem>
        ))}
      </S.CardProductList>
      <S.CartTotal>Total: R${total}</S.CartTotal>
    </S.Container>
  );
};
