import Carousel from 'react-elastic-carousel';
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import Link from 'next/link';

import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Card from '@/components/Card';

import {
  HeaderBackground,
  Main,
  Content,
  Recipes,
  ContainerBackgroundInfo,
  Info,
  ContentInfo,
  ContainerBackgroundArticle,
  Article,
  ContentArticle,
  Delicious,
  ContentDelicious,
  Download,
  App,
  ContainerBackgroundFooter,
  FooterForm,
  Footer,
  FooterNav,
  Social,
} from '@/styles/Home';
import React, { FormEvent, useCallback, useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
  ];

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (
        email === '' ||
        email.indexOf('@') === -1 ||
        email.indexOf('.') === -1
      ) {
        return setError(true);
      }

      setEmail('');
      setError(false);
    },
    [email, setError],
  );
  return (
    <>
      <SEO title="mellow" shouldExcludeTitleSuffix />
      <HeaderBackground>
        <Header>
          <Main>
            <img src="assets/Photo-05.png" alt="food" />

            <div>
              <Content>
                <h1>Your subscription has expired...</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deleniti pariatur natus necessitatibus labore, esse officiis
                </p>
              </Content>

              <Carousel
                breakPoints={breakPoints}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={200}
              >
                <Card
                  title="Plan 01"
                  subtitle="7 Day trial"
                  image="assets/1852.svg"
                  titleButton="LET'S TRY"
                >
                  <p>Users</p>
                  <p>Save Recipes</p>
                  <p>Manage Purchase</p>
                  <p>Compare Price</p>
                  <p>New recipes every week</p>
                </Card>

                <Card
                  title="Plan 01"
                  subtitle="7 Day trial"
                  image="assets/1832.svg"
                  titleButton="LET'S TRY"
                >
                  <p>Users</p>
                  <p>Save Recipes</p>
                  <p>Manage Purchase</p>
                  <p>Compare Price</p>
                  <p>New recipes every week</p>
                </Card>

                <Card
                  title="Plan 01"
                  subtitle="7 Day trial"
                  image="assets/1844.svg"
                  titleButton="LET'S TRY"
                >
                  <p>Users</p>
                  <p>Save Recipes</p>
                  <p>Manage Purchase</p>
                  <p>Compare Price</p>
                  <p>New recipes every week</p>
                </Card>
              </Carousel>
            </div>
          </Main>
        </Header>
      </HeaderBackground>

      <Recipes id="recipes">
        <h1>Recipes</h1>
        <p>
          Culpa et consectetur adipisicing elit. Molestiae porro error minima
          cumque voluptatem voluptatibus placeat debitis. Dolores facere labore
          quisquam cum quaerat animi harum, cumque odio ea, neque sit!
        </p>

        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
        >
          <img src="assets/food01.png" alt="food" />
          <img src="assets/food02.png" alt="food" />
          <img src="assets/food03.png" alt="food" />
          <img src="assets/food04.png" alt="food" />
          <img src="assets/food02.png" alt="food" />
          <img src="assets/food01.png" alt="food" />
        </Carousel>
      </Recipes>

      <ContainerBackgroundInfo>
        <Info id="go-green">
          <div>
            <img className="image01" src="assets/1635.svg" alt="food" />
            <img className="image02" src="assets/1636.svg" alt="food" />

            <img className="image03" src="assets/1635.svg" alt="food" />
            <img className="image04" src="assets/1636.svg" alt="food" />
            <img src="assets/Landpage-Photo-02.svg" alt="food" />
          </div>

          <Carousel
            breakPoints={[{ width: 1300, itemsToShow: 1 }]}
            showArrows={false}
            enableAutoPlay={true}
            autoPlaySpeed={2000}
          >
            <ContentInfo>
              <h1>Go Green</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                vitae maiores consequatur dolor ad nam, rem culpa? Harum nam
                necessitatibus ad voluptatum. Voluptates eveniet doloribus
                voluptatum consequatur, odit quibusdam qui! vitae maiores
                consequatur dolor ad nam, rem culpa? Harum nam necessitatibus ad
                voluptatum. Voluptates eveniet doloribus voluptatum consequatur,
                odit quibusdam qui!
              </p>

              <div>
                <img src="assets/logo.svg" alt="waitrose" />
                <img src="assets/tesco.svg" alt="tesco" />
                <img src="assets/ocado.svg" alt="ocado" />
              </div>
            </ContentInfo>

            <ContentInfo>
              <h1>About us</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                vitae maiores consequatur dolor ad nam, rem culpa? Harum nam
                necessitatibus ad voluptatum. Voluptates eveniet doloribus
                voluptatum consequatur, odit quibusdam qui! vitae maiores
                consequatur dolor ad nam, rem culpa? Harum nam necessitatibus ad
                voluptatum. Voluptates eveniet doloribus voluptatum consequatur,
                odit quibusdam qui!
              </p>
            </ContentInfo>
          </Carousel>
        </Info>
      </ContainerBackgroundInfo>

      <ContainerBackgroundArticle>
        <Article id="pricing">
          <Carousel
            breakPoints={[{ width: 1300, itemsToShow: 1 }]}
            showArrows={false}
            enableAutoPlay={true}
            autoPlaySpeed={2000}
          >
            <ContentArticle>
              <img src="assets/Photo-04.png" alt="food" />
              <main>
                <h1>How it works</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita suscipit illum necessitatibus eveniet nesciunt
                  asperiores, ipsa aliquid quidem ipsam voluptatibus. Soluta
                  eveniet, eius alias libero odit dolorum. Dolor, expedita
                  numquam, ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita suscipit illum necessitatibus eveniet nesciunt
                  asperiores, ipsa aliquid quidem ipsam voluptatibus. Soluta
                  eveniet, eius alias libero odit dolorum. Dolor, expedita
                  numquam, Expedita suscipit illum necessitatibus eveniet
                  nesciunt asperiores, ipsa aliquid quidem ipsam voluptatibus.
                  Soluta eveniet, eius alias libero odit dolorum. Dolor,
                  expedita numquam
                </p>
              </main>
            </ContentArticle>
            <ContentArticle>
              <img src="assets/Photo-04.png" alt="food" />
              <main>
                <h1>How it works</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita suscipit illum necessitatibus eveniet nesciunt
                  asperiores, ipsa aliquid quidem ipsam voluptatibus. Soluta
                  eveniet, eius alias libero odit dolorum. Dolor, expedita
                  numquam, ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita suscipit illum necessitatibus eveniet nesciunt
                  asperiores, ipsa aliquid quidem ipsam voluptatibus. Soluta
                  eveniet, eius alias libero odit dolorum. Dolor, expedita
                  numquam, Expedita suscipit illum necessitatibus eveniet
                  nesciunt asperiores, ipsa aliquid quidem ipsam voluptatibus.
                  Soluta eveniet, eius alias libero odit dolorum. Dolor,
                  expedita numquam
                </p>
              </main>
            </ContentArticle>
          </Carousel>
        </Article>
      </ContainerBackgroundArticle>

      <Delicious>
        <ContentDelicious id="how-it-works">
          <h1>
            Delicious
            <br /> Planet-friendly food
          </h1>
          <p>
            Cupla ipsum dolor sit amet consectetur adipisicing elit. A veritatis
            dolore delectus doloribus fuga
          </p>
          <button>LET'S TRY</button>

          <Download>
            <p>Download on iOS and android for free</p>

            <div>
              <App>
                <FaApple />
                <div>
                  <span>Download on the</span>
                  <h2>App Store</h2>
                </div>
              </App>

              <App>
                <FaGooglePlay />
                <div>
                  <span>GET IT ON</span>
                  <h2>Google Play</h2>
                </div>
              </App>
            </div>
          </Download>
        </ContentDelicious>

        <div className="img" />
      </Delicious>

      <ContainerBackgroundFooter>
        <Footer>
          <FooterNav>
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
            </ul>

            <Link href="/">
              <a>
                <img src="assets/Mellow_Logo.svg" alt="Mellow" />
              </a>
            </Link>
          </FooterNav>

          <FooterForm>
            <h1>Cool phrase goes here</h1>
            <h2>Maybe in two lines</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit">SUBSCRIBE</button>
              {error && <span>Email invalid!</span>}
            </form>
          </FooterForm>

          <Social>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <ImPinterest2 />
          </Social>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Footer>
      </ContainerBackgroundFooter>
    </>
  );
}
