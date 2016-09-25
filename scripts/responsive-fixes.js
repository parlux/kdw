// jQuery script to fix responsiveness on the site

(function () {
  var additionalStyles = document.createElement('style')
  var $navbarHeader = $('.navbar-header')
  var $navbarMenu = $('.header-customer-asset')
  var $searchBar = $('.header-search-boxwrapper')
  var $shoppingChoices = $('.shopping-choices')
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
            'padding-top: 0; !important' +
          '}' +
        '}')
    },

    carouselTablet: function() {
      $shoppingChoices.addClass('col-sm-2')
      $carouselContainer.addClass('col-sm-10')
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
