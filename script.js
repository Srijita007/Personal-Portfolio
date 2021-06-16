$(document).ready(function(){

    // $('#hire').click(function(){
    //     alert("clicked");
    // });
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
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.my_navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
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
        autoplay:false,        
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
    // The location of Uluru
    const beckbagan = { lat: 22.538142445390086, lng: 88.36075198119023 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 400,
      center: beckbagan,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: beckbagan,
      map: map,
    });
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

    