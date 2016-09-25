// jQuery script to fix responsiveness on the site

(function () {
  var additionalStyles = document.createElement('style')
  var $navbarHeader = $('.navbar-header')
  var $navbarMenu = $('.header-customer-asset')
  var $searchBar = $('.header-search-boxwrapper')
  var $shoppingChoices = $('.shopping-choices')
  var $shoppingChoicesItems = $shoppingChoices.find('.list-group-item')
  var $carouselContainer = $('.carousel-container')

  var MANGLORD = {
    navbarMenuHideOnMobile: function() {
      $navbarMenu.addClass('hidden-xs')
    },

    navbarMenuFixWidth: function() {
      $navbarMenu.addClass('col-sm-3')
    },

    searchBarFixPadding: function() {
      $(additionalStyles).append(
        '@media screen and (max-width: 991px) {' +
          '.header-search-boxwrapper {' +
            'padding-top: 0 !important;' +
          '}' +
        '}')
    },

    carouselTablet: function() {
      $(additionalStyles).append(
        '@media screen and (min-width: 768px) and (max-width: 991px) {' +
          '.shopping-choices .list-group-item { ' +
            'width: 24.5%;' +
            'display: inline-block;' +
            'padding: 14px !important;' +
            'border: none !important;' +
            'border-left: 1px solid #555 !important;' +
          '}' +
          '.shopping-choices .list-group-item:first-child { border-left: none !important; }' +
          '.shopping-choices-separator { display: none }' +
          '.shopping-choices-separator + div { display: none }' +
        '}')
    },

    addStyles: function() {
      $('body').append(additionalStyles)
    }
  }

  MANGLORD.navbarMenuHideOnMobile()
  MANGLORD.navbarMenuFixWidth()
  MANGLORD.searchBarFixPadding()
  MANGLORD.carouselTablet()
  MANGLORD.addStyles()
})()
