class User < ApplicationRecord
  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_many :reviews_written,
  foreign_key: :author_id,
  class_name: :Review,
  dependent: :destroy

  has_many :bars_reviewed,
  through: :reviews_written,
  source: :bar

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.authenticate(password)
    return nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end

end
