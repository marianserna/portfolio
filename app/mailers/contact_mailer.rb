class ContactMailer < ApplicationMailer
  def contact(params)
    @params = params
    mail(
      to: 'marianhalliday@gmail.com',
      subject: 'New Message',
      reply_to: params[:email]
    )
  end
end
