
import { USER_REPOSITORY, SOCIALMEDIA_REPOSITORY } from '../utils/constants';
import { Socialmedia } from './socialmedia.entity';

export const socialmediaProvider = [
  {
    provide: SOCIALMEDIA_REPOSITORY,
    useValue: Socialmedia,
  },
];