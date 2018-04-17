window.onload = function () {
    document.addEventListener("deviceready", init, false);
    //comment init(); when testing on phonegap
//    init(); 
};

function init() {
    
    $(".draggable").draggableTouch();
    
    var options = {
        quality: 10,
        sourceType: Camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }
    
    $("#cambtn").on("click", takePic);
    
    function takePic() {
        navigator.camera.getPicture(success, error, options);  
    }
    
    function success(imageData){
        var img = "<img id='resultIMG' src='" + imageData + "' alt='nothing to see here'>";
        $("#result").html(img);
        $("#goToEditor").show();
    }
    
    function error(message){
        document.write(message);
    }
    
    $("#big_circle_btn").on("click", function(){
        $("#circle_bg").toggle();
        this.toggleClass("activeBtn");
        console.log("unhidden");
    })
    $("#small_circle_btn").on("click", function(){
        $("#circle_sm").toggle();
        console.log("unhidden");
    })
    $("#up_arrow_big_btn").on("click", function(){
        $("#up_arrow_bg").toggle();
        console.log("unhidden");
    })
    $("#right_arrow_big_btn").on("click", function(){
        $("#right_arrow_bg").toggle();
        console.log("unhidden");
    })
    $("#down_arrow_big_btn").on("click", function(){
        $("#down_arrow_bg").toggle();
        console.log("unhidden");
    })
    $("#left_arrow_big_btn").on("click", function(){
        $("#left_arrow_bg").toggle();
        console.log("unhidden");
    })
    $("#up_arrow_sm_btn").on("click", function(){
        $("#up_arrow_sm").toggle();
        console.log("unhidden");
    })
    $("#right_arrow_sm_btn").on("click", function(){
        $("#right_arrow_sm").toggle();
        console.log("unhidden");
    })
    $("#down_arrow_sm_btn").on("click", function(){
        $("#down_arrow_sm").toggle();
        console.log("unhidden");
    })
    $("#left_arrow_sm_btn").on("click", function(){
        $("#left_arrow_sm").toggle();
        console.log("unhidden");
    })
    $("#globe_earth_btn").on("click", function(){
        $("#globe_earth").toggle();
        console.log("unhidden");
    })
    $("#illuminati_btn").on("click", function(){
        $("#illuminati").toggle();
        console.log("unhidden");
    })
    $("#ufo_btn").on("click", function(){
        $("#ufo").toggle();
        console.log("unhidden");
    })
    $("#alien_btn").on("click", function(){
        $("#alien").toggle();
        console.log("unhidden");
    })
    
    
//////////////--SAVING THE RESULT (WIP)--////////////////////////////////////    
    $("#saveBtn").on("click", function() {
        
//        var truth = confirm("Would you like to send the truth");
        if (confirm("Couldn't figure this part out, so just screenshot I guess...")) {
//            window.location.href = "#home";
//            
//            $("#goToGallery").show();
              
//        console.log("button worked");
            var canvas = document.getElementById("imageSave");

            html2canvas(imageSave).then(function(canvas) {
                canvas.id = "h2canvas";
                
                document.body.appendChild(canvas);
                document.getElementById("savedImages").append(canvas);
                console.log("saving works");
                
        });  
        }
    });
    
}

