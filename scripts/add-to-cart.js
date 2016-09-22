// jQuery script to move the add to cart button higher on the page

(function () {
  var MANGLORD = {
    $productCode: $('.pdp-item-review-count'),
    $price: $('.pdp-price-contianer-holder'),
    $reviews: $('.pdp-product-reviews-wrapper'),
    $addToCart: $('.pdp-add-cart-wrapper'),
    $addToWishlist: $('#wishlist-box').parent(),
    $title: $('.pdp-product-title'),
    $inStockInfo: $('.instock-info-wrapper'),

    removeProductCode: function() {
      this.$productCode.each(function() {
        if ($(this).text().match(/code/i)) $(this).hide()
      })
    },

    movePrice: function() {
      this.$price.insertAfter(this.$reviews)
    },

    removeTitleMinHeight: function() {
      this.$title.css({ minHeight: 0 })
    },

    reStyleReviews: function() {
      this.$reviews.css({
        border: 'none',
        padding: 0,
        marginBottom: '10px'
      })
      this.removeReviewsIfNone()
    },

    removeReviewsIfNone: function() {
      if (this.$reviews.text().match(/0 reviews/i)) {
        this.$reviews.css({
          position: 'absolute',
          visibility: 'hidden',
          left: '-9999px'
        })
      }
    },

    moveAddButtons: function() {
      this.$addToCart.insertBefore(this.$inStockInfo)
      this.$addToWishlist.insertAfter(this.$addToCart)
      this.$inStockInfo.css({
        maxHeight: 'none',
        minHeight: 'none',
        paddingBottom: '50px'
      })
    },

    mangle: function() {
      this.movePrice()
      this.removeProductCode()
      this.removeTitleMinHeight()
      this.reStyleReviews()
      this.moveAddButtons()
    }
  }

  MANGLORD.mangle()
})()
