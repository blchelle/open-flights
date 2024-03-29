class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify
  before_update :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?

    # Rounds the average review score to 2 digits
    reviews.average(:score).round(2).to_f
  end
end
