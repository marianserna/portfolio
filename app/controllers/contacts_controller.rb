class ContactsController < ApplicationController
  def create
    ContactMailer.contact(contact_params).deliver_now
    head :ok
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
