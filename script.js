document.querySelectorAll('.menu-toggle').forEach(function(toggle){
  var links = document.getElementById('nav-links');
  if(!links) return;

  toggle.addEventListener('click', function(){
    var isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
