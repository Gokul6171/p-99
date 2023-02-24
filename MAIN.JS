var speechRecognition = window.webkitspeechRecognition;
 var recognition = new speechRecognition();
 function start()
 {
     document.getElementById("textbox").innerHTML = "";
     recognition.start();
 }

 recognition.onresult = function(event) {

 console.log(event);
     
 var content = event.results[0][0].transcript;
 console.log(content);
       speak();

 document.getElementById("textbox").innerHTML = content;
 }

 function speak(){
     var synth = window.SpeechSynthesis;

     speak_data = document.getElementById("textbox").Value

     var utterThis = new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterThis);
     WebKitCSSMatrix.attach(camera);
 } 

 WebKitCSSMatrix.set({
     width:360,
     height:250,
     image_format : 'png',
     png_quality:90
 });
 camera = document.getElementById("camera");