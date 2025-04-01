let newColor; 
generateColor()
updateColor()

const updateNavSpy = () => {
  $( ".nav-link" ).css("color", "white")
  $( ".nav-link.active" ).css("color", newColor)
};

updateNavSpy()

function rgb2hex(r,g,b){
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function generateColor(){
  const r = Math.floor((Math.random() * (235 - 80 + 1)) + 80);
  const g = Math.floor((Math.random() * (235 - 80 + 1)) + 80);
  const b = Math.floor((Math.random() * (235 - 80 + 1)) + 80);
  newColor = rgb2hex(r, g, b)
}



function updateColor(){
    $('.__c').css({"color": newColor, "border-color":newColor})
    $(".nav-link").hover(function(){
      $(this).css({"color": newColor,"border-color":newColor});
      }, function(){$(this).css({"color":"whitesmoke", "border-color":"#648388"});
    });
    $(".__h").hover(function(){
      $(this).css({"color": newColor, "background-color": "white","border-color":newColor});
      }, function(){
      $(this).css({"color": "#888", "background-color":"transparent", "border-color":"#888"});
    });
    $('.gif-sec').css({"background-color": newColor})
    $("#color-swatch").val(newColor)
}

$(function () {   
    $("#color-swatch").change(function(){
        newColor =  $("#color-swatch").val()
        updateColor()
      });

      // toggle gif and img
    $(".gif-img").click(function(){
        $("#img-icon").toggle()
        $("#gif-icon").css("display", "block")
        $("#gif-img").css("background-image", " url('images/SnakeGame-portfolio.png');")
        $("#img-icon").css("display", "block")
        $("#gif-icon").css("display", "none")
        $("#gif-img").css("background-image", " url('gifs/My_Bitmoji.gif');")
      alert("The paragraph was clicked.");
    });

    $(document).scroll(function(){
      updateNavSpy()
    })


});