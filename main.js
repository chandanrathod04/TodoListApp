const mform= document.querySelector('#my-form');
const Name= document.querySelector('#name');
const Email= document.querySelector('#email');
const msg= document.querySelector('.msg');
const usershow= document.querySelector('#users');



mform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(Name.value===''||Email.value===''){
        msg.classList.add('error');
        msg.innerHTML='please enter valid fields';

        setTimeout(() => msg.remove(),3000);
            
    }
    else{
        const li=document.createElement('li');//for creating elements tags
        li.appendChild(document.createTextNode(`${Name.value}:${Email.value}`));//for adding content in tag or element

        usershow.appendChild(li);


        //clearing content
        Name.value='';
        Email.value='';
    }
}