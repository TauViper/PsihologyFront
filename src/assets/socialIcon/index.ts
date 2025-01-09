import vk from './vk-circled.svg';
import google from './google.svg';
import telegram from './telegram-app.svg';
import whatsapp from './whatsapp.svg';
import vkBlack from './vk-circled_black.svg';
import googleBlack from './google_black.svg';
import telegramBlack from './telegram-app_black.svg';
import whatsappBlack from './whatsapp_black.svg';
import { Icon } from '../../interfaces/interfaces.ts';

export const icons: Icon[] = [
  {
    name: 'vk',
    icon: vk,
    url: 'https://vk.com'
  },
  {
    name: 'telegram',
    icon: telegram,
    url: 'https://telegram.org'
  },
  {
    name: 'whatsapp',
    icon: whatsapp,
    url: 'https://whatsapp.com'
  },
  {
    name: 'google',
    icon: google,
    url: 'https://google.com'
  }
];
export const iconsBlack: Icon[] = [
  {
    name: 'vk',
    icon: vkBlack,
    url: 'https://vk.com'
  },
  {
    name: 'telegram',
    icon: telegramBlack,
    url: 'https://telegram.org'
  },
  {
    name: 'whatsapp',
    icon: whatsappBlack,
    url: 'https://whatsapp.com'
  },
  {
    name: 'google',
    icon: googleBlack,
    url: 'https://google.com'
  }
];
