import Carousel from 'react-elastic-carousel';

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
} from '@/styles/Home';

export default function Home() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
  ];
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

      <Recipes>
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
        <Info>
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
    </>
  );
}
