let newColor; 

const shuffle = () => {
  generateColor()
  updateColor()
  updateNavSpy()
}

const updateNavSpy = () => {
  $( ".nav-link" ).css({"color": "white", "text-decoration": "solid"})
  $( ".nav-link.active" ).css({"color": newColor, "text-decoration": "line-through"})
};

shuffle()


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
      $(this).css({"color": "white", "background-color": newColor,"border-color":newColor});
      }, function(){
      $(this).css({"color": "#888", "background-color":"transparent", "border-color":"#888"});
    });
    $('.gif-sec').css({"background-color": newColor})
    $("#color-swatch").val(newColor)
}

function togglePic(what){
  if (what == 1){
    $("#pause").css("display", "none")
    $("#play").css("display", "block")
    $(".fixed-gif").css('background-image', 'url("gifs/my_new_bitmoji.gif")')
  } else{
    $("#pause").css("display", "block")
    $("#play").css("display", "none")
    $(".fixed-gif").css('background-image', 'url("gifs/My_Bitmoji.gif")')
  }
}

$(function () {   
    $("#color-swatch").change(function(){
        newColor =  $("#color-swatch").val()
        updateColor()
      });

    $(document).scroll(function(){
      updateNavSpy()
    })


});



function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    msg:document.getElementById("msg").value,
  }
  const serviceID = "service_nhs6n5l";
  const templateID = "template_2hg7k1h";

  emailjs.send(serviceID,templateID,params).then(
    res =>{
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("msg").value = ""
      console.log(res)
      $(".alert").css("display", "block")
    })
  .catch(err=>console.log(err))

}



