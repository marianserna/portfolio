class Admin::CodeHighlightsController < Admin::BaseController

  before_action :load_case_study

  def index
    @code_highlights = @case_study.code_highlights.all
  end

  def new
    @code_highlight = @case_study.code_highlights.new
  end

  def create
    @code_highlight = @case_study.code_highlights.new(code_highlight_params)
    if @code_highlight.save
      redirect_to admin_case_study_code_highlights_url(@case_study)
    else
      render :new
    end
  end

  def edit
    @code_highlight = @case_study.code_highlights.find(params[:id])
  end

  def update
    @code_highlight = @case_study.code_highlights.find(params[:id])
    if @code_highlight.update(code_highlight_params)
      redirect_to admin_case_study_code_highlights_url(@case_study)
    else
      render :edit
    end
  end

  def destroy
    @code_highlight = @case_study.code_highlights.find(params[:id])
    @code_highlight.destroy
    redirect_to admin_case_study_code_highlights_url(@case_study)
  end

  private

  def load_case_study
    # params changed because of nested routing (:case_study_slug)
    @case_study = CaseStudy.find_by(slug: params[:case_study_slug])
  end

  def code_highlight_params
    params.require(:code_highlight).permit(:image, :caption, :position)
  end

end
