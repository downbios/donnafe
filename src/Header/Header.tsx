import * as S from "./styles";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <S.HeaderStyle>
      <S.WrapperHeader>
        <S.HeaderTitle>DonnaFe</S.HeaderTitle>
        <S.WrapperButton>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.WrapperButton>
      </S.WrapperHeader>
    </S.HeaderStyle>
  );
};
