// jQuery script to move the add to cart button higher on the page

(function () {
  var MANGLORD = {
    $productCode: $('.pdp-item-review-count'),
    $price: $('.pdp-price-contianer-holder'),
    $reviews: $('.pdp-product-reviews-wrapper'),
    // $price: $('.pdp-price-wrapper'),
    // $rrp: $('.pdp-rrp-wrapper'),
    $title: $('.pdp-product-title'),

    removeProductCode: function() {
      this.$productCode.each(function() {
        if ($(this).text().match(/code/i)) $(this).hide()
      })
    },

    movePrice: function() {
      this.$price.insertAfter(this.$reviews)
    },

    removeReviewsBorder: function() {
      this.$reviews.css({border: 'none'})
    },

    removeTitleMinHeight: function() {
      this.$title.css({ minHeight: 0 })
    },

    rePadReviews: function() {
      this.$reviews.css({
        padding: 0,
        marginBottom: '10px'
      })
    },

    removeReviewsIfNone: function() {
      if (this.$reviews.text().match(/0 reviews/i)) {
        this.$reviews.css({
          position: 'absolute',
          visibility: 'hidden'
        })
      }
    },

    mangle: function() {
      this.movePrice()
      this.removeProductCode()
      this.removeReviewsBorder()
      this.removeTitleMinHeight()
      this.rePadReviews()
      this.removeReviewsIfNone()
    }
  }

  MANGLORD.mangle()
})()
