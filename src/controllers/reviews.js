const { reviewsService } = require('../services')

module.exports = {
  async getReviews(req, res) {
    const { sku } = req.params

    const { reviews, stars } = reviewsService.getProductReviewsBySku(sku)

    return res.code(200).send({ reviews, stars })
  }
}
