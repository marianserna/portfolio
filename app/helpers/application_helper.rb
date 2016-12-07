module ApplicationHelper
  def item_classes(item, index)
    classes = []
    classes.push(item.category)
    if (index % 3) != 0
      classes.push('grid-item--half')
    end
    classes.join(' ')
  end
end
