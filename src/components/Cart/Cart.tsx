import { useState } from "react";
import * as S from "./styles";
import { FiEyeOff } from "react-icons/fi";

interface CartProps {
  $ViewCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ $ViewCart }) => {
  const [hiddenCart, setHiddenCart] = useState(true);
  return (
    <S.Container $ViewCart={$ViewCart}>
      <S.HeaderCartWrraper>
        <FiEyeOff onClick={() => setHiddenCart(hiddenCart)} />
        <S.Title>Carrinho</S.Title>
      </S.HeaderCartWrraper>
    </S.Container>
  );
};
