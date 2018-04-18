class Admin < ApplicationRecord
	
	#validate :validate_invite, :on => :create
	#attr_accessor :invite
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,:recoverable,
  :rememberable, :trackable, :validatable
  has_many :articles
  
  def validate_invite
    #if self.invite != ""
      #self.errors[:base] << "The Invitation Code is Incorrect"
    #end
  end
end
