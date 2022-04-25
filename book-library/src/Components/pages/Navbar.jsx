import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const StyledUl = styled.ul`
  display:flex;
  list-style-type:none;
  gap:20px`;
  const StyledNav = styled.nav`
  background:tomato;
  color:white;`;
  const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
  font-size:20px;
  `;
export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  
  return (
    <>
        {/* keep all the NavLinks here */}
        <StyledNav>
          <StyledUl>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to={!token?"/login":"/logout"}>{token?"Logout":"Login"}</StyledLink>
            </li>
            <li>
              <StyledLink to={token?"/books":"/requiredauth"}>Books</StyledLink>
            </li>
          </StyledUl>
        </StyledNav>
    </>
  );
};
