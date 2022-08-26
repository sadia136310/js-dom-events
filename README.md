# js-dom-events
1. What is DOM?
ans:The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page
























                              JAVASCRIPT + HTML + CSS
                              DOM MANUPULATION
1.JavaScript is a High Level, Interpreted Language.
2.To connect JS with html , 
For Internal script use script tag after all the body element
Ex- 	<script>	…………..</script>
For Externam script use it on same position and in scr give the JS file link. 	Ex.	<script src=”JavaScript.js”>…………..</script>

From Html we can get elemets with 5 meathods
getElementsByTagName , getElementsbyClassName , getElementById
querySelectorAll , quarySelector

JavaScript use kore html theke ekoi tag name er sokon upadanke ekta array like object er maje anar jonno  document.getElementsbyTagName(“tag_name”);	use kora hoye thake.
Ex.	let licollection=document.getElementsByTagName(‘li’);
	for(let li of licollection){	     console.log(li);	console.log(li.innerText);  }
	cl.li use er maddome je array like object amora paisi tar upadan show korbe
	cl.li.innerText use er maddome li er modder text ke show korbe

To get class in js we can use  document.getElementsByClassName(“class_name”)
Ex.	const places = document.getElementsByClassName(“place”);
	for(let place of places){	   console.log(“place”):	console.log(place.innerText”);  }	


To get ID in js we can use  document.getElementById(“id_name”);
Ex.	const fruit_title = document.getElementById(“fruits_title”);
	console.log(fruits_title);		console.log(fruits_title.innerText”);
	fruits_title.innerText=”This title is changer by JavaScript”;
      Eivabe amra id r maje ja leka ase ta change korte pari by using innerText
