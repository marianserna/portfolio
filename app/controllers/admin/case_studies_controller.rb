class Admin::CaseStudiesController < Admin::BaseController

  def index
    @case_studies = CaseStudy.all
  end

  def new
    @case_study = CaseStudy.new
  end

  def create
    @case_study = CaseStudy.new(case_study_params)
    if @case_study.save
      redirect_to edit_admin_case_study_url(@case_study)
    else
      render :new
    end
  end

  def edit
    @case_study = CaseStudy.find_by(slug: params[:slug])
  end

  def update
    @case_study = CaseStudy.find_by(slug: params[:slug])
    if @case_study.update(case_study_params)
      redirect_to edit_admin_case_study_url(@case_study)
    else
      render :edit
    end
  end

  def destroy
    @case_study = CaseStudy.find_by(slug: params[:slug])
    @case_study.destroy
    redirect_to admin_case_studies_url
  end

  private

  def case_study_params
    params.require(:case_study).permit(:slug, :title, :video_url, :github_url,
      :site_url, :description, :description_image, :technologies,
      :technologies_image, :challenges, :challenges_image, :position
    )
  end

end
