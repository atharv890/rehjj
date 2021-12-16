function submit(){
    jk=navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j6nE8-50i/model.json',{probabilityThreshold:0.7},modelloaded);
    }
    function modelloaded(){
    alert("hi");
    yo=new Audio("Welcome.ogg");
    yo.play();
    classifier.classify(bye);
    }
    function bye(error,results){
    if (error){
    console.log(error);
    }
    else{
    console.log(results);
    img=document.getElementById("image");
if(results[0].label=="Barking"){
img.src="dog.jpg"
}
else if(results[0].label=="Meowing"){
    img.src="cat.jpg";
}
else{
    img.src="gy.png";
}
































    }
}