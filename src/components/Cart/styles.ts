import styled from "styled-components";

interface ContainerProps {
  $ViewCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$ViewCart ? "0" : "-300px")};
  width: 300px;
  background-color: aliceblue;
  height: 100vh;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 1s;

  svg {
    font-size: x-large;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
`;

export const HeaderCartWrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
