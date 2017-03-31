import ReactOnRails from 'react-on-rails';
import Sphere from '../components/Sphere';
import NavMenu from '../components/NavMenu';
import ContactForm from '../components/ContactForm';
import Carousel from '../components/Carousel';
import About from '../components/About';
import CaseStudy from '../components/CaseStudy';

// This is how react_on_rails can see the Sphere in the browser.
ReactOnRails.register({
  Sphere,
  NavMenu,
  ContactForm,
  Carousel,
  About,
  CaseStudy
});
