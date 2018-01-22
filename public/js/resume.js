$(document).ready(ready);

function ready() {
  
  // add click event to navigation items in header
  $('.nav-item a').on('click', handleNavClick)
}

function handleNavClick(evt) {

  // isolate reference to DOM element
  const node = evt.target;

  // Update class on header navigation menu
  $('.nav-item').removeClass('active-tab');
  $(node).parent().addClass('active-tab');
  
  // Update main section to show correct page
  const target = "#" + $(node).attr('id') + "-content";
  $('.page').attr('hidden', true);
  $(target).attr('hidden', false);
}