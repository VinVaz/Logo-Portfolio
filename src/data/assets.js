/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Heading } from 'theme-ui';
import WorkCard from 'components/work-card';

import Work1 from 'assets/work/work-1.png';
import Work2 from 'assets/work/work-2.png';
import Work3 from 'assets/work/work-3.png';
import Work4 from 'assets/work/work-4.png';
import Work5 from 'assets/work/work-5.png';
import Work6 from 'assets/work/work-6.png';

const data = [
  {
    id: 1,
    imgSrc: Work1,
    altText: 'BulkBird',
    title: 'BulkBird',
  },
  {
    id: 2,
    imgSrc: Work2,
    altText: 'NewCoinsHunter',
    title: 'NewCoinsHunter',
  },
  {
    id: 3,
    imgSrc: Work3,
    altText: 'Promo',
    title: 'Promo',
  },
  {
    id: 4,
    imgSrc: Work4,
    altText: 'Mottle',
    title: 'Mottle',
  },
  {
    id: 5,
    imgSrc: Work5,
    altText: 'Caimito',
    title: 'Caimito',
  },
  {
    id: 6,
    imgSrc: Work6,
    altText: 'Makelink',
    title: 'Makelink',
  },
];

export default data;
