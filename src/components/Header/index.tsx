import Link from 'next/link';

import { HeaderContainer, Nav } from './styles';

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <Nav>
        <Link href="/">
          <a>
            <img src="assets/Mellow_Logo.svg" alt="Mellow" />
          </a>
        </Link>

        <ul>
          <li>
            <a href="#recipes">Recipes</a>
          </li>

          <li>
            <a href="#go-green">Go Green</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <li>
            <a href="#how-it-works">How it works</a>
          </li>

          <li>
            <img src="assets/mauricio-200.jpg" alt="profile" />
          </li>
        </ul>
      </Nav>

      {children}
    </HeaderContainer>
  );
}
