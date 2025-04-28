(function ($) {
  $(document).ready(function () {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    $('[data-youtbe-id]').on('click', function () {
      let id = $(this).data('youtbe-id');
      $(this).attr('id', 'youtube-' + id);
      let player;
        player = new YT.Player('youtube-' + id, {
          videoId: id,
          playerVars: {
            'autoplay': 1,
            'playsinline': 1,
            'rel': 0,
            'enablejsapi': 1,
          },
          events: {
            'onReady': onPlayerReady,
          }
        });
      function onPlayerReady(event) {
        event.target.playVideo();
      }
    });
  });
})(jQuery);
