var main = document.querySelector('.main');
var spin = document.querySelector('.spinner');
main.style.display = 'none';
main.classList.add('spinner');
setInterval(()=>{
    main.classList.remove('spinner');
    spin.style.display = "none";  main.style.display = 'block';
},4000);
setInterval(()=>{
    main.classList.add('spinner');
    spin.style.display = "block";  main.style.display = 'none';
},7000);