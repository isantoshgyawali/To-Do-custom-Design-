// Code to Open the  hidden Req box ):

var add = document.getElementsByClassName('add-li')[0];
const req = document.getElementsByClassName('req')[0];

function open() {

  req.style.display = 'block';
  document.querySelector('.box section').style.filter='blur(3px) opacity(.8)';


}
add.addEventListener('click', open);

// ---------------------------------------------------------------------

// Code to close the Req box (:

var cl = document.getElementsByClassName('close-li')[0];

function close() {

  req.style.display = 'none';
  document.querySelector('.box section').style.filter='none';

}
cl.addEventListener('click', close);

// ---------------------------------------------------------------------

// Alert for the reset :}

var reset = document.getElementsByClassName('reset')[0];
var val = document.querySelectorAll('.req-val');

reset.onclick = () => {

  let r = confirm("Do you want to clear all data ?");

  if (r == true) {

    document.getElementsByTagName('form')[0].reset();

  }

}

//-------------------------------------------------------------------

// Function for Adding the Data to the table :)
var ad = document.getElementsByClassName('ad')[0];
let i=1;

ad.onclick = () => {


  let a = document.querySelector('.todo').value;
  let b = document.querySelector('.time').value;
  let c = document.querySelector('.des').value;
  let list = document.getElementById('table');

    // check the empty  Input fields !!

    if ( val[0].value == ''  ||  val[1].value=='' )

    {
    
    alert('Enter the data to the box  to continue :)');
    
    }
  
    else {   
    
      var row = list.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
    
      cell2.innerHTML = a;
      cell1.innerHTML = i + '.';
      cell3.innerHTML = b;
      cell4.innerHTML = c;
      
      req.style.display = 'none';
      
      while (ad.click){
    
        i++;
        break;
        
        }

        document.querySelector('.box section').style.filter='none';

    }

    document.getElementsByTagName('form')[0].reset();

};

// ------------------------------------------------------------------

// scrollable table 

var over =document.getElementById('over');
var tHeight = table.offsetHeight;

if (tHeight= 305){

over.style.overflowY='scroll';
// scro.style.width='6px';

}

// -------------------------------------------------------------------

// Animation over the click on the menu -btn

var menuBtn = document.querySelector('.menu-nav a');
var menu = document.querySelector('.menu');

menuBtn.onclick=()=>{

menu.style.transform='translateX(0rem)';
menu.style.transition = '1s cubic-bezier(.3,2,0.5,.1)';
document.querySelector('body').style.transitionDelay = '.1s';

document.querySelector('.box section').style.filter='blur(3px) opacity(.9)';

}
menuBtn.onblur = () =>{

menu.style.transform ="translateX(-25rem)";
menu.style.transition = '1s cubic-bezier(1,0,1,8)';
document.querySelector('body').style.transitionDelay = '.3s';

document.querySelector('.box section').style.filter='none';


}
