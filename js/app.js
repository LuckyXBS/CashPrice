const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");
	const openBtn = document.querySelector(".login-user");
	
	openBtn.addEventListener("click", () => {
      popupScreen.classList.add("active");
    });
	
	closeBtn.addEventListener("click", () => {
      popupScreen.classList.remove("active");
    });
	
const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
			 document.title = 'Cash Price - загрузка'
             loader.style.opacity = "0";
             setTimeout(function(){
               loader.style.display = "none";
			   document.title = 'Cash Price'
             }, 500);
           },1000);
         }