import { Product } from "../../data/products";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProdcut, removeProduct } from "../../redux/CartReducer/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const isOncart =
    cart.find((productOncart) => product.id === productOncart.id) !== undefined;

  function handleAddProduct() {
    dispatch(addProdcut(product));
  }

  function handleRemoveProduct() {
    dispatch(removeProduct(product));
  }

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
        {isOncart ? (
          <S.RemoveCartButton onClick={handleRemoveProduct}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveCartButton>
        ) : (
          <S.AddCardButton onClick={handleAddProduct}>
            Adicioar ao carrinho
            <FiShoppingCart />
          </S.AddCardButton>
        )}
        <S.Share>
          Compartilhar
          <FaRegShareSquare />
        </S.Share>
      </S.AddCardButtonWrapper>
    </S.Card>
  );
};
