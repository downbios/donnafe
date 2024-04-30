import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.Productimage
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <S.ProductTitle>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </S.ProductTitle>

      <S.ReviewPriceCotainer>
        <S.Review>4.1</S.Review>
        <S.Price>10,00R$</S.Price>
        <S.Share>enviar</S.Share>
      </S.ReviewPriceCotainer>

      <S.AddCardButtonWrapper>
        <S.AddCardButton>
          Adicioar ao carrinho
          <FiShoppingCart />
        </S.AddCardButton>
      </S.AddCardButtonWrapper>
    </S.Card>
  );
};
