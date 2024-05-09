import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const Logged = false;

  return (
    <S.HeaderStyle>
      <S.WrapperHeader>
        <S.HeaderTitle>DonnaFe</S.HeaderTitle>
        <S.WrapperButton>
          <S.AuthButton isLogged={Logged}>
            {Logged ? "LogOut" : "LogIn"}
            {Logged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.WrapperButton>
      </S.WrapperHeader>
      <Cart ViewCart={showCart} />
    </S.HeaderStyle>
  );
};
