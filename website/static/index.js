


// refreshes page at the top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  


//Loads the DOM events once the site is finished loading
$(document).ready(function () {
    $('.submit').click(function (event) {
        //Prevents default action of the form from being carried out, to allow validation
        event.preventDefault()
        console.log('clicked button');

        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        var msgElm = $('.msg')
        msgElm.empty()
        statusElm.empty()
         
        // Makes sure the email value contains the '@' symbol and is longer than 5 letters
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<h1 class="status__valid">Email is valid</h1>')
        } else {
            event.preventDefault()
            statusElm.append('<h1 class="status__invalid">Email is not valid</h1>')
        }

      if(message.length =0) {
        event.preventDefault()
        msgElm.append('<h1 class="status__invalid">There is no message</h1>')
      } 
    })
})





var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});










// fade item
const fade = document.querySelectorAll('.fade-in');

// controls time taken for elements to appear
const appearOptions = {
   rootMargin: "0px 0px -100px 0px"
};


const appearOnScroll = new IntersectionObserver
(function (
    entries, 
    appearOnScroll
) {
  entries.forEach(entry => {
      if(!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
      }
  })
},
appearOptions);

fade.forEach(fade => {
    appearOnScroll.observe(fade);
});
