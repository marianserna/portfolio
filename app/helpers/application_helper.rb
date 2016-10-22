module ApplicationHelper
  def item_classes(item)
    classes = []
    classes.push(item.category)
    if item.case_study?
      classes.push('grid-item--case_study')
    end
    classes.join(' ')
  end
end
