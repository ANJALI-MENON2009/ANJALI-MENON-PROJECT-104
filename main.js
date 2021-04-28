camera = document.getElementById("camera") ;
Webcam.set({
    width: 360,
    height: 270,
    image_format: 'png' ,
    png_quality: 90 
}) ;
Webcam.attach(camera) ;
function takeSnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="resultImage" src='+data_uri+'>' ;
    }) ;
} 