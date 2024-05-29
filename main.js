function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.StartClassification('https://teachablemachine.withgoogle.com/models/D2-wSbOg5/model.json' ,modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}


function gotResults(error, results) {
if (error) {
 console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(math.random() *255) + 1,
    random_number_g = Math.floor(math.random() *255) + 1,
    random_number_b = Math.floor(math.random() *255) + 1,

    document.getElementById("result_label").innerHTML = 'posso ouvir - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'precisão - '+
    (result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";

    img= document.getElementById('alien1')
    img= document.getElementById('alien2')
    img= document.getElementById('alien3')
    img= document.getElementById('alien4')

    if (results[0].label == "palmas"){  
    img.src = 'aliens-01.gif';
    img1.src = 'aliens-02.png';
    img2.src = 'alines-03.png';
    img3.src = 'alines-04.png';
} else if (result[0].label == "sino") {    
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.gif';
    img2.src = 'alines-03.png';
    img3.src = 'alines-04.png';
} else if (result[0].label == "estalos") {    
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.png';
    img2.src = 'alines-03.gif';
    img3.src = 'alines-04.png'; 
}else{   
    img.src = 'aliens-01.png';
    img1.src = 'aliens-02.png';
    img2.src = 'alines-03.png';
    img3.src = 'alines-04.gif';
}
}  }