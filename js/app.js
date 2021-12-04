let ulList=document.querySelector('#navbar__list');
let activeSection=document.querySelectorAll('section');

window.addEventListener('scroll',hihi);

function hihi() {
    let uu;
    activeSection.forEach(element => {
        if(element.classList.contains('country-active-class')){
           element.classList.remove("country-active-class");
        }
        const rr=element.getBoundingClientRect();
        if (rr.top <200 &&rr.bottom >200) {
            uu=element;
            uu.classList.add("country-active-class")
        }
        
    });
}

// call to the function 
coundAndPopulateLiElements();

/********* 
// function to create smooth scroll when link is clicked
**************/
function SmothScroll() {
    let linkItem = 'a[href^="#"]';
    let allLinks =document.querySelectorAll(linkItem);
    allLinks.forEach(link => {
        link.onclick = function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

/********* 
// function to create li elements in navbar depending on
// the number of sections in the html
**************/
function coundAndPopulateLiElements(){
    
    for (const iterator of activeSection) {
        const newLi= document.createElement('li');
        const newA=document.createElement('a');
        newA.textContent=iterator.querySelector('h2').innerText;
        newA.href='#'+iterator.querySelector('h2').innerText;
        newA.classList.toggle('menu__link')
        newLi.appendChild(newA);
        ulList.appendChild(newLi);
    }
    SmothScroll();
}

/********* 
// function to add country
************/
function addNewCountry(){
    const mainbody=document.querySelector('main');
    let head = window.prompt("Please enter your country name");
    let body = window.prompt("enter the country description")
    if (head != null && body != null) {
        const countrySection= document.createElement('section');
        const countryDiv=document.createElement('div');
        const countryH2 =document.createElement('h2');
        const countryP =document.createElement('p');
        countrySection.id=head;
        countrySection.dataset.nav=head;
        countryDiv.classList.toggle('landing__container');
        countryH2.textContent=head;
        countryP.textContent=body;
        countryDiv.appendChild(countryH2);
        countryDiv.appendChild(countryP);
        countrySection.appendChild(countryDiv);
        mainbody.appendChild(countrySection);
        const newLi= document.createElement('li');
        const newA=document.createElement('a');
        newA.textContent=head;
        newA.href='#'+head;
        newA.classList.toggle('menu__link')
        newLi.appendChild(newA);
        ulList.appendChild(newLi);
    }
    activeSection=document.querySelectorAll('section');
    SmothScroll();
}
