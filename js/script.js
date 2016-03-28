var enterBtn = document.querySelector(".main-header__enter"),
	enterForm = document.querySelector(".enter-form"),
	overlay = document.querySelector(".overlay"),
	exit = document.querySelector(".enter-form__exit"),
	login = enterForm.querySelector(".enter-form__login"),
	password = enterForm.querySelector(".enter-form__password"),
	storagedLogin = localStorage.getItem("login"),
	checkbox = document.querySelector("#enter-form__remember"),
	prev = document.querySelector(".js-prev"),
	next = document.querySelector(".js-next");

function close(){
		enterForm.classList.remove("enter-form--enabled");
		overlay.classList.remove("overlay--enabled");
		enterForm.classList.remove("enter-form--disabled");
	}
function delClass(){
		enterForm.classList.remove("enter-form--validate");
	}

enterBtn.addEventListener("click",function(e){
	enterForm.classList.toggle("enter-form--enabled");
	overlay.classList.toggle("overlay--enabled");
	if(storagedLogin){
		login.value = storagedLogin;
		password.focus();
	}
	else{
		login.focus();
	}
})

window.addEventListener("keydown",function(e){
	if(e.keyCode===27){
		enterForm.classList.add("enter-form--disabled");
		setTimeout(close , 900);
	}
})

enterForm.addEventListener("submit", function(e){
	if(!login.value || !password.value){
		e.preventDefault();
		enterForm.classList.add("enter-form--validate");
		setTimeout(delClass , 600);
		console.log("it' alive!");
	}
	else{
		if(checkbox.checked){
			localStorage.setItem("login", login.value);
			localStorage.setItem("password", password.value);
			
		}
		
	}
	
})

overlay.addEventListener("click",function(e){
	enterForm.classList.add("enter-form--disabled");
	setTimeout(close , 1000);
	if (checkbox.cheked){
		console.log("it's alive");
	}
	
})

exit.addEventListener("click",function(e){
	enterForm.classList.add("enter-form--disabled");
	setTimeout(close , 900);
})

// SLIDER

prev.addEventListener("click", function(e){
	var activeSlide = document.querySelector(".index-block__gallery-enabled");
	e.preventDefault();
	activeSlide.previousElementSibling.classList.add("index-block__gallery-enabled");
	activeSlide.previousElementSibling.classList.remove("index-block__gallery-disabled");
	activeSlide.classList.remove("index-block__gallery-enabled");
	
})

next.addEventListener("click", function(e){
	var activeSlide = document.querySelector(".index-block__gallery-enabled");
	e.preventDefault();
	activeSlide.nextElementSibling.classList.add("index-block__gallery-enabled");
	activeSlide.nextElementSibling.classList.remove("index-block__gallery-disabled");
	activeSlide.classList.remove("index-block__gallery-enabled");
	activeSlide.classList.add("index-block__gallery-disabled"); 

})
