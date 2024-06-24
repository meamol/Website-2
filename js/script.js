
// https://github.com/locomotivemtl/locomotive-scroll

//const scroll = new LocomotiveScroll({
 //   el: document.querySelector('[data-scroll-container]'),
    // smooth: true
// });


/*===============================================
	General styles 
	https://www.youtube.com/@thesheryianscodingschool/videos
	https://www.youtube.com/watch?v=LSBnwokA5Fc
	https://www.youtube.com/watch?v=3zF06-yiEJU
	https://www.youtube.com/watch?v=ZdJSHEczi_0 ----
	<!-- locomotive js cdn :- https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/ 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script> -->
	icon - https://remixicon.com/
===============================================*/



const menuBtn = document.querySelector('.menu_button');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
	navlinks.classList.toggle('mobile_menu')
})