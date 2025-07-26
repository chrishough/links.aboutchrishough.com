const isProduction = process.env.NODE_ENV === 'production';

export default () => {
  $(document).ready(() => {
    const $loader = $('#page-loader');

    let animationCompleted = false;

    const log = (...args) => {
      if (!isProduction) {
        console.log('[DEV]', ...args);
      }
    };

    log('Loader element:', $('.loader').length);

    $('.loader').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      log('Animation ended');
      animationCompleted = true;
      $loader.addClass('hidden');

      setTimeout(() => {
        $loader.hide();
      }, 500);
    });

    setTimeout(() => {
      if (!animationCompleted && $loader.is(':visible')) {
        log('Fallback: Removing loader based on timeout');
        $loader.addClass('hidden');
        setTimeout(() => {
          $loader.hide();
        }, 500);
      }
    }, 2000);
  });
};
