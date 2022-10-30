        var menubar = document.getElementById('menubar');
        var navbar = document.getElementById('navbar');
        var loginForm= document.getElementById('loginForm');
        var signUpForm= document.getElementById('signUpForm');
        var signUp = document.getElementById('sign-up')


        menubar.addEventListener ('click', function(){
           
            navbar.classList.toggle('mobile-menu');
        })
        window.onscroll = () =>{

            menubar.classList.remove('fa-times');
            navbar.classList.remove('mobile-menu');
          
            if(window.scrollY > 60){
              document.querySelector('#scroll-top').classList.add('mobile-menu');
            }else{
              document.querySelector('#scroll-top').classList.remove('mobile-menu');
            }
          
          }


        function closeMenu(){
            navbar.classList.toggle('mobile-menu');
        }
        
        function signUp(){
            sign-up.document.write(signUpForm);
            
        }


//         var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

        // function displayMenu(){
        //     navbar.style.marginTop = "0"
        // }

        // function hideMenu(){
        //     navbar.style.marginTop = "-900px" 
        // }

        