(function () {
  function giphySearch(keyword) {
    // Make a request to giphy API here
  }

  function appendImage(img) {
    let $div = $('<div class="img-wrapper"></div>');
    $('<div class="inner"></div>').append(img).appendTo($div);
    $('#thumbs').append($div)
  }

  function showLoader() {
    $('.loader-wrapper').addClass('shown');
  }

  function hideLoader() {
    $('.loader-wrapper').removeClass('shown');
  }

  (function listenOnFormSubmit() {
    $('#searchForm').submit(async (ev) => {
      ev.preventDefault();
      let $input = $('#searchInput');

      main($input.val());
    });
  })();

  function main() {
    //Write our code here
  }
})();