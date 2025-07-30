const isProduction = process.env.NODE_ENV === 'production';

export default () => {
  $(document).ready(() => {
    const $loader = $('#page-loader');

    const log = (...args) => {
      if (!isProduction) {
        console.log('[DEV]', ...args);
      }
    };

    log('Loader element:', $('.loader').length);

    // Hide loader after window load and minimum display time
    const minimumDisplayTime = 1500;
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

      setTimeout(() => {
        $loader.addClass('hidden');
        setTimeout(() => {
          $loader.hide();
        }, 500);
      }, remainingTime);
    };

    // Wait for window load
    $(window).on('load', () => {
      log('Window loaded');
      hideLoader();
    });

    // Fallback timeout
    setTimeout(() => {
      if ($loader.is(':visible')) {
        log('Fallback: Removing loader based on timeout');
        hideLoader();
      }
    }, 3000);
  });
};
