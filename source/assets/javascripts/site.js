// My Code Only!

import breakpoints from './vendor/breakpoints';
import index from './pages/index';

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();

  switch ($bodyId) {
    case 'index':
      index();
      break;
    default:
      break;
  }
});
