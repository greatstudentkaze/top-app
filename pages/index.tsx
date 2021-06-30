import { Button, HeadingTag, Paragraph, Rating, Tag } from '../components';
import { useState } from 'react';

const Home = (): JSX.Element => {
  const [rating, setRating] = useState(4);

  return <>
    <HeadingTag level="1">Курсы по Photoshop</HeadingTag>
    <Tag size="small" color="red">hh.ru</Tag>
    <Tag color="red">hh.ru</Tag>
    <Tag color="green">hh.ru</Tag>
    <Tag color="primary">hh.ru</Tag>
    <Tag color="ghost">hh.ru</Tag>
    <Rating rating={2} />
    <Rating rating={rating} setRating={setRating} isEditable />
    <Paragraph size="small">
      Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь
      перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту
      профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java
      по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так –
      полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы
      приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это –
      реально помогло в трудоустройстве!
    </Paragraph>
    <Paragraph>
      Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые
      позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники
      факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
    </Paragraph>
    <Paragraph size="large">
      Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в
      дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой
      профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
    </Paragraph>
    <Button>Узнать подробнее</Button>
    <Button arrowDirection="right">Узнать подробнее</Button>
    <Button appearance="ghost" arrowDirection="down">Читать отзывы</Button>
  </>;
};

export default Home;
