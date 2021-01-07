import { CardBox } from './styles';

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  titleButton?: string;
  children?: any;
}

export default function Card({
  image,
  title,
  subtitle,
  titleButton,
  children,
}: CardProps) {
  return (
    <CardBox>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <img src={image} alt="Plan 01" />
      <main>{children}</main>

      <button type="button">{titleButton}</button>
    </CardBox>
  );
}
