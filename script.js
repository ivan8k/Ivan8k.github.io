$("#btn").click(function(){
  $("#btn").hide();
  $("#img-normal").show();
  $("body").css("background-color", "black");
  setInterval(function(){
    $("#img-normal").toggle();
    $("#img-negativa").toggle();
  }, 10);
  $("audio")[0].play();
})
