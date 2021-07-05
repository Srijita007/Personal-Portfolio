$(document).ready(function(){

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.my_navbar').addClass("sticky");
        }else{
            $('.my_navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    $('.my_navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    
    // hover menu/navbar hamburger
    $('.menu-btn').hover(function(){
        $('.menu-btn i').toggleClass("fa-hamburger");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.my_navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-times");
    });
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Problem Solver", "Developer", "Social Worker", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Problem Solver", "Developer", "Social Worker", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.proj-content').owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0:{
                items: 1,    
            },
            600:{
                items: 2,
            },
            1000:{
                items: 3,
            }
        }
    });
    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplay:true,        
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 2,
            }
        }
    });
});



// Initialize and add the map
function initMap() {
    // The location of Beckbagan
    const beckbagan = { lat: 22.538142445390086, lng: 88.36075198119023 };
    // The map, centered at Beckbagan
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 400,
      center: beckbagan,
    });
    // The marker, positioned at Beckbagan
    const marker = new google.maps.Marker({
      position: beckbagan,
      map: map,
    });
  }


//   QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')

    })
})

// DAY AND NIGHT THEME
const themeButton = document.getElementById('mode-button')

const darkTheme = 'dark-theme'

const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon': 'fa-sun'


// We validate if the user previously chose a topic

if (selectedTheme) {

// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='fa-moon' ? 'add': 'remove' ] (iconTheme)
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {

// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme) 
themeButton.classList.toggle(iconTheme)

// We save the theme and the current icon that the user chose 
localStorage.setItem('selected-theme', getCurrentTheme()) 
localStorage.setItem('selected-icon', getCurrentIcon())

})





/*============= Theme switcher =========================*/

const styleSwitcherToggler = document.querySelector(".theme_btn");

styleSwitcherToggler.addEventListener("click", () =>{ 
    document.querySelector(".theme_selector").classList.toggle("open");
    
})

// Previously selected theme (if user selected)
const selectedColor = localStorage.getItem('selected-color')
// const themeNo = localStorage.getItem('data-color')

// To store the theme
var  my_body = document.querySelector('body');
if(selectedColor == 'null'){
    selectedColor = 248;
    storecolor();
}else{
    storecolor();
}

function storecolor(){
    my_body.style.setProperty('--hue-color', selectedColor);
}  

/* hide style switcher on scroll */
window.addEventListener("scroll", () =>{

if(document.querySelector(".theme_selector").classList.contains ("open")){ 
    document.querySelector(".theme_selector").classList.remove("open");
   }
})

/* hide style switcher on clicking anywhere outside the theme selector */
const theme_selector = document.querySelector('.theme_selector')
document.addEventListener("click", (event) =>{

    if(event.target.closest('.theme_selector'))
        return
    document.querySelector(".theme_selector").classList.remove("open");
})

// theme colors

const colors = document.getElementsByClassName('colors');
let i;
for (i = 0;i<colors.length; i++){
    colors[i].addEventListener('click', changecolor)
}
// var r = document.querySelector('body');
function changecolor(){
    let color = this.getAttribute('data-color'); 
    my_body.style.setProperty('--hue-color', color);
    localStorage.setItem('selected-color', color) 
}



// function hide() {
//     var x = document.getElementById("skill_bars");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

 

    // function send_mail(){

    //     var name = $('#name').val();
    //     var email = $('#email').val();
    //     var subject = $('#subject').val();
    //     var message = $('#message').val();

    //     // var body = $('#body').val();

    //     var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //     //console.log(name, phone, email, message);

    //     Email.send({
    //         SecureToken:"7ae2006f-ca0f-4d9d-941a-012a7a5c54af",
    //         // Host : "smtp.yourisp.com",
    //         // Username : email,
    //         // Password : "password",
    //         To: 'srijitachakrabarty007@gmail.com',
    //         From: "hello@gmail.com",
    //         Subject: "New message on contact from "+name,
    //         Body: Body
    //     }).then(
    //         message =>{
    //             //console.log (message);
    //             if(message=='OK'){
    //             alert('Your mail has been send. Thank you for connecting.');
    //             }
    //             else{
    //                 console.error (message);
    //                 alert('There is error at sending message. ')
                    
    //             }

    //         }
    //     );
    // }

    