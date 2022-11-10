const reviews = {
  102030: {
    reviews: [
      {
        id: 'customer-id-1',
        name: 'Andrea Good',
        stars: 5,
        comments: 'Very good'
      },
      {
        id: 'customer-id-3',
        name: 'Andrea Bad',
        stars: 3,
        comments: 'Not so good'
      },
      {
        id: 'customer-id-5',
        name: 'Andrea So Good',
        stars: 5,
        comments: 'So good'
      }
    ]
  },
  203040: {
    reviews: [
      {
        id: 'customer-id-1',
        name: 'Andrea Good',
        stars: 1,
        comments: 'Very bad'
      },
      {
        id: 'customer-id-3',
        name: 'Andrea Bad',
        stars: 1,
        comments: 'Not so good'
      },
      {
        id: 'customer-id-4',
        name: 'Andrea Too Bad',
        stars: 1,
        comments: 'Too bad'
      },
      {
        id: 'customer-id-5',
        name: 'Andrea So Good',
        stars: 5,
        comments: 'So good'
      }
    ]
  }
}

const calculateReviews = (review) => {
  const response = {
    reviews: [],
    stars: 0
  }

  if (!review) return response

  response.reviews = review.reviews
  response.stars = (
    review.reviews.map((r) => r.stars).reduce((prev, next) => prev + next, 0) / review.reviews.length
  ).toFixed(2)

  return response
}

module.exports = {
  getProductReviewsBySku(sku) {
    return calculateReviews(reviews[sku])
  }
}
