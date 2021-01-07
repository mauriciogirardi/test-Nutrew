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
            <a href="/">Recipes</a>
          </li>

          <li>
            <a href="/">Go Green</a>
          </li>

          <li>
            <a href="/">Pricing</a>
          </li>

          <li>
            <a href="/">How it works</a>
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
