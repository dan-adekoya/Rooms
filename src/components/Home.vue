<template>
    <div class="bg">

            <div class="slider"></div>
            <div class="slider2">
                <div class="ve">
                <h1>room.</h1>
                </div>  
            </div>
            <!-- NAV -->
            <nav>
                <svg @click="open" class="burger" width="20" height="14"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
                <div class="logo"><img src="../assets/images/logo.svg" alt="" srcset=""></div>
                <ul class="ul">
                    <svg @click="close" class="close" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="shop">shop</router-link></li>
                    <li><router-link to="about">about</router-link></li>
                    <li><router-link to="contact">contact</router-link></li>
                </ul>
            </nav> 
            <div class="container">
                <div class="header">
            
                    <!-- PAGES -->
                    <div class="page1" id="page1">
                        <img class="main" src="../assets/images/desktop-image-hero-1.jpg" alt="" srcset="">
                        <div class="content">
                        <div class="ev">
                            <h1 class="evv">Discover innovative ways to decorate</h1>
                        </div>

                        <div class="ev">
                            <p class="evv">
                            We provide unmatched quality, comfort, and style for property owners across the country. 
                            Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
                            own style with our collection and make your property a reflection of you and what you love.
                            </p>
                        </div>
                        <div class="ev evvv">
                            <button class="evv">SHOP NOW <img src="../assets/images/icon-arrow.svg" alt=""></button>
                        </div>

                        <div class="arrows">
                            <a href="#page3"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page2"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        <div class="arrows2">
                            <a href="#page3"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page2"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        </div>
                    </div>

                    <div class="page1" id="page2">
                        <img class="main" src="../assets/images/desktop-image-hero-2.jpg" alt="" srcset="">
                        <div class="content">
                        <div class="ev">
                            <h1>We are available all across the globe</h1>
                        </div>
                        <div class="ev">
                            <p>
                            With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                            store locator. Any questions? Don't hesitate to contact us today.
                            </p>
                        </div>
                        <div class="ev evvv">
                            <button>SHOP NOW <img src="../assets/images/icon-arrow.svg" alt=""></button>
                        </div>

                        <div class="arrows">
                            <a href="#page1"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page3"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        <div class="arrows2">
                            <a href="#page1"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page3"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        </div>
                    </div>

                    <div class="page1" id="page3">
                        <img class="main" src="../assets/images/desktop-image-hero-3.jpg" alt="" srcset="">
                        <div class="content">
                        <h1>Manufactured with the best materials</h1>
                        <p>
                            Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                            experience in this industry, we understand what customers want for their home and office.
                        </p>
                        <button>SHOP NOW <img src="../assets/images/icon-arrow.svg" alt=""></button>

                        <div class="arrows">
                            <a href="#page2"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page1"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        <div class="arrows2">
                            <a href="#page2"><img src="../assets/images/icon-angle-left.svg" alt=""></a><a href="#page1"><img src="../assets/images/icon-angle-right.svg" alt=""></a>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div> 


    </div>
</template>

<script>
import {gsap} from 'gsap'
    export default {
        data() {
            return {
            }
        },
        methods: {
            open(){
                gsap.to('ul', 1, {
                    y: "0%",
                    ease: "Bounce.easeOut"
                })
                gsap.to('.bg', .2, {
                    background: "black"
                })
                gsap.to('.container', .2, {
                    opacity: .2
                })
            },
            close(){
                gsap.to('ul', 1, {
                    y: "-100%",
                    ease: "expo.out"
                })
                gsap.to('.bg', .2, {
                    background: "white"
                })
                gsap.to('.container', .2, {
                    opacity: 1
                })
            }
        },
        mounted(){
            let tl =  gsap.timeline({defaults: {ease: "expo.out"}})

            tl.from('.slider2 h1', 1, {
                y: '-100%',
                delay: .8
            })
            tl.to('.slider2 h1', 1, {
                y: '-100%',
                delay: .8
            })
            tl.to('.slider', 2, {
                y: '-100%',
                delay: 1
            }, "-=1.9")
            tl.to('.slider2', 2, {
                y: '-100%'
            }, "-=1.7")
            tl.from('.main', 1, {
                y: '100%',
            }, '-=1.4')
            tl.from('.evv', .7, {
                y: "-100%",
            })
            tl.from('.arrows, .arrows2', 1, {
                opacity: 0
            })
        }
    }
</script>

