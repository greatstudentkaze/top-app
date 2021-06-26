import { Button, HeadingTag } from '../components';


export default function Home(): JSX.Element {
    return <>
      <HeadingTag level="1">Курсы по Photoshop</HeadingTag>
      <Button>Узнать подробнее</Button>
      <Button appearance="ghost">Читать отзывы</Button>
    </>;
}
