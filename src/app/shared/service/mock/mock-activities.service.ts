import { Injectable } from '@angular/core';
import { Activity } from './../../../activities/activity';

export const ACTIVITIES: Activity[] = [
  {
    id_activity: 1,
    name_activty: 'Escalade groumande',
    description_activity: 'Venez découvrir une nouvelle sorte d\'escape ! Gourmandise et sport font bon ménage!',
    type_activity: 'Expérience sports',
    localisation_lat: 43.634019,
    localisation_lng: 1.433463,
    photos_activity: 'http://demo.tutorialzine.com/2018/03/3-amazing-bootstrap-4-gallery-templates/assets/img/image2.jpg',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },
  {
    id_activity: 2,
    name_activty: 'Ballade en calèche en bord de mer',
    description_activity: 'Au seul bruit rythmé des pas des chevaux Comtois, les Attelages de Roncevaux vous proposent une offre originale, authentique et unique, au coeur d\'un territoire protégé.',
    type_activity: 'Expérience détente',
    localisation_lat: 48.634019,
    localisation_lng: 1.443463,
    photos_activity: 'https://www.letelegramme.fr/ar/imgproxy.php/images/2016/07/12/une-promenade-en-caleche-tiree-par-deux-superbes-fjords-et_2990595.jpg?article=20160712-1011145090&aaaammjj=20160712',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },
  {
    id_activity: 3,
    name_activty: 'Tennis de sable',
    description_activity: 'Raquette de sable et coup de soleil.',
    type_activity: 'Expérience sports',
    localisation_lat: 41.234019,
    localisation_lng: 1.443453,
    photos_activity: 'http://pernes.escalade.free.fr/images/escalade-1mini.jpg',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },
  {
    id_activity: 4,
    name_activty: 'Vol en parapente à Chamonix !',
    description_activity: 'Nous allons voler ensemble depuis la station de Planpraz ou du Plan de l\'Aiguille. ',/*Je vous expliquerai comment voler dans les montagnes de Chamonix.*/
    type_activity: 'Parapente',
    localisation_lat: 43.634019,
    localisation_lng: 1.433463,
    photos_activity: 'https://www.reunion.fr/sites/crt-reunion/files/styles/gallery_lightbox/public/content/images/parapente09_-_credit_irt_-_emmanuel_virin_0.jpg?itok=QHz75Fwu',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },
  {
    id_activity: 5,
    name_activty: 'Partez à l’assaut des vagues',
    description_activity: 'Nous vous proposons de vous initier au surf sur la plage d\'Hendaye',
    type_activity: 'Expérience sports',
    localisation_lat: 48.634019,
    localisation_lng: 1.443463,
    photos_activity: 'https://www.sportrizer.com/sites/default/files/activite_photos/cours_surf_mimizan.jpg',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },
  {
    id_activity: 6,
    name_activty: 'Promenade historique, Château Neuf',
    description_activity: 'Vous visiterez la chapelle et prendrez le temps d\'admirer la vue sur le Léman depuis le belvédère.',
    type_activity: 'Expérience histoire',
    localisation_lat: 41.234019,
    localisation_lng: 1.443453,
    photos_activity: 'https://europe.huttopia.com/content/uploads/2016/11/%C2%A9Camping-Indigo-2.jpg',
    commentaire_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tincidunt sapien. Duis tellus ante, scelerisque quis viverra non, finibus non lorem.',
  },

];

@Injectable({
  providedIn: 'root'
})
export class MockActivitiesService {

  constructor() { }
}
