export default () => {
  const $videoBackgroundVideo = '/assets/images/backgrounds/biography/20241027-avatar-movie.mp4';

  $('#crazy-avatar-video').attr('src', $videoBackgroundVideo);
  $('#crazy-avatar-video-background').get(0).load();

  Breakpoints.on('xxl xxxl', {
    enter() {
      if ($('#crazy-avatar-video').attr('src').trim().length === 0) {
        $('#crazy-avatar-video').attr('src', $videoBackgroundVideo);
        $('#crazy-avatar-video-background').get(0).load();
      }
    },

    leave() {
      $('#crazy-avatar-video').attr('src', '');
    },
  });
};
