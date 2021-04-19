var menu_array=["Neapolitan Pizza",
"Chicago Pizza",
"New York-Style Pizza",
"Sicilian Pizza",
"Greek Pizza",
"California Pizza"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_array.sort()
    for(var i=0;i<menu_array.length;i++){
        htmldata=htmldata+'<li>'+ menu_array[i]+'<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
var htmldata1;
var item=document.getElementById("add_item").value;
menu_array.push(item);
menu_array.sort()
htmldata1="<section class='cards'>"
for(var j=0;j<menu_array.length;j++){
    htmldata1=htmldata1+"<div class='card'>"+"<img src='images/pizza.png'>"+menu_array[j]+'</div>' 
   
}
htmldata1=htmldata1+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata1;
}
}