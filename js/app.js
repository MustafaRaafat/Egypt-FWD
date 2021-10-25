

let ulList=document.querySelector('#navbar__list');
let activeSection=document.querySelectorAll('section');

// let inScroll = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
//   }
//   observecountry();
  
//   function observecountry(){
//       let observer = new IntersectionObserver(callback, inScroll);
//       activeSection.forEach( (element)=>{
//       observer.observe(element);
//   });
//   }
  
  
//   function callback(ennn,oppp){
//       ennn.forEach(entry => {
//           if (entry.isIntersecting) {
//               const liList=document.querySelectorAll('li');
//               activeSection.forEach((element)=>{
//                   if(element.classList.contains('country-active-class')){
//                       element.classList.remove("country-active-class");
//                   }
//               });
//               liList.forEach(element => {
//                 if(element.classList.contains('country-active-class')){
//                     element.classList.remove("country-active-class");
//                 }
//               });
//               entry.target.classList.add('country-active-class');
//             //   for (const iterator of liList) {
//             //       if (entry.target.id==iterator.id) {
//             //           iterator.classList.add('country-active-class')
//             //       }
//             //   }
//             }
//       })
//   }


//   let callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if () {
            
//         }
//       // Each entry describes an intersection change for one observed
//       // target element:
//       //   entry.boundingClientRect
//       //   entry.intersectionRatio
//       //   entry.intersectionRect
//       //   entry.isIntersecting
//       //   entry.rootBounds
//       //   entry.target
//       //   entry.time
//     });
// //   };


//   let target = document.querySelector('#listItem');
// observer.observe(target);

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
// function aaaa(){
//     let arrayforsections=[];
//     activeSection.forEach(element => {
        
//         const rrr=element.getBoundingClientRect();
//         if (rrr.top>0) {
//             arrayforsections.push(element);
//         }
        
//     });
//     alert(arrayforsections[0].textContent);
// }

// window.addEventListener('scroll',aaaa);




// call to the function 
coundAndPopulateLiElements();





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
    // coundAndPopulateLiElements();
    observecountry();
}



