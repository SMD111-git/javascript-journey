//the ponts to note down and dom(doucment object manupalation)
/**document.getElementById('title')
 * the method get you  attriube by the id and gives you the whole tag values.
 * document.getElementById("title").id   this gives you the value  of that tag:title,it is a way to  acess the attributes of that tag.
 * document.getElementById("title").className  silmiar here we are acess the value of that tag by  giving specifi attriube need to be displayed.
 * to access the all attriues in that partciular tag by using getattribute()
 * document.getElementById('title').getAttribute('id')
 * document.getElementById('title').getAttribute('class')// this give you the values of the attriubte
 * document.getElementById('title').setAttribute('class','test') this set or replaces the existing attribute value to the vaue which we are setting the value of that attribute.
 * and the note is that we need pass in parameters as (attriute,value). 
 * eg:document.getElementById('title').setAttribute('class','SMD')
 * const title=document.getElementById('title')
 * title.style.backgroundcolor='green'
 * title.style.padding='15px'
 * ****adding the content to  site**********
 * const title=document.getElementBy('title')
 * title.innertext //this displlay the content which are in display mode ready
 * title.textcontent but here the content is showen which is hidden allso
 * title.innerHTML this give whole tags and values.
 * document.getElementsByClassName('heading') so over here we get the values of  that articualr classes
 * documment.querySelector('h1') in this we can select it by the query or css selecters directly 
 * document.querySelector('#title') this for css query to be selected 
 * document.querySelector('.heading')for class
 * document.querySelector('input[type="password"]')
 * document.querySelector('h2:first-child') we can selecte any thing for the css selectors format
 * for instan we can di this varaibles also
 * const myul=document.querySelector('ul') as we see the ul is stored in myul now we can acess the thing with myul to get other queys inside the ul tag eg this is li tags inside it .
 * myul.querySelector('li') 
 * again to do any changes in the the li tag we can use a varaible and make the changes
 * const myli=document.querySelector('li')
 * myli.style.backgroundColor="green"
 * myli.style.padding="10px"
 * myli.innerHTML="five"
 * myli.innerText="five"
 * to select the  all query at a tiome we can use queryAllSelector
 * const mylist=document.querySelectorAll('li')
 * mylist[0].style.color='green' this makes changes in the very firstr element of list.
 * const myh1=document.querySelectorAll('h1')
 * myh1[0].style.color="green"
 * using of the foreach in this 
 * mylist.forEach(function(l){
 * l.style.color="red"
 * })
 * document.getElementsByClassName('listitem') by thhis dom we can get the elements by the class names.
 * as the above one is a listnode we can not perfrom the array operation on it so we can convert it into the from of array from nodelist
 * const templist=document.getElementsByClassName('listitem') 
 * Array.from(templist)
 * const convertarray= Array.from(templist)
 * convertarray.foreach(function(li){
 * li.style.color='orange'
 * })
 */