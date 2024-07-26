var root=document.querySelector(':root');
function saludar(){
    //tipo_de_dato Nombre <inicializar>;
    //let para definir variables
    // const para definir constantes 
    const mes= 'enero ' + 'julio';
    var name = document.getElementById("user-name").value;
    var elements = document.getElementsByClassName('first');
    for (let i=0; i< elements.length; i++)
        {
         elements[i].style.backgroundColor="orange";
        }
    alert('Se encontraron  ' + elements.length + ' elementos');
}

function reiniciar ()
{
    var elements = document.getElementsByClassName("first");
    elements[0].style.backgroundColor="red";
}
function showConfirm()
{
    var texto;
    if(confirm("selecciona un boton"))
        {
        texto= "Haz presionado Aceptar";
        }
    else {
        texto = "Haz cancelado la acción";
    }
    document.getElementById("demo").innerHTML=texto;
    
}
function mostrarPrompt()
{
let texto;
let persona = prompt("por favor ingresa tu nombre","usuario");
if(persona == null || persona == "") 
{
    texto = "usuario cancelo el comando";
} else {
    texto = "Hola" + persona + "como estas?";
}
document.getElementById("demo").innerHTML=texto;
}

function getRoot () 
{
    var r = getComputedStyle(root);
    alert ("el valor de --miColor" + r.getPropertyValue('--miColor'));
}

function cambiarValor()
{
    root.style.setProperty ('--miColor','blue');
}


/* Laboratorio 6 */
function toggleMenu(){
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu=document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}
function fixPhotoOnScroll (){
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop='-7rem';
    
}
window.addEventListener("scroll",fixPhotoOnScroll, false);

function showImage(image)
{
    var newImage=document.createElement('img');
    newImage.src=image.src; 
    newImage.removeAttribute('onclick');
    var modal=document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existingImage=modal.querySelector('img');
    if (existingImage)
    {
        modal.removeChild(existingImage);
    }
    modal.appendChild(newImage);
}

function closeModal()
{
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
}

