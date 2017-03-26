class InteractionsController < ApplicationController
  def index
    # Use interaction as local variable unless you need it elsewhere
    interactions = Interaction.all
    # json endpoint
    render json: interactions.to_json
  end

  def create
    interaction = Interaction.new(interaction_params)
    if interaction.save
      # this response is 200 by default (success)
      render json: interaction.to_json
    else
      # this one is not 200 by default
      render json: interaction.errors.to_h.to_json, status: :bad_request
    end
  end

  private

  def interaction_params
    # strong params
    params.require(:interaction).permit(:name, :emoji, :comment, :current_time)
  end
end
