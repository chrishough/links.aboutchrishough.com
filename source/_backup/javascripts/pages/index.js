export default () => {
  $(document).ready(() => {
    const createVideoHTML = () => `
      <video autoplay muted playsinline id="crazy-avatar-video-background">
        <source src="/assets/images/backgrounds/biography/20241027-avatar-movie.mp4" type="video/mp4" id="crazy-avatar-video">
      </video>
      <div id="crazy-avatar-fade-background-overlay"></div>
    `;

    const $videoWrapper = $('#crazy-avatar-video-wrapper');

    const addVideo = () => {
      if ($videoWrapper.find('#crazy-avatar-video-background').length === 0) {
        $videoWrapper.html(createVideoHTML());
        $('#crazy-avatar-video-background').get(0).load();
      }
    };

    const removeVideo = () => {
      $videoWrapper.empty();
    };

    if (Breakpoints.is('xxl') || Breakpoints.is('xxxl')) {
      addVideo();
    } else {
      removeVideo();
    }

    Breakpoints.on('xxl xxxl', {
      enter() {
        addVideo();
      },
      leave() {
        removeVideo();
      },
    });
  });
};
