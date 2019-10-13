import $ from 'jquery';
import SlideXOnScroll from './modules/SlideXOnScroll';
import FadeInOnScroll from './modules/FadeInOnScroll';
import ShakeOnScroll from './modules/ShakeOnScroll';
import SendEmail from './modules/SendEmail';
import UpdateVh from './modules/UpdateVh';
import SlideOnClick from './modules/SlideOnClick';
import ProgressOnScroll from './modules/ProgressOnScroll';
import 'particles.js';
import Typed from 'typed.js';

new ProgressOnScroll();
particlesJS.load('particles-js', '/particles/particles.json', () => 0);
new UpdateVh();
new SlideOnClick();
new Typed('.professional-skill', {
  strings: ['web developer', 'web expert', 'front-end engineer', 'front-end developer'],
  loop: true,
  typeSpeed: 70,
  backSpeed: 20
});
new SendEmail();
new ShakeOnScroll();
new FadeInOnScroll();
new SlideXOnScroll($('.service__box--top-row'), '75%', 'slideToLeftOnScroll');
new SlideXOnScroll($('.service__box--bottom-row'), '75%', 'slideToRightOnScroll');
new SlideXOnScroll($('.form__group--name'), '87%', 'slideToRightOnScroll');
new SlideXOnScroll($('.form__group--email'), '87%', 'slideToLeftOnScroll');
new SlideXOnScroll($('.form__button'), '87%', 'slideToRightOnScroll');