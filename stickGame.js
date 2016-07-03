var down = [];
var menu = new Menu();
var gameScreen;
// var gameScreenPosition;
var player;
// var playerPosition;
var shootSpeed = 500;

$(document).ready(function()
{
  gameScreen = $("#gameScreen");
  // gameScreenPosition = gameScreen.get(0).getBoundingClientRect();
  menu.start();
  $("#start").click(function()
  {
    console.log("start");
    menu.removeStart();
    createGame();
  });
  $("#instructions").click(function()
  {
    console.log("put instructions here");
  });
});

function createGame()
{
  gameScreen.append("<div id='player'></div>")
  playGame();
}
function playGame()
{
  gameScreen.append("<div id='enemy3' class='enemy'><div class='enemyLife'></div><div class='enemyImage'></div></div>")
  player = $("#player");
  // playerPosition = player.get(0).getBoundingClientRect();
  var moveRight = true;
  var moveLeft = false;
  var right = true;
  var left = true;
  var jump = true;
  var shoot = true;
  var hor = 500;
  var lowest = 380;
  var vert = lowest;
  var intRight;
  var intLeft;
  var intShoot;
  player.css("top", vert+"px");
  player.css("left", hor+"px");
  check();
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
      // console.log("shoot");
      // click space bar
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

      // hold space bar
      intShoot = setInterval(function()
      {
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
}

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

// window.setInterval(function()
function check()
{
  var checking = setInterval(function()
  {
    // $('#result').text(collision($('#enemy'), $('.bullet')));
    var bullet = $(".bullet")
    var enemy = $(".enemy");
    if (!enemy.length)
    {
      clearInterval(checking);
      menu.upgrade();
      $("#done").click(function()
      {
        console.log("done upgrading");
        menu.removeUpgrade();
        playGame();
      });
    }
    // tests if a bullet is on the screen
    if (bullet.length)
    {
      // runs this loop for each bullet for each enemy
      // if bullet hits enemy, enemy is damaged and bullet is removed
      $(".bullet").each(function()
      {
        var hit = false;
        $(".enemy").each(function()
        {
          var x = collision($(this), bullet);
          if (x)
          {
            hit = true;
            $(this).children(".enemyLife").width("-=10px");
            if (!$(this).children(".enemyLife").width())
            {
              $(this).children(".enemyImage").css("background-image", "url(images/explosion.png)");
              $(this).children(".enemyImage").css("background-size", "180%");
              var me = $(this);
              var wait = setTimeout(function()
              {
                me.remove();
              }, 200);
            }
          }
        });
        if(hit)
        {
          $(this).remove();
          hit = false;
        }
      });
    }
  }, 10);
}