Someimes we need to use selector by css style . For this we should use (.) before class name and (#) before id name.
document.querySelectorAll(.class-name……)	
Ex.	const someLi = document.querySelectorAll('.fruits-container li');   container er bitorer id select
        	console.log(someLi);
        	for (let li of someLi) {    console.log(li);	      console.log(li.innerText);  }	
document.querySelector(.class-name……..)
Ex.	const someLi = document.querySelector('.fruits-container li');	
        	console.log(someLi);	  console.log(someLi.innerText);
      It’s only take the first element of the inside li of the class

HTMLCollection  vs NodeList	
Similarity 🡪		i.   Both are array like collection of elements, But not array
ii.  Both have a length property that returns the number of    elements .     in the list
Difference 🡪
getElementsByClassName() / getElementsByTagName	🡪  HTMLCollection
getQuerySelectorAll()	🡪    NodeList

           HtmlCollection			       NodeList
 Live collection					Static collection
 for of						forEach, for of
Accessed their  name/id/index number		Accessed only index number
HTMLCollection.length				NodeList.length
Support 2 meathods				Support 5 meathod
      HTMLCollection.item()			      NodeList.item()
      HTMLCollection.nameditem()	    	      Nodelist.forEach()
      NodeList.entries()
      Nodelist.keys()
      Nodelist.values()
The childNodes property returns a live NodeList.

Kunu kichur index er item janar jonno	🡪	last e   [‘index_number’]  use kore check
getAttribute()	🡪	er maddome amra getElementById/getElementsByClassName er dara 
songrihito class/id r upor kaj korte pari. Only id r upor kaj kore
	document.getElementById(“fruits-name”).getAttribute(“class”)	     
	const title=document.getElementById(“fruits-title”)		     Both are same, Id er sob 
	title.getAttribute(“class”)					     class deka jay
For Show Class   🡺	classList  works on only  getElementbyId
	title.classList			title er sob class list akare ase
	title.classList[‘2’]		classlist er only 2nd index show korbe
	title.classList.remove(‘mahi’)	mahi jodi class e take tahole eke class theke remove kore thake
	title.classList.add(‘miku’)	miku ke classlist e add kore thake
removeAttribute	🡪	document.getElementsById(‘mahi’).removeattribute(‘disabled’);
tag/id theke kunu attribute like title,disabled,placeholder.. remove
setAttribute	🡪	document.getElementsById(‘mahi’).setattribute(‘disabled’,ture);
       ekekte attribute ses korar somoy sathe true dite hoy.
const title=document.getElementById(“fruits-title”)
title.setAttribute(‘title’,’this is a tooltip maked by js’)
innerHtml		🡪	document.getElementById(“fruits-title”).innerHtml
innerText		🡪	document.getElementById(“fruits-title”).innerText
value		🡪	innertext er moto input tag er likha nite hole value use kora lage
document.getElementsBytagName(‘input’)[0].value;
Html change by js	🡪	document.getElementById(“fruits-title”).innerHtml=”<h1>mahi</h1>”
Css in JS	🡪	document.getElementById(“fruits-title”).style	   ei id er sob style dekhabe

CSS e amra style korar somoy style er nam jodi ekadik word e takto tahole tader majkhane (-) ekta diye prithok takto . kintu js e eisob word camelCase e thake . 
Such as:  border-radius 🡪 borderRadius ,      background-color 🡪 backgroundColor
Some exapme:
document.getElementById(“fruits-title”).style.backgroundColor=”indianred”;
document.getElementById(“fruits-title”).style.color=”black”;
document.getElementById(“fruits-title”).style.border=”20px solid black”;
document.getElementById(“fruits-title”).style.borderRadius=”20px”;
document.getElementById(“fruits-title”).style.display=”flex”;
document.getElementById(“fruits-title”).style.justifyContent=”center”;
document.getElementById(“fruits-title”).style.alignItems=”center”;

     innerText,innerHtml,getAttribute, setAttribute, style,ei sobkichu particular ekta jinis er jonno kaj kore thake tai amora jokhon getElementById, querySelector use kori tokon sohojei eigula use kora jay . Baki ketre arki getElementsByClassName, querySelectorAll, getElementsByTagName er ketre index number/ for loop chaliye eder mode javascript use kora hoy

childNode	    🡺	
.childNodes	🡪	ei id/class er bitorer sob node show kore
.childNodes[n]	🡪	nth childNode show kore thake
nextSibling	🡪	ei childnode er porer sibling ke show kore
previousSibling	🡪	ei childNode er ager sibling ke show kore

parentNode	    🡺		ei id/class je parent er maje thake take shoe kore dey. Maximum highest
parentNode document
	EX.	let child = document.getElementById('places-container');
console.log(child.childNodes);    console.log(child.childNodes[3].childNodes[3].nextSibling.nextSibling.previousSibling.previousSibling.parentNode.parentNode.parentNode.parentNode.parentNode);

createElement()	🡺	er maddome js er sohojugitay html er any tag buildUp kora jay. Ex.
document.createElement(‘h1’);		document.createElement(‘div’);
document.createElement(‘section’);	document.createElement(‘p’);
add text inside createElement  🡺	let mahi = document.createElement(‘h1’);
h1.innerText=”Mashudur Rahman Mahi”;
appendChild/append	🡺	add.append/appendChild(li);
Push this html tag by js	🡺	// where to add
const add = document.getElementById(‘places-list’);
// what to be added
const li= document.createElement(‘li’);
li.innerText=”Mashudur Rahman Mahi”;
// add the child in it’s parentNode
add.appendchild(li);

Example:
const mainContainer = document.getElementById('main-container');
 
const section = document.createElement('section');
mainContainer.appendChild(section);
 
const h1 = document.createElement('h1');
h1.innerText = "My Full List";
section.appendChild(h1);
 
const ul = document.createElement('ul');
section.appendChild(ul);
const li0 = document.createElement('li');
li0.innerText = "Biriyani";
ul.appendChild(li0);
const li1 = document.createElement('li');
li1.innerText = "Burhani";
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = "Kabab";
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = "Dhodhi";
ul.appendChild(li3);
🡺	body 🡪 section 🡪 ul 🡪 li*4


Add html using another Meathod	🡺	section create kore tar maje innerHTML use korbo.
						innerHTML use korle  ( ` ` ) use korbo.
						Then section ke body te append kore dibo 
const mainContainer = document.getElementById('main-container');
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>Biriyani</li>
    <li>Burhani</li>
    <li>Kabab</li>
    <li>Dodhi</li>
</ul>
`
mainContainer.appendChild(sectionDress);

getElementsByTagName / querySelectorAll / getElementsByClassName	🡺	
eder niye js e kaj korte chaile  index/for loop diye kaj korte hoy
const sections = document.querySelectorAll('section');
for (let section of sections) {
    section.style.border = "2px solid red";
    section.style.backgroundColor = "lightgray";
    section.style.fontSize = "30px";
    section.style.fontFamily = "cursive";
    section.style.borderRadius = '10px';
    section.style.padding = "20px";
    section.style.margin = "20px";
    section.style.textAlign = "center";
}
 
const sections1 = document.querySelectorAll('section ul');
for (let li of sections1) {
    li.style.listStyle = "none";
}

ONCLICK FUNCTION		🡺
Meathod 1    🡪		direct tag e onclick bosiye functionname likhe take call diye kaj
<button onclick=”functionName()”> Mahi </button>
<script> function functionName() { ..Bitorer Kaj …} </script>

Meathod 2    🡪		script tag e onclick use korar maddome tobe eketre 1st jaygay
Function call kora jabe na.
document.getElementById('event-listener').onclick = make;
        function make() {
            document.getElementById('handler-status').innerText = .     .          "MASHUDUR rahman";
        }
Meathod 3    🡪		use addEventListener	
document.getElementById('eventListener1').addEventListener('click', function () {
            document.getElementById('handler-status').innerText = "MASHUDUR RAHMAN";
        })
addEventListener  1st property te onekgulu function thake . 2nd property te function declare kora hoye thake.  some property lick click   ::    click, mouseenter, mouseout, mousemove, foucs, blue,
          keydown, keypress, keyup
Make CommentBox		
Textarea/input hote .value er maddome text copy kora
Text copy kore uporer jaygay append kora
Textarear value abar ‘ ’ null set kore return kora
Ex.
	 document.getElementById("submit").addEventListener('click', function () {
            // step-1 🡺 input er jonno value use kora lage
            let comments = document.getElementById('comment-box');
            let comment = comments.value;
            
            // step-2 🡺 value je tag e niye push
            const div = document.createElement('div');
            const p = document.createElement('p');
            div.appendChild(p);
            p.innerText = comment;
            document.getElementById('comments').appendChild(div);
 
            // step-3
            comments.value = '';
        })


removeAttribute(‘x’)	🡺 	je attribute remove korbo x e tar nam dibo
setAttribute(‘x’,true)	🡺	je attribute add korbo ta x e diye tar value true must.
Button Disabled-Enabled after typing delete:<button id=  “button-type” disabled>Submit</button>
      ` document.getElementById('delete-type').addEventListener('keyup', function () {
        let text = event.target.value.toLowerCase();
        if (text === 'delete') {
             document.getElementById('delete').removeAttribute('disabled');
        }
        else {
           document.getElementById('delete').setAttribute('disabled', true);
        }
    })





addEventListener	   🡺	
event			🡪	returns a object
event.target		🡪	returns the tag property
event.target.value/innerText	🡪 	returns the inside text of the property.  .                                                                       input er jonno value ar input na hole 
innerText use . 

Event Bubble	🡺	event bubble html er ekebare vitor theke suru kore . 1st e ekebare vitore
r items e jay then er upore ase . then tar upore . eivabe ese kaj kore.
        Property   🡪
event.stopPropagation();	🡪	eita use korar maddome ek lavel(ek section/div) er
					sobgula show korbe kintu parent er kisu show korbena
event.stopImmediatePropagation();  🡪	eita use korle jate use korbo keboi oita show korbe
Kunu ekta item remove kora easy but jodi input er maddome amora item ke add korar por remove korte chai tahole remove er jonno parentNode,removeChild use kora lage ebong je document e function call korbo take oboossoi parent tag hote hobe that means ekta div er majer kotogulu p add korle oi p ke remove korte chaile getelementsbuid r maje p diya na kore div diye kora lagbe.
Ex.
      	//ekane je division id use kora hoyeche tar maje onek p tag asche . ei 
	  p tag e giye new item add hoy.
  document.getElementById('division').addEventListener('click', function () {
            event.target.parentNode.removeChild(event.target);
        })
        document.getElementById('btn').addEventListener('click', function () {
            let v1 = document.getElementById('input');
            let v2 = v1.value;
 
            let p = document.createElement('p');
            p.innerText = v2;
            document.getElementById('division').appendChild(p);
 
    	     v1.value = '';
        })




Amora chaile eventListener kunu for loop er osonko items er majer item gulay marte pari .
Syntex:
let allp = document.getElementsByClassName('comment');
        for (let p of allp) {
            p.addEventListener('click', function () {
                console.log("Paragraph");
                event.stopPropagation();
                event.stopImmediatePropagation();
            })
        }


Loop er maje event use korle document use kora lage na . je nam diye loop chalabo tar sathe addEventListener use korleu chole.  Ex. UPORE	p.addEventListener(‘click’,function(){});
New add kora item remove korte chaile tar parent ke niye er maje event.target.parentNode.removeChild(event.target) use kora hoy.
Ekane je list-container use kora hoyeche ta onek list er ul. Amora new jai add kori na keuno ta eikane ese parentNode e giye remove hoy.
          document.getElementById('list-container').addEventListener('click', function(){
        console.log(event.target);
        event.target.parentNode.removeChild(event.target);
     });
 

ul name e jodi ekta create element kori tahole tar modde kunu class set korar jonno ul.classList.add(‘class_name’).  eivabe jodi add kori tahole oi class er style o add hobe jemon,
      document.getElementById('color').addEventListener('click', function() {			     const allNames = document.getElementsByClassName('name');
		 for (const name of allNames) {
                name.style.backgroundColor = "blue"; }
            })      
     document.getElementById('mahi').addEventListener('click', function() {
            const li = document.createElement('li');
            li.innerText = "mashudur rahman mahi";
            li.classList.add('name');
            document.getElementById('divv').appendChild(li);})
ei class name set korar fole ei class er style o add hobe.



To go to one page from another page using JS
windiw.location.href= “index1.html”;
window.location= “index1.html”;

event e return use korle jekane use korbo oikanei event break hobe . onekta loop break er moto. Example:: 
if (parseFloat(totalAmount.innerText) < parseFloat(enteredWithdrawAmount)) {
           alert("You have not enough money to withdraw");
           return;
       }


isNaN(numbering-value)	🡺	er maddome amora input e jodi number chara onno kichu dei 
tahole NaN show korbe na. Example::
	if (isNaN(parseFloat(enteredWithdrawAmount))) {
            alert("Enter a valid deposit amount");
            return;
      }
	// Ekane parseFloat jodi na ditam tahole number sara onno kisu diye enter dile 
   	Alert dekhabol, kintu blank rekhe button e click korle alart na dekiya NaN 
	NaN show korbe . eita soranur jonno floating value inNaN er maje dewa lage.


Random Number
                        function randomNumberCreator() {
         let randomNumber = Math.round(Math.random() * 10000);
                randomNumber += "";
                if (randomNumber.length === 4) return randomNumber;
                else return randomNumberCreator();
            }
            document.getElementById('generate-btn').addEventListener('click', function () {
                const randomNumber = randomNumberCreator();
                console.log(randomNumber);
                setValue('generate-input', randomNumber);
            })

Calculator 
   	document.getElementById('calculator').addEventListener('click', function (event) 
         const previousNumber = getValue('typed-number', true);
                const enteredNumber = event.target.innerText;
 
                // c te click korle sob remove kore dey eita
                if (enteredNumber === 'C') {
                    setValue('typed-number', ''); }	//It’s a utilities js
 
  		//number er last item remove korar jonno 
		//string 🡪 split 🡪 array 🡪 pop() {last-item-remove} 🡪 join  
                else if (enteredNumber === '<') {
                    let stringIntoArray = previousNumber.split('');
                    stringIntoArray.pop();
                    const newNumber = stringIntoArray.join('');
                    console.log(newNumber);
                }
	
		//calculator er button jader innertext numeric tar achara ar kuthau click korle
		  Kaj korbe na
                else if (isNaN(event.target.innerText))
                    return;   
                else {
                    //calculator field a number add
                    const newNumber = previousNumber + enteredNumber;
                    setValue('typed-number', newNumber);	 //It’s a utilities js
                     }
 	 	 })

In this MileStone We Can Learn 🡺

How to use js with html and css
Get element from dom
getElementById, getElementsByClassName, querySelector, querySelectorAll
Onclick and eventElements use
Dynamically add element to the dom: document.createElement 
Get value from a dom element
use innerText(h1,p,div..)
use value(input , textarea)
Add event listenet (event handler)
click, focus, blur, mouseover, keyup,keydown,keypress
addEventListener   ,  onclick="myHandler()"; 
Use function to reduce duplicate code
Event bubble , event deligate




