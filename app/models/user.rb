class User < ApplicationRecord
  has_secure_password

  # def valid_phone_number
  #   number = :phone.split("-")
  #   if (number.length != 3 || number[0].length != 3 || number[1].length != 3 || number[2].length != 4)
  #     return false
  #   end
  # end

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone,
    uniqueness: true,
    length: { is: 12 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

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
