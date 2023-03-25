// On click Function for the Contacts 

var cont = document.getElementsByClassName('con')[0];
var con = document.querySelector('.Contacts a');

    con.addEventListener ("click", () => {
    
        cont.style.display = 'inherit';
    
    });

    con.onblur=()=>{

        cont.style.display='none';
            
        }

// -------------------------------------------------------------------

        // Animations for the Blog 

var blog = document.getElementsByClassName('Blogs')[0];

    setInterval(() => {
        blog.classList.add('shine');
        
    },5000);

    setInterval(() => {

    blog.classList.remove('shine');

},14000);

// ---------------------------------------------------------------------

// Animations for the Menu Button

var btn = document.querySelector('input[type=checkbox]');
var menu = document.getElementsByClassName('menu')[0];
var img = document.querySelector('img');

btn.addEventListener("click", click);

function click() {


    if (btn.checked == true) {

        menu.style.transform = 'translateX(0rem)';
        document.querySelector('body').style.background = 'rgba(73, 72, 72, 0.200)';
        document.querySelector('body').style.transitionDelay = '.1s';
        menu.style.transition = '1s cubic-bezier(.3,2,0.5,.1)';

    }

    else {

        menu.style.transform = 'translateX(-20rem)';
        document.querySelector('body').style.background = 'inherit';
        document.querySelector('body').style.transitionDelay = '.3s';
        menu.style.transition = '1s cubic-bezier(1,0,1,8)';

    }
}


// -------------------------------------------------------------------------------------------

var box = document.getElementsByClassName('src-box')[0];
var icon = document.getElementsByClassName('nav-src')[0];
var label = document.querySelector('label');

const search = () => {

    let toggle = false;

    document.getElementsByClassName('src-box')[0].style.display = 'block';
    document.getElementsByClassName('src-box')[0].style.width = '37rem';
    document.getElementsByClassName('src-box')[0].style.right = '1rem';
    document.getElementsByClassName('src-box')[0].style.pointerEvents = 'auto';
    document.getElementsByClassName('src-box')[0].style.opacity = '1';
    document.getElementsByClassName('navbar')[0].style.transition = '.2s';
    icon.classList.toggle('name');
    box.classList.toggle('open')
    label.style.display = 'none';
    menu.style.display = 'none';
    document.querySelector('.left').style.display = 'inline-block';

}
icon.addEventListener("click", search);


var left = document.getElementsByClassName('left')[0];

const on = () => {

    document.getElementsByClassName('src-box')[0].style.display = 'none';
    document.getElementsByClassName('src-box')[0].style.pointerEvents = 'none';
    document.getElementsByClassName('src-box')[0].style.opacity = '0';
    icon.classList.remove('name');
    box.classList.remove('open');
    label.style.display = 'flex';
    menu.style.display = 'inline-block';
    document.querySelector('.left').style.display = 'none';

}

left.addEventListener('click', on);
