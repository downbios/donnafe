import styled from "styled-components";

export const Card = styled.article`
  background-color: aliceblue;
  width: 100%;
  padding: 1rem;
`;

export const Productimage = styled.img`
  width: 90%;
  margin: 0 auto;
`;

export const ProductTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ReviewPriceCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const Share = styled.a``;

export const AddCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddCardButton = styled.button`
  font-family: "Oswald", sans-serif;
  background-color: #e6c499;
  border: none;
  border-radius: 5px;
  height: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: large;
  }
`;
