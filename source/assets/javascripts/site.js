// My Code Only!
import '../stylesheets/site.scss';

import breakpoints from './vendor/breakpoints';
import loader from './components/loader';
import index from './pages/index';

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();
  loader();

  switch ($bodyId) {
    case 'index':
      index();
      break;
    default:
      break;
  }
});
