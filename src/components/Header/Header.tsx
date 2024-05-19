import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { login, logout } from "../../redux/UserReducer/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const Logged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "ian",
          email: "email@email.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  const toogleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <S.HeaderStyle>
      <S.WrapperHeader>
        <S.HeaderTitle>DonnaFé</S.HeaderTitle>
        <S.WrapperButton>
          <S.AuthButton $isLogged={Logged} onClick={handleUserAuth}>
            {Logged ? "LogOut" : "LogIn"}
            {Logged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={toogleShowCart}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.WrapperButton>
      </S.WrapperHeader>
      <Cart $ViewCart={showCart} toogleViewcart={toogleShowCart} />
    </S.HeaderStyle>
  );
};
