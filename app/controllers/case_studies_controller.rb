class CaseStudiesController < ApplicationController
  def index
    @case_studies_props = CaseStudy.limit(5).order(position: :desc).map do |case_study|
      case_study.attributes.merge(
       "image_url" => case_study.description_image.url(:hero),
       "technologies" => case_study.technologies.split(",").first(3).map(&:strip).join(' · ')
      )
    end
  end

  def show
    case_study = CaseStudy.find_by(slug: params[:slug])
    @case_study_props = case_study.attributes.merge(
      description_image_url: case_study.description_image.url(:hero),
      technologies_image_url: case_study.technologies_image.url(:hero),
      challenges_image_url: case_study.challenges_image.url(:hero)
    )

    @code_highlights_props = case_study.code_highlights.map do |code_highlight|
      code_highlight.attributes.merge(
        image_url: code_highlight.image.url(:hero)
      )
    end

    @more_case_studies_props = CaseStudy.where.not(id: case_study.id).
      order('random()').limit(2).map do |case_study|
        case_study.attributes.merge(
          image_url: case_study.description_image.url(:hero)
        )
      end
  end
end
