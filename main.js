function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AG5w4tcYQ/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("ich").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_count").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("ich").style.color ="rgb("+
        random_number_r+","+random_number_g+","+random_number_b+",";
        document.getElementById("result_count").style.color ="rgb("+
        random_number_r+","+random_number_g+","+random_number_b+",";

        img = document.getElementById('cat.png');
        img1 = document.getElementById('dog.jpg');
        
        if (results[0].label == "barking"){
            document.getElementById("animal_image").src = "dog.jpg";
        }
        else{
            document.getElementById("animal_image").src = "cat.png";
        }
    }
}