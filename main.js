import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints.min'


let options = {
    strings: ['Food... ', 'Drink... '],
    typeSpeed: 30,
    backDelay:3000,
    backSpeed:100,
    loop:true
};

let typed = new Typed('.element', options);

let toDown = {
    distance: '50px',
    origin: 'top',
    interval:400,
    duration:900,
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval:400,
    duration:900,
};

ScrollReveal().reveal('.to-right', toRight);


let toLeft = {
    distance: '50px',
    origin: 'right',
    interval:400,
    duration:900,
};

ScrollReveal().reveal('.to-left', toLeft);


new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink = document.querySelector('.nav-link.active');
        console.log(oldNavLink);
        if (oldNavLink != null){
            oldNavLink.classList.remove('active');
        }
        let currentNavLink = document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add('active');
    },
    offset: '10%'
})

let sections = ['about','services','menus'];

sections.forEach(function (section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector('.nav-link.active');
            console.log(oldNavLink);
            if (oldNavLink != null){
                oldNavLink.classList.remove('active');
            }
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add('active');
        },
        offset: '50%'
    })
})

new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavLink = document.querySelector('.nav-link.active');
        console.log(oldNavLink);
        if (oldNavLink != null){
            oldNavLink.classList.remove('active');
        }
        let currentNavLink = document.querySelector(`[href="#contact"]`);
        currentNavLink.classList.add('active');
    },
    offset: '80%'
})

let menuLists = [
    {
        id : 1,
        image : "public/image/plate1.png",
        title : "Barbecue Salad",
        description : "Special Delicious Dish",
        price : 22.5,
        currency : "$"
    },
    {
        id : 2,
        image : "public/image/plate2.png",
        title : "Salad with fish",
        description : "Special Delicious Dish",
        price : 31.8,
        currency : "$"
    },
    {
        id : 3,
        image : "public/image/plate3.png",
        title : "Spinach Salad",
        description : "Special Delicious Dish",
        price : 37.5,
        currency : "$"
    },
]

let menuRow =document.getElementById("menuRow");

menuLists.forEach(function (menuList){
    let div = document.createElement("div");
    div.classList.add("col-8","col-md-4","col-lg-2");
    div.innerHTML = `
        <div class="card plate-card mb-5">
          <img src="${menuList.image}" alt="" class="w-75 mx-auto my-4 d-block plate-img">
          <div class="card-body ">
            <p class="fw-bold my-3">${menuList.title}</p>
            <p class="text-black-50 small">${menuList.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="">${menuList.price} ${menuList.currency}</p>
              <button class="btn btn-primary"> <i class="bi bi-cart-plus"></i></button>
            </div>
          </div>
        </div>

    `;
    menuRow.append(div);
})