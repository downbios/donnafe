import * as S from "./styles";
import { FiEyeOff } from "react-icons/fi";

interface CartProps {
  $ViewCart: boolean;
  toogleViewcart: () => void;
}

export const Cart: React.FC<CartProps> = ({ $ViewCart, toogleViewcart }) => {
  return (
    <S.Container $ViewCart={$ViewCart}>
      <S.HeaderCartWrraper>
        <FiEyeOff onClick={toogleViewcart} />
        <S.Title>Carrinho</S.Title>
      </S.HeaderCartWrraper>
    </S.Container>
  );
};
