let newColor; 
// let newColorHEX; 
generateColor()
updateColor()
console.log($('.__c'))


function rgb2hex(r,g,b){
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function generateColor(){
  const r = Math.floor((Math.random() * (235 - 100 + 1)) + 100);
  const g = Math.floor((Math.random() * (235 - 100 + 1)) + 100);
  const b = Math.floor((Math.random() * (235 - 100 + 1)) + 100);
  newColor = rgb2hex(r, g, b)
}



function updateColor(){
    $('.__c').css({"color": newColor, "border-color":newColor})
    console.log(newColor)
    $(".nav-link").hover(function(){
      $(this).css({"color": newColor,"border-color":newColor});
      }, function(){$(this).css({"color":"whitesmoke", "border-color":"#648388"});
    });
    $(".__h").hover(function(){
      $(this).css({"color": newColor,"border-color":newColor});
      }, function(){
      $(this).css({"color":"#888", "border-color":"#888"});
    });
    $('.gif-sec').css({"background-color": newColor})
    $("#color-swatch").val(newColor)
}

$(function () {   
    $("#color-swatch").change(function(){
        newColor =  $("#color-swatch").val()
        updateColor()
      });
});