var down = [];
var enemies = [];
function collision($div1, $div2)
{
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}


window.setInterval(function()
{
  // $('#result').text(collision($('#enemy'), $('.bullet')));
  var test = $(".bullet")
  if (test.length)
  {
    for (var i = 0; i < enemies.length; i++)
    {
      var x = collision(enemies[i].enemy, $('.bullet'));
      if (x)
      {
        // console.log(enemies[i]);
        enemies[i].life.width("-=10px");
        if (!enemies[i].life.width())
        {
          enemies[i].enemy.effect("explode");
          enemies[i].enemy.remove();
          // enemies.
        }
      }
    }
  }
}, 40);

$(document).ready(function()
{
  var enemy1 = {enemy:$("#enemy1"), life:$("#enemy1Life")};
  var enemy2 = {enemy:$("#enemy2"), life:$("#enemy2Life")};
  enemies.push(enemy1);
  enemies.push(enemy2);
  var gameScreen = $("#gameScreen");
  var gameScreenPosition = gameScreen.get(0).getBoundingClientRect();
  var player = $("#player");
  var playerPosition = player.get(0).getBoundingClientRect();
  var moveRight = true;
  var moveLeft = false;
  var right = true;
  var left = true;
  var jump = true;
  var shoot = true;
  var hor = 0;
  var lowest = 380;
  var vert = lowest;
  var intRight;
  var intLeft;
  var intShoot;
  var shootSpeed = 50;
  player.css("top", vert+"px");
  // $("#enemy").draggable();
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
      player.css("background-image", "url(images/stickRight.png)");
      intRight = setInterval(function()
      {
        hor += 1;
        if(hor > 930)
        {
          hor = 930;
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
      // console.log("shoot1");
      shoot = false;
      var bullet = $("<div></div>");
      bullet.addClass("bullet");
      bullet.width("5px");
      bullet.height("5px");
      bullet.css("border-radius","50%");
      bullet.css("background-color", "black");
      bullet.css("position", "absolute");
      bullet.css("top", (vert+60)+"px");
      if (moveRight)
      {
        var bHor = (hor+70);
        bullet.css("left", bHor+"px");
      }
      else if (moveLeft)
      {
        var bHor = (hor-5);
        bullet.css("left", bHor+"px");
      }
      gameScreen.append(bullet);
      // var move = bHor;
      if (moveRight)
      {
        var intShooting = setInterval(function()
        {
          bHor += 5;
          bullet.css("left", bHor+"px");
          if (bHor > 1000)
          {
            bullet.remove();
            clearInterval(intShooting);
          }
        }, 1);
      }
      else if (moveLeft)
      {
        var intShooting = setInterval(function()
        {
          bHor -= 5;
          bullet.css("left", bHor+"px");
          if (bHor < -3)
          {
            bullet.remove();
            clearInterval(intShooting);
          }
        }, 1);
      }

      intShoot = setInterval(function()
      {
        // console.log("shoot2");
        var bullet = $("<div></div>");
        bullet.addClass("bullet");
        bullet.width("5px");
        bullet.height("5px");
        bullet.css("border-radius","50%");
        bullet.css("background-color", "black");
        bullet.css("position", "absolute");
        bullet.css("top", (vert+60)+"px");
        if (moveRight)
        {
          var bHor = (hor+70);
          bullet.css("left", bHor+"px");
        }
        else if (moveLeft)
        {
          var bHor = (hor-5);
          bullet.css("left", bHor+"px");
        }
        gameScreen.append(bullet);
        // var move = bHor;
        if (moveRight)
        {
          var intShooting = setInterval(function()
          {
            bHor += 5;
            bullet.css("left", bHor+"px");
            if (bHor > 1000)
            {
              bullet.remove();
              clearInterval(intShooting);
            }
          }, 1);
        }
        else if (moveLeft)
        {
          var intShooting = setInterval(function()
          {
            bHor -= 5;
            bullet.css("left", bHor+"px");
            if (bHor < -3)
            {
              bullet.remove();
              clearInterval(intShooting);
            }
          }, 1);
        }
      }, shootSpeed);
    }
  }).keyup(function(e)
  {
    down[e.which] = false;
    if (e.which == 32)
    {
      if (intShoot)
      {
        clearInterval(intShoot);
        shoot = true;
      }
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
