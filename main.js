$(function () {   
//    let windowSize = $(window).width();
//    let swatch_arr = [$("#color-swatch_screen"), $("#color-swatch")]
//    whichSwatch = windowSize >= 768 ? 1 : 0;
//     $(window).resize(function() {
//         windowSize = $(window).width();
//         whichSwatch = windowSize >= 768 ? 1 : 0;
//         console.log(whichSwatch)
//     }); 
    // console.log($(".color-swatch")[whichSwatch])
    function updateActive(newColor){
      $('.nav-link.active').css({"color": newColor})

    }
    
    $("#color-swatch").change(function(){
        // alert("here")
        let newColor =  $("#color-swatch").val()
        $('.__c').css({"color": newColor, "border-color":newColor})
        $(".nav-link").hover(function(){
            $(this).css({"color": newColor,"border-color":newColor});
            }, function(){$(this).css({"color":"whitesmoke", "border-color":"#648388"});
          });
        updateActive(newColor)
        $(".__h").hover(function(){
            $(this).css({"color": newColor,"border-color":newColor});
            }, function(){
            $(this).css({"color":"#888", "border-color":"#888"});
          });
        $('.gif-sec').css({"background-color": newColor})
      });


});