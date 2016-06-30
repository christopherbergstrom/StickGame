var down = [];
$(document).ready(function()
{
  var gameScreen = $("#gameScreen").get(0).getBoundingClientRect();
  var moveRight = true;
  var moveLeft = false;
  var right = true;
  var left = true;
  var jump = true;
  var shoot = true;
  // var hor = gameScreen.left;
  var hor = 0;
  // var lowest = window.innerHeight/10*7;
  // var lowest = $("#gameScreen").heightwindow.innerHeight/10*7;
  var lowest = 350;
  // var lowest = gameScreen.bottom;
  var vert = lowest;
  var lowestShoot = lowest-10;
  var vertShoot = lowestShoot;
  var intRight;
  var intLeft;
  var intShoot;
  var shootSpeed = 500;
  var player = $("#player");
  player.css("top", vert+"px");
  $(document).keydown(function(e)
  {
    down[e.which] = true;

    // right
    if (down[39] && right)
    {
      // console.log("right");
      right = false;
      moveRight = true;
      moveLeft = false;
      // console.log("right: "+moveRight);
      // console.log("left: "+moveLeft);
      player.css("background-image", "url(images/stickRight.png)");
      intRight = setInterval(function()
      {
        hor += 1;
        if(hor > 900)
        {
          hor = 900;
        }
        player.css("left", hor+"px");
      }, 1);
    }

    // left
    if (down[37] && left)
    {
      // console.log("left");
      left = false;
      moveRight = false;
      moveLeft = true;
      // console.log("right: "+moveRight);
      // console.log("left: "+moveLeft);
      player.css("background-image", "url(images/stickLeft.png)");
      intLeft = setInterval(function()
      {
        hor -= 1;
        if(hor < 0)
        {
          hor = 0;
        }
        player.css("left", hor+"px");
      }, 1);
    }

    // jump
    if (down[38] && jump)
    {
      // console.log("jump");
      jump = false;
      var upInterval1 = setInterval(function()
      {
        vert -= 3;
        player.css("top", vert+"px");
      }, 1);
      var upTimeout1 = setTimeout(function()
      {
        clearInterval(upInterval1);
        var upInterval2 = setInterval(function()
        {
          vert -= 2;
          player.css("top", vert+"px");
        }, 1);
        var upTimeout2 = setTimeout(function()
        {
          clearInterval(upInterval2);
          var upInterval3 = setInterval(function()
          {
            vert -= 1;
            player.css("top", vert+"px");
          }, 1);
          var upTimeout3 = setTimeout(function()
          {
            clearInterval(upInterval3);
            var downInterval1 = setInterval(function()
            {
              vert += 1;
              player.css("top", vert+"px");
            }, 1);
            var downTimeout1 = setTimeout(function()
            {
              clearInterval(downInterval1);
              var downInterval2 = setInterval(function()
              {
                vert += 2;
                player.css("top", vert+"px");
              }, 1);
              var downTimeout2 = setTimeout(function()
              {
                clearInterval(downInterval2);
                var downInterval3 = setInterval(function()
                {
                  vert += 3;
                  player.css("top", vert+"px");
                }, 1);
                var downTimeout3 = setTimeout(function()
                {
                  clearInterval(downInterval3);
                  player.css("top", lowest+"px");
                  jump = true;
                  // console.log(vert);
                  vert = lowest;
                  // console.log(jump);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }

    // shoot
    if (down[32] && shoot)
    {
      // console.log("shoot");
      shoot = false;
      var bullet = $("<div></div>")
      bullet.width("10px");
      bullet.height("10px");
      bullet.css("background-color", "black");
      bullet.css("position", "absolute");
      bullet.css("top", vert+"px");
      bullet.css("marginLeft", hor+"px");
      $("body").prepend(bullet);
      // intShoot = setInterval(function()
      // {
      //   hor -= 1;
      //   player.css("marginLeft", hor+"px");
      // }, shootSpeed);
    }
  }).keyup(function(e)
  {
    down[e.which] = false;
    if (e.which == 32)
    {
      shoot = true;
      // console.log("right: "+moveRight);
      // console.log("left: "+moveLeft);
      // if (moveRight)
      // {
      //   // player.css("transition", ".25s")
      //   player.css("background-image", "url(images/stick.png)")
      //   console.log("attack!");
      //   var wait = setTimeout(function()
      //   {
      //     // player.css("transition", ".25s")
      //     // player.css("background-image", "url(images/stickRightAttack.png)")
      //     if (moveRight)
      //     {
      //       // player.css("background-image", "url(images/stickRight.png)")
      //       player.css("background-image", "url(images/stick.png)")
      //     }
      //     else if (moveLeft)
      //     {
      //       // player.css("background-image", "url(images/StickLeft.png)")
      //       player.css("background-image", "url(images/stick.png)")
      //     }
      //   }, 250);
      // }
      // else if (moveLeft)
      // {
      //   // player.css("transition", ".25s")
      //   // player.css("background-image", "url(images/stickLeftAttack.png)")
      //   player.css("background-image", "url(images/stick.png)")
      //   console.log("attack!");
      //   var wait = setTimeout(function()
      //   {
      //     // player.css("transition", ".25s")
      //     if (moveRight)
      //     {
      //       // player.css("background-image", "url(images/stickRight.png)")
      //       player.css("background-image", "url(images/stick.png)")
      //     }
      //     else if (moveLeft)
      //     {
      //       // player.css("background-image", "url(images/StickLeft.png)")
      //       player.css("background-image", "url(images/stick.png)")
      //     }
      //   }, 250);
      // }
    }
    if (e.which == 37 || e.which == 38 || e.which == 39)
    {
      if (!right && jump)
      {
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }
      else if (!right && !jump && !down[39])
      {
        if (intRight)
        {
          clearInterval(intRight);
          right = true;
        }
      }
      if (!left && jump)
      {
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }
      else if (!left && !jump && !down[37])
      {
        if (intLeft)
        {
          clearInterval(intLeft);
          left = true;
        }
      }
    }
  });
});