<style scoped>
.slider{
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     background: rgb(112, 112, 112);
     transform: translateY(100%);
     z-index: 10;
}
.slider2{
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     color: white;
     display: grid;
     place-items: center;
     height: 100vh;
     font-size: 40px;
     background: black;
     z-index: 9;
}
.attribution {
     font-size: 11px; text-align: center; 
}
.attribution a {
     color: hsl(228, 45%, 44%);    
}
.header{
     height: 100vh;
     width: 100%;
     position: relative;
     overflow: hidden;
}
/* NAV */
nav{
     width: 90%;
     margin: auto;
     padding: 20px 30px;
     position: absolute;
     top: 20px;
     left: 20px;
     display: flex;
     z-index: 3;
}
nav .logo{
     width: 50px;
}
nav .logo img{
     width: 100%;
}
nav ul{
     display: flex;
     justify-content: space-evenly;
     width: 50%;
     list-style: none;
}
nav ul li a{
     text-decoration: none;
     color: white;
     font-size: 12px;
}
.burger{
     position: fixed;
     visibility: hidden;
     pointer-events: none;
}
.close{
     visibility: hidden;
     pointer-events: none;
     display: none;
}

/* PAGES */

.page1{
     display: grid;
     grid-template-columns: 60% 40%;
     position: relative;
     height: 100%;
     z-index: 0;
     pointer-events: all;
     transition: all 200ms;
     scroll-behavior: smooth;

}
.page1 .main{
     width: 100%;
     height: 100%;
     object-fit: cover;
}

.page1 .content{
     background-color: white;
     padding: 10%;
     display: grid;
     place-items: center;
     position: relative;
}
.page1 .content h1{
     font-size: 30px;;
}
.page1 .content p{
     color: darkgrey;
     font-size: 13px;
}
.page1 .content button{
     background: none;
     border: none;
     padding: 10px;
     letter-spacing: 10px;
     justify-self: start;
     outline: none;
     margin-bottom: 20px;
     font-size: 11px;
     cursor: pointer;
}
.arrows{
     background: black;
     padding: 20px 0;
     display: flex;
     justify-content: space-around;
     position: absolute;
     bottom: 0%;
     left: 0%;
     width: 120px;
}
.arrows2{
     top: 0%;
     right: 0%;
     background: black;
     padding: 20px 0;
     display: flex;
     justify-content: space-around;
     position: absolute;
     width: 120px;
     visibility: hidden;
     pointer-events: none;
}
.arrows img{
     cursor: pointer;
}
.arrows2   img{
     cursor: pointer;
}

/* FOOTER */
.footer{
     display: grid;
     height: 40vh;
     grid-template-columns: 30% 40% 30%;
     width: 100%;
}
.footer img{
     width: 100%;
     object-fit: cover;
     height: 100%;
}
.footer .c{
     background-color: white;
     padding: 10%;
}
.footer h6{
     letter-spacing: 7px;
     margin-bottom: 40px;
}
.footer p{
     color: darkgrey;
     font-size: 13px;
}

.ev, .ve{
     overflow: hidden;
}
.evvv{
     justify-self: start;
}

@media screen and (max-width: 920px){
     .header{
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
     }
     .page1{
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: 50% 50%;
          position: relative;
          height: 100%;
          z-index: 0;
          pointer-events: all;
          transition: all 200ms;
          scroll-behavior: smooth;
     }    
     .page1 .content{
          background-color: white;
          padding: 10px;
          display: grid;
          place-items: center;
          position: relative;
     }
     .page1 .content h1{
          font-size: 18px;
     }
     .arrows{
          display: none;
     }
     .arrows2{
          visibility: visible;
          pointer-events: all;
          transform: translateY(-100%);
     }
     .footer{
          display: grid;
          height: 100vh;
          grid-template-columns: 100%;
          grid-template-rows: 1fr 1fr 1fr;
          width: 100%;
     }
     .footer .c{
          background-color: white;
          padding: 30px;
     }
     .container.open{
          opacity: .3;
     }
     nav{
          width: 100%;
          padding: 20px 0;
          top: 0px;
          left: 0px;
          display: flex;
          z-index: 3;
     }
     nav .logo{
          width: 50px;
          margin: auto;
     }
     nav ul{
          display: flex;
          top: 0;
          left: 0;
          background: white;
          padding: 20px;
          position: absolute;
          justify-content: space-evenly;
          width: 100%;
          list-style: none;
          transform: translateY(-100%);
          z-index: 10;
     }
     /* nav ul.open{
          visibility: visible;
          transform: translateY(0%);
          pointer-events: all;
     } */
     body.open{
          overflow: hidden;
     }
     nav ul li a{
          text-decoration: none;
          color: black;
          font-size: 11px;
     }
     .burger{
          position: absolute;
          left: 30px     ;
          visibility: visible;
          cursor: pointer;
          pointer-events: all;
     }
     .close{
          visibility: visible;
          display: block;
          pointer-events: all;
          cursor: pointer;
     }
}

</style>