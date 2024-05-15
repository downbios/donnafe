import styled from "styled-components";

export const Card = styled.article`
  background-color: aliceblue;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Productimage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ReviewPriceCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;

  font-size: 0.85rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const Share = styled.a`
  font-family: "Oswald", sans-serif;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: large;
  }
`;

export const AddCardButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const AddCardButton = styled.button`
  font-family: "Oswald", sans-serif;
  background-color: #e6c499;
  border: none;
  border-radius: 5px;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: large;
  }
`;
export const RemoveCartButton = styled.button`
  font-family: "Oswald", sans-serif;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: large;
  }
`;
