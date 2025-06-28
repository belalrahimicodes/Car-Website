const logo = document.getElementById("logo");
// Reloads the page when the logo is clicked
logo.addEventListener("click", () =>{
    location.reload();
});

const scrollBtn = document.getElementById("scroll-btn");
// Displays the button when 50px is scrolled down from the top of the page
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
// Scrolls to the top of the page smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const form = document.querySelector("form");
  // Checks for validity of the form
  form.addEventListener('submit', event =>{
    if(!form.checkValidity()){
      event.preventDefault(); 
    }
    form.classList.add('was-validated');
  });

const carImage = document.querySelector(".car");
const navbarBottomItem = document.querySelectorAll(".navbarBottomItem");

// Slide through the images when the navbar bottoms are clicked
navbarBottomItem.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        carImage.style.transform = `translateX(${-100 * index}vw)`;
    });
});

const cars = [
    {
      id: 1,
      name: "Lamborghini",
      description: "Only 1 Million CHF for a brand new Lambo",
      img: "./assets/lambo.jpg",
    },
    {
      id: 2,
      name: "Bugatti",
      description: "Only 2 Million CHF for a brand new Bugatti",
      img: "./assets/bugatti.jpg",
    },
    {
      id: 3,
      name: "McLaren",
      description: "Only 5 Million CHF for a brand new McLaren",
      img: "./assets/mclaren.jpg",
    },
    {
      id: 4,
      name: "Porsche",
      description: "Only 3 Million CHF for a brand new Porsche",
      img: "./assets/porsche.jpeg",
    },
  ];

  let selectedCar = cars[0];

  const selectedImage = document.querySelector(".carImg");
  const selectedCarName = document.querySelector(".carName");
  const selectedDescription = document.querySelector(".carDescription");
  const chooseCar= document.querySelectorAll(".carItem");
  
  // Changing the food details when a food type is selected
  chooseCar.forEach((item, index) =>{
    item.addEventListener("click", () =>{
      selectedCar = cars[index]; 
      selectedCarName.textContent = selectedCar.name;
      selectedImage.src = selectedCar.img;
      selectedDescription.textContent = selectedCar.description;
    });
  });

// Adds the current year to the span tag in the footer
const yearFooter = document.getElementById("year-footer"); 
yearFooter.textContent = new Date().getFullYear();

/* AI-powered chatbot (GPT-4o Mini): assist user with cars in
general and our 4 car brands*/
(function(){if(!window.chatbase||window.chatbase("getState")
  !=="initialized"){window.chatbase=(...arguments)=>
  {if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};
  window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q")
  {return target.q}return(...args)=>target(prop,...args)}})}
  const onLoad=function(){const script=document.createElement("script");
  script.src="https://www.chatbase.co/embed.min.js";script.id="VoR15J0EBHL7ZW3yBuKEJ";
  script.domain="www.chatbase.co";document.body.appendChild(script)};
  if(document.readyState==="complete")
  {onLoad()}else{window.addEventListener("load",onLoad)}})();


