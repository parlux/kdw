// jQuery script to fix responsiveness on the site

(function () {
  var additionalStyles = document.createElement('style')
  var $navbarHeader = $('.navbar-header')
  var $navbarBrand = $('.navbar-brand')
  var $navbarMenu = $('.header-customer-asset')
  var $navbarMobileMenu = $('#showLeftPushMenu')
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

    navbarMenuInsertIntoHeader: function() {
      var $navbarMenuClone = $navbarMenu.clone()
      $navbarMenuClone.addClass('navbar-menu-clone')
      $navbarMenuClone.insertAfter($navbarBrand)
      $navbarMobileMenu.insertAfter($navbarBrand)

      $(additionalStyles).append(
        '.navbar-menu-clone { display:none; }' +
        '@media screen and (max-width: 767px) {' +
          '.navbar-menu-clone { display:block !important; }' +
        '}')
    },

    navbarMobileColor: function() {
      $(additionalStyles).append(
        '@media screen and (max-width: 767px) {' +
          '.navbar-header { border-bottom: 5px solid #ff3f33 }' +
        '}')
    },

    navbarMobileRemoveNearestStore: function() {
      $('#div__header .hidden-sm.hidden-md.hidden-lg a[href="/Find-Store"]').hide()
    },

    navbarMobileMenu: function() {
      $(additionalStyles).append(
        '@media screen and (max-width: 767px) {' +
          '#showLeftPushMenu { margin-top: 12px; }' +
          '.header-customer-asset { float: right !important; }' +
          '.navbar-brand { float: left !important; }' +
          '.my-account-header-link, .shopping-cart-header-icon { zoom: 0.8; margin-top: 10px; }' +
          '.shopping-cart-header-icon span { margin-left: 4px; }' +
          '.sign-in-header, .mycart-header-link { display: none !important; }' + 
          '.header-customer-asset { width: 120px; padding: 0; }' +
          '.navbar-brand { width: 135px; padding: 0; height: auto; margin-top: 4px; }' +
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
  MANGLORD.navbarMobileColor()
  MANGLORD.navbarMenuInsertIntoHeader()
  MANGLORD.navbarMobileRemoveNearestStore()
  MANGLORD.navbarMobileMenu()
  MANGLORD.addStyles()
})()
