buildNavbar();
goUpBtn();

//----------------------------Active state navbar------------------------------
    //---------------------and scroll-to-the-top Button on/off-----------------


window.addEventListener('scroll', function() {

//--------------Scroll-to-the-top button on/off the screen---------------------
      const screenHeight = window.screen.height - 200;
      const scrollY = window.scrollY;

      if (scrollY > screenHeight) {

        document.getElementById('go-up').classList.remove('scroll-up');
      } else {
        document.getElementById('go-up').classList.add('scroll-up');
      };
//-----------------Scroll-to-the-top button on/off the screen END--------------

//----------------Active sections linked to the SCROLL event-------------------

      /*Get nb of sections*/
      let sectionElementTag = document.getElementsByTagName('section');
          /*Loop over nb of sections*/
        for (let i = 0; sectionElementTag.length >= i+1; i++) {

          /*Get every single element with id "section"+number*/
        const section = document.querySelector(`#section${i}`);
          /*Get every "section" position from the top of the document*/
        const sectionPositionTop = section.offsetTop - 100;
          /*Get every "section" element height*/
        const sectionHeight = section.offsetHeight;
          /*Get the value of the scroll position*/
        const scrollY = window.scrollY;

          /*Adding the offsetTop position value to the height of the given
          section elements, we know the range of values where the section
          is being placed*/
        const sectionPosition = sectionPositionTop + sectionHeight;
          /*Get every single element from the navigation bar*/
        let liElement = document.getElementsByTagName('li')[i];

          /*Condition: if the user scrolling position value is larger than
          the offsetTop  value of a section AND at the same time smaller
          from a section position value...*/
        if(scrollY >= sectionPositionTop && scrollY < sectionPosition){
            /*Get every single "li" element and give it a class to
            indicate the user is scrolling over a given section*/
          document.getElementsByTagName('li')[i].classList.add('active-state');
        } else {
            /*If the condition is not fulfilled, the styling gets removed*/
            document.getElementsByTagName('li')[i].classList.remove('active-state');
        }
      }
});

scrollToSection();

// -----------------------------Functions ------------------------------------

    //----------------------Go-to-the-top Button CLICK event------------------

function goUpBtn() {

  document.getElementById('go-up').addEventListener('click', function(){

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  });
};

  //--------------------------Scroll to section-------------------------------

function scrollToSection() {

  const sections = document.getElementsByTagName('section');
  const liEl = document.getElementsByTagName('li');

  for (let i = 0; i < liEl.length; i++) {

    let positionY = sections[i].offsetTop;
    let positionX = 0;

    liEl[i].addEventListener('click', function (){

      window.scrollTo({
         left: positionX,
         top: positionY,
         behavior: 'smooth'
       });
    });
  };
};

  //---------------Dynamic navigation bar content building---------------------

function buildNavbar() {

    //Get all "section" tag elements
  const sectionElementTag = document.getElementsByTagName('section');
    //Parent element of section
  const parentNavList = document.getElementById('nav-list');

  for (let i = 0; sectionElementTag.length > i ; i++) {

      //reate a new "li" element
    const createLink = document.createElement('li');
      //Add a new "li" element to the navigation bar
    const inNavBar = parentNavList.appendChild(createLink);
      //Get every single "section" element by ID name...
    let getSection = document.getElementById(`section${i}`);
      //...and get its h2 text, that is to be used as navigation bar link text
    let sectionH2 = getSection.querySelector('h2').innerText;
      //Get every single "li" element
    let getLi = document.getElementsByTagName('li')[i];
      /*Assign innerHTML for every single "li" element in according
      to the corresponding section*/
    getLi.innerHTML = `<span>${sectionH2}</span>`;
  }
};
