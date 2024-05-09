import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
`;
export const WrapperButton = styled.div`
  display: flex;
  gap: 1rem;
`;
export const HeaderStyle = styled.header`
  background-color: navajowhite;
`;
export const HeaderTitle = styled.h1`
  color: #333333;
`;
interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  font-family: "Oswald", sans-serif;
  background-color: ${(props) => (props.isLogged ? "#333" : "#e6c499")};
  color: ${(props) => (props.isLogged ? "#fff" : "#333")};
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
export const CartButton = styled.button`
  font-family: "Oswald", sans-serif;
  background-color: #333;
  color: white;
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
