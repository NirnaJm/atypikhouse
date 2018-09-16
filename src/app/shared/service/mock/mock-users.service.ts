import { Injectable } from '@angular/core';
import { User } from './../../../users/user';

export const USERS: User[] = [
  {
    id_user: 1,
    password: 'password',
    created_at: '10-09-2018',
    update_at: '12-08-2018',
    last_name: 'Rodriguez',
    first_name: 'Emilia',
    renter: 1,
    partner: 0,
    email: 'emilia-rodriguez@gmail.com',
    description: 'Bonjour, mon but est que vous vous sentiez chez moi comme chez vous, si ce n\'est mieux! Passionnée de gastronomie, de musique et d\'art de vivre, je suis une mine de bons plans dans toute la Provence que je connais très bien. Avant et pendant votre séjour, je vous conseillerais au mieux pour faire de votre escale à Avignon une expérience inoubliable.',
    id_address: 1,
    id_picture: 1,
  },
  {
    id_user: 2,
    password: 'jluc85',
    created_at: '10-05-2018',
    update_at: '02-06-2018',
    last_name: 'Bauges',
    first_name: 'Jean-Luc',
    renter: 1,
    partner: 0,
    email: 'jluc85@gmail.com',
    description: 'J\'adore mon lieu de vie, je suis savoyard et montagnard mais j\'adore voyager et j\'apprécie surtout de rencontrer des personnes de différentes cultures. Nous sommes tous sur la même terre. J\'aurais plaisir à vous faire découvrir mon coin. Je suis passionné de plein air, de randonnée et de ski. Mon film préféré, c\'est danse avec les loups. Je suis un joueur de Batucada ici dans le groupe Batucadeva.',
    id_address: 2,
    id_picture: 2,
  },
  {
    id_user: 3,
    password: 'boorraa45',
    created_at: '07-04-2018',
    update_at: '11-07-2018',
    last_name: 'Borée',
    first_name: 'Nathalie',
    renter: 1,
    partner: 0,
    email: 'boreenathalie@gmail.com',
    description: 'Nous sommes un couple d\'amoureux de la nature, nous avons reconstruit deux maisons en ruines sur le plateau ardéchois, il y a maintenant 10 ans. Nous sommes férus de cyclovoyages, de parapente et des bons produits régionaux ! Soyez les bienvenus !',
    id_address: 3,
    id_picture: 3,
  },
  {
    id_user: 4,
    password: 'bm31kj',
    created_at: '10-09-2018',
    update_at: '12-08-2018',
    last_name: 'Bernard',
    first_name: 'Marc',
    renter: 0,
    partner: 1,
    email: 'marc-bernard31@gmail.com',
    description: 'Dans le Massif du Vercors, à 20 mn de Grenoble, découvrez une promenade atypique à la station du Col de l\'Arzelier . ',
    id_address: 4,
    id_picture: 4,
  },
  {
    id_user: 5,
    password: 'password',
    created_at: '01-09-2018',
    update_at: '12-05-2018',
    last_name: 'Menguaille',
    first_name: 'Richard ',
    renter: 1,
    partner: 2,
    email: 'menguaille@gmail.com',
    description: ' Découvrez de merveilleux paysages au rythme des pas de mon cheval Dasko! ',
    id_address: 5,
    id_picture: 5,
  },
  {
    id_user: 6,
    password: 'password',
    created_at: '04-03-2018',
    update_at: '04-04-2018',
    last_name: 'Balanden',
    first_name: 'James & Solen',
    renter: 0,
    partner: 1,
    email: 'js-balanden@gmail.com',
    description: 'Nous avons une école de surf depuis 3ans : So nice surf school. Et nous sommes heureux de vous accueillir dans ce cadre magnifique de Porge.',
    id_address: 6,
    id_picture: 6,
  },
];

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {

  constructor() { }
}
