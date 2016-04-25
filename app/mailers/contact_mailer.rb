class ContactMailer < ApplicationMailer
  def contact(params)
    @params = params
    mail(
      to: 'marianhalliday@gmail.com',
      subject: params[:subject],
      reply_to: params[:email]
    )
  end
end
