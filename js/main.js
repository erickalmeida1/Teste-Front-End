let bredi = {
  openMenu: () => {
    $('.sidenav').addClass('open')
    $('.sidenav--overlay').show('fadeIn')
  },

  closeMenu: () => {
    $('.sidenav').removeClass('open')
    $('.sidenav--overlay').hide('fadeIn')
  },

  init: () => {
    $('.carousel').carousel({
      interval: 4000
    })
  }
}

document.addEventListener('click', function(e) {
  console.log(e.target);
  if (e.target.classList.contains('hamburger-button')) {
    bredi.openMenu()
  }
  else if (e.target.classList.contains('sidenav--overlay')) {
    bredi.closeMenu()
  }

  else if (e.target.classList.contains('nav-link')) {
    $('.nav-link').removeClass('active')
    $(e.target).addClass('active')
  }
})