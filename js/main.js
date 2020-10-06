/*
let _projectDetails = [];

async function getProjectDetails(){
    let data = await fetch(`http://wojciechdzwonczyk.com/wordpress/wp-json/wp/v2/posts?_embed&categories=5`).then(response => response.json());

    console.log(data);
    _projectDetails = data;

    appendProjectDetails(_projectDetails);
}

getProjectDetails();

function appendProjectDetails(projects){
    let htmlTemplate = "";

    for (const project of projects) {
        htmlTemplate += `
        <section class="exact-project">
            <div class="exact-project-container">
                <div class="project-main-content">
                    <i class="close fas fa-times"></i>
                    <a href="#start" class="scroll-up-btn"><i class="fas fa-angle-up"></i></a>
                    <div class="project-visualisation" id="start">
                        <img src="img/throw-me-right-mockup.png" alt="project">
                    </div>
                    <div class="project-info">
                        <h3>${project.title.rendered}</h3>
                        <p class="type">${project.content.rendered}</p>
                        <div class="project-details">
                            <span class="project-details-item">
                                <i class="fas fa-user"></i>
                                ${project.acf.role}
                            </span>
                            <span class="project-details-item">
                                <i class="fas fa-tools"></i>
                                ${project.acf.tools}
                            </span>
                            <span class="project-details-item">
                                <i class="fas fa-link"></i>
                                <a href="${project.acf.link-to-production}" target="_blank"><p>Explore the prototype</p></a>
                            </span>
                        </div>
                        <div class="devices">Solution prepared for: ${project.acf.devices}</div>
                        <h4>Problem</h4>
                        <p class="project-text">${project.acf.problem-text}
                        </p>
                    </div>
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.sketches-name}</h4>
                    <p class="project-text">${project.acf.sketches-text}
                    </p>
                    <img src="img/sketch1.jpeg" class="sketch" alt="sketches">
                    <img src="img/sketch2.jpeg" class="sketch" alt="sketches">
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.wireframes-name}</h4>
                    <p class="project-text">${project.acf.wireframes-text}
                    </p>
                    <img src="img/wireframes.jpg" class="sketch" alt="sketches">
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.style-tile-name}</h4>
                    <p class="project-text">${project.acf.style-tile-text}
                    </p>
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.mockups-name}</h4>
                    <p class="project-text">${project.acf.mockups-text}                        
                    </p>
                    <img src="img/mockups.jpg" class="sketch" alt="mockup1"> 
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.final-product-name}</h4>
                    <p class="project-text">${project.acf.final-product-text}
                    </p>
                    <img src="img/throw-me-right-mockup.png" class="final-product" alt="Final product1">
                    <img src="img/throw-me-right-final2.png" class="final-product" alt="Final product2">
                    <img src="img/throw-me-right-final3.png" class="final-product" alt="Final product3">
                </div>
                <div class="project-process-content">
                    <h4>${project.acf.code-name}</h4>
                    <p class="project-text">${project.acf.code-text}
                    </p>
                </div>
                
            </div>
            </div>
        </section>
        `;
    }
    document.querySelector("#content").innerHTML += htmlTemplate;
}*/

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
            document.querySelector(".nav-mobile-container").style.display="flex";
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
            document.querySelector(".nav-mobile-container").style.display="flex";
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

/*
let openPrj = document.querySelector(".item");
openPrj.addEventListener("click", openProject);*/

let openTrmPrj = document.getElementById("tmr-project");
openTrmPrj.addEventListener("click", openTrmProject);

let openSalvatioPrj = document.getElementById("salvatio-project");
openSalvatioPrj.addEventListener("click", openSalvatioProject);

let openScPrj = document.getElementById("sc-project");
openScPrj.addEventListener("click", openScProject);


function openTrmProject(){
    document.getElementById("tmr").style.display = "block";
}

function openSalvatioProject(){
    document.getElementById("salvatio").style.display = "block";
}

function openScProject(){
    document.getElementById("sc").style.display = "block";
}

let closeTmrPrj = document.querySelector(".close1");
closeTmrPrj.addEventListener("click", closeTmrProject, false);

let closeSalvatioPrj = document.querySelector(".close3");
closeSalvatioPrj.addEventListener("click", closeSalvatioProject, false);

let closeScPrj = document.querySelector(".close2");
closeScPrj.addEventListener("click", closeScProject, false);

/*
let closePrj = document.getElementsByClassName("close");
console.log(closePrj);
for(let i = 0; i < closePrj.length; i++){
    closePrj[i].addEventListener("click", closeProject, false);
}
*/
/*
function openProject(){
    document.querySelector(".exact-project").style.display = "block";
}*/

function closeTmrProject(){
    console.log("clicked");
    document.getElementById("tmr").style.display = "none";
}

function closeSalvatioProject(){
    console.log("clicked");
    document.getElementById("salvatio").style.display = "none";
}

function closeScProject(){
    console.log("clicked");
    document.getElementById("sc").style.display = "none";
}

//Scroll-top
/*
document.querySelector(".exact-project-container").onscroll = function () {
    scrollUp()
  };

function scrollUp(){
    if(document.querySelector(".exact-project-container").scrollTop > 500){
        document.querySelector(".scroll-up-btn").style.display = "flex";
    }   else {
        document.querySelector(".scroll-up-btn").style.display = "none";
    }
}
*/
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