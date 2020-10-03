//Showing nav
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 900) {
	if (viewportWidth < 900) {
		let navBtn = document.querySelector(".nav-mobile-btn");
        navBtn.addEventListener("click", showNav);

        let closeBtn = document.querySelector(".fa-times");
        closeBtn.addEventListener("click", hideNav);

        function showNav(){
            document.querySelector(".nav").setAttribute("style", "right: 0; transform: scale(1); border-radius: 0;");
            document.querySelector(".nav-mobile-container").style.display="none";
        }

        function hideNav(){
            document.querySelector(".nav").setAttribute("style", "right: -3000px; transform: scale(0); border-radius: 1000px;");
            document.querySelector(".nav-mobile-container").style.display="block";
        }

        let navLinks = document.getElementsByClassName("link");
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].addEventListener("click", hideNav, false);
        }
        
	}
} else {
	console.log('Wide viewport');
}


window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 900) {
		let navBtn = document.querySelector(".nav-mobile-btn");
        navBtn.addEventListener("click", showNav);

        let closeBtn = document.querySelector(".fa-times");
        closeBtn.addEventListener("click", hideNav);

        function showNav(){
            document.querySelector(".nav").setAttribute("style", "right: 0; transform: scale(1); border-radius: 0;");
            document.querySelector(".nav-mobile-container").style.display="none";
        }

        function hideNav(){
            document.querySelector(".nav").setAttribute("style", "right: -3000px; transform: scale(0); border-radius: 1000px;");
            document.querySelector(".nav-mobile-container").style.display="block";
        }

        let navLinks = document.getElementsByClassName(".link");
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].addEventListener("click", hideNav, false);
        }
        
	} else {
		console.log('Wide viewport');
	}
}, false);

/*
let navBtn = document.querySelector(".nav-mobile-btn");
navBtn.addEventListener("click", showNav);

let closeBtn = document.querySelector(".fa-times");
closeBtn.addEventListener("click", hideNav);

function showNav(){
    document.querySelector(".nav").setAttribute("style", "right: 0; transform: scale(1); border-radius: 0;");
    document.querySelector(".nav-mobile-container").style.display="none";
}

function hideNav(){
    document.querySelector(".nav").setAttribute("style", "right: -3000px; transform: scale(0); border-radius: 1000px;");
    document.querySelector(".nav-mobile-container").style.display="block";
}*/


let openPrj = document.querySelector(".item");
openPrj.addEventListener("click", openProject);

let closePrj = document.querySelector(".close");
closePrj.addEventListener("click", closeProject);

function openProject(){
    document.querySelector(".exact-project").style.display = "block";
}

function closeProject(){
    document.querySelector(".exact-project").style.display = "none";
}

(function(){


    let section = document.querySelectorAll(".page");
    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function(e){
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function(){
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for(i in sections){
            if(sections[i] <= scrollPosition){
                document.querySelector('.active').setAttribute('class', 'link');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
})();