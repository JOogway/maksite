class User < ApplicationRecord
	attr_writer :login
	validate :validate_invite, :on => :create
	attr_accessor :invite
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  has_many :comments
  #validates :username, presence: :true, uniqueness: { case_sensitive: false }
  validate :validate_username
  def self.find_for_database_authentication(warden_conditions)
  	conditions = warden_conditions.dup
  	if login = conditions.delete(:login)
  		where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
  	elsif conditions.has_key?(:username) || conditions.has_key?(:email)
  		where(conditions.to_h).first
  	end
  end

	def validate_invite
		if self.invite != ''
			self.errors[:base] << "The Invitation Code is Incorrect"
		end
	end
  def validate_username
  	if User.where(email: username).exists?
  		errors.add(:username, :invalid)
  	end
  end
  def login
  	@login || self.username || self.email
  end
end
