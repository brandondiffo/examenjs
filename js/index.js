var btplus = document.getElementById('btplus');
var nb = document.getElementById('nb');
var cpt= parseInt(nb.innerText);
btplus.addEventListener('click',function(){
    cpt=cpt+1;
    nb.innerHTML= cpt;
});


