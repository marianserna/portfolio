# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170418121155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "case_studies", force: :cascade do |t|
    t.string   "slug",                                        null: false
    t.string   "title",                                       null: false
    t.string   "video_url",                                   null: false
    t.text     "description",                                 null: false
    t.string   "description_image_file_name"
    t.string   "description_image_content_type"
    t.integer  "description_image_file_size"
    t.datetime "description_image_updated_at"
    t.text     "technologies",                                null: false
    t.string   "technologies_image_file_name"
    t.string   "technologies_image_content_type"
    t.integer  "technologies_image_file_size"
    t.datetime "technologies_image_updated_at"
    t.text     "challenges",                                  null: false
    t.string   "challenges_image_file_name"
    t.string   "challenges_image_content_type"
    t.integer  "challenges_image_file_size"
    t.datetime "challenges_image_updated_at"
    t.integer  "position",                        default: 0, null: false
    t.datetime "published_at"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.string   "github_url"
    t.string   "site_url"
    t.string   "one_liner"
  end

  create_table "code_highlights", force: :cascade do |t|
    t.integer  "case_study_id",                  null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "caption",                        null: false
    t.integer  "position",           default: 0, null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.index ["case_study_id"], name: "index_code_highlights_on_case_study_id", using: :btree
  end

  create_table "interactions", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "emoji",        null: false
    t.string   "comment"
    t.integer  "current_time", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "portfolio_items", force: :cascade do |t|
    t.string   "title"
    t.string   "category",                                      null: false
    t.text     "project"
    t.string   "item_url"
    t.string   "background_image_file_name"
    t.string   "background_image_content_type"
    t.integer  "background_image_file_size"
    t.datetime "background_image_updated_at"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.text     "style_settings"
    t.boolean  "featured",                      default: true,  null: false
    t.string   "vimeo_url"
    t.text     "technologies"
    t.integer  "position",                      default: 0,     null: false
    t.boolean  "case_study",                    default: false, null: false
    t.text     "approach"
    t.text     "takeout"
    t.string   "subtitle"
  end

end
