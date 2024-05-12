import { Product } from "../../data/products";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.Productimage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title} </S.ProductTitle>

      <S.ReviewPriceCotainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({product.rating.rate})
        </S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceCotainer>

      <S.AddCardButtonWrapper>
        <S.AddCardButton>
          Adicioar ao carrinho
          <FiShoppingCart />
        </S.AddCardButton>
        <S.Share>
          Compartilhar
          <FaRegShareSquare />
        </S.Share>
      </S.AddCardButtonWrapper>
    </S.Card>
  );
};
