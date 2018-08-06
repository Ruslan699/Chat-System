
var relation = document.querySelector(".speech");
var inputText = document.querySelector('#text');
var list = document.querySelector('ul.list-group');
var sil =  document.querySelector("button");
var pan = document.querySelector(".pano");
var double = document.querySelector(".pot");
var click = document.querySelector("#add");


pan.addEventListener("click", function(){
    relation.style.display = "block";


});


double.addEventListener("click", function(){
    relation.style.display = "none";
})
 
 


inputText.addEventListener("keydown", function(e){
    if(e.which == 13){
        addItem();
    }
});

function addItem(){
    var li = document.createElement("li");
    li.innerText = inputText.value;


    if (inputText.value.charAt(0) == inputText.value.charAt(0).toUpperCase()){
    	li.classList.add("user");
    }


    inputText.value = "";

    list.appendChild(li);
};

