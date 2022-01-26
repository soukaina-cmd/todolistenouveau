
// methode 1 supprimer 
/*function deletebox(x) {
    if (confirm("confirmez votre choix")) {
        x.parentElement.remove()
    }

}*/
// methode 2
 var is = document.getElementsByClassName("fa-trash")
 for(var i=0; i<is.length; i++){
     is[i].addEventListener("click",supprimer)
 }
 function supprimer(x){
    if (confirm("confirmez votre choix")) {
        this.parentElement.remove()
    }
 }

// methode1
/*function recherche(){
    
    var recherche=document.getElementById("search").value
    var ta= document.getElementsByClassName("ta")
    for(i=0; i<ta.length; i++)   {
        if(ta[i].textContent.toLowerCase()!= recherche.toLowerCase()){
                 ta[i]. parentElement.style.display="none"
                
            }
    }
}
document.getElementById("recher").addEventListener("click", recherche);*/


document.getElementById("search").addEventListener("keyup", filtrage);
function filtrage(){
    var recherche=document.getElementById("search").value
    var ta= document.getElementsByClassName("ta")
    for(i=0; i<ta.length; i++)   {
        if(!ta[i].textContent.toLowerCase().includes(recherche.toLowerCase())){
                 ta[i]. parentElement.style.display="none"
                
            }else{
                    ta[i]. parentElement.style.display="block"
            }
    }
    
}



document.getElementById("aj").addEventListener("click",ajouter)
function ajouter(){
    var div = document.getElementById("div").textContent.trim()
if(div!=""){
 document.getElementById("ul").innerHTML+='<li class="list-group-item "> <span  class="ta">'+div+' </span> <i class="fas fa-edit f"></i><i class="fas fa-trash f" ></i></li>'
}else{
    alert("tasck vide")
}
}


// modifier
var edit = document.getElementsByClassName("fa-edit")
for(var i=0; i<edit.length; i++){
    edit[i].addEventListener("click",editf)
}
function editf(){
    this.parentElement.children[0].click()
}
