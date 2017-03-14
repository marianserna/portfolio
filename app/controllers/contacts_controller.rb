class ContactsController < ApplicationController
  def create
    ContactMailer.contact(contact_params).deliver_now
    render json: {status: 'sent'}
  end

  def new
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
