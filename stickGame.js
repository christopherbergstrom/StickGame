var down = [];
var inventory = [true, false, false, false];
var menu = new Menu();
var gameScreen;
var player;
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
var shootSpeed = 500;
var shootPower = 5;
var money = 1000000;
var health = 5000;
var score = 0;
var level = 0;
$(document).ready(function()
{
  gameScreen = $("#gameScreen");
  menu.start();
  $("#start").click(function()
  {
    menu.removeStart();
    createGame();
  });
  $("#instructions").click(function()
  {
    var instructionsText = $("#instructionsText");
    if (instructionsText)
    {
      instructionsText.remove();
    }
    gameScreen.append("<div id='instructionsText'>Use the arrow keys to move and the space bar to shoot. Kill enemies to earn money and buy new guns.</div>")
  });
});

function createGame()
{
  gameScreen.append("<div id='player'></div>")
  player = $("#player");
  gameScreen.append("<div id='money'>$0</div>")
  gameScreen.append("<div id='healthDiv'></div>")
  $("#healthDiv").append("<div id='healthImage'></div>")
  $("#healthDiv").append("<div id='health'>5000</div>")
  playGame();
}
function playGame()
{
  level++;
  score += 1000;
  makeEnemies(level);
  player.css("top", vert+"px");
  player.css("left", hor+"px");
  check();
  $(document).keydown(function(e)
  {
    down[e.which] = true;

    // right
    if (down[39] && right)
    {
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

function check()
{
  var checking = setInterval(function()
  {
    var bullet = $(".bullet")
    var enemy = $(".enemy");
    if (!enemy.length)
    {
      clearInterval(checking);
      menu.upgrade(inventory);
      $("#healthAdd").click(function()
      {
        if (money - 1000 >= 0)
        {
          money -= 1000;
          health += 100;
          $("#health").html(health);
          $("#money").html("$"+money);
        }
      });
      $("#handgun").click(function()
      {
        inventory[0] = true;
        shootSpeed = 500;
        shootPower = 5;
      });
      $("#shotgun").click(function()
      {
        if (money - 20000 >= 0 && !inventory[1])
        {
          inventory[1] = true;
          money -= 20000;
          $("#shotgun").html("Shotgun");
          $("#money").html("$"+money);
          shootSpeed = 1000;
          shootPower = 10;
        }
        else if (inventory[1])
        {
          shootSpeed = 1000;
          shootPower = 10;
        }
      });
      $("#sniper").click(function()
      {
        if (money - 60000 >= 0 && !inventory[2])
        {
          inventory[2] = true;
          money -= 60000;
          $("#sniper").html("Sniper");
          $("#money").html("$"+money);
          shootSpeed = 1500;
          shootPower = 20;
        }
        else if (inventory[2])
        {
          shootSpeed = 1500;
          shootPower = 20;
        }
      });
      $("#minigun").click(function()
      {
        if (money - 100000 >= 0 && !inventory[3])
        {
          inventory[3] = true;
          money -= 100000;
          $("#minigun").html("Minigun");
          $("#money").html("$"+money);
          shootSpeed = 100;
          shootPower = 5;
        }
        else if (inventory[3])
        {
          shootSpeed = 100;
          shootPower = 5;
        }
      });
      $("#done").click(function()
      {
        console.log(inventory);
        menu.removeUpgrade();
        playGame();
        // put create enemies function loop call here
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
            $(this).children(".enemyLife").width("-="+shootPower+"px");
            if (!$(this).children(".enemyLife").width())
            {
              money+=100;
              score+=100;
              $("#money").html("$"+money);
              $(this).remove();
              // $(this).children(".enemyImage").css("background-image", "url(images/explosion.png)");
              // $(this).children(".enemyImage").css("background-size", "180%");
              // var me = $(this);
              // me.removeClass("enemy");
              // var wait = setTimeout(function()
              // {
              //   me.remove();
              // }, 200);
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
    if (enemy.length)
    {
      // runs this loop for each enemy
      // if enemy touches player, player is damaged
      $(".enemy").each(function()
      {
        var x = collision($(this), player);
        if (x)
        {
          health-=1;
          $("#health").html(health);
          if (health <= 0)
          {
            player.remove();
            gameOver();
          }
        }
      });
    }
  }, 10);
}
function makeEnemies(level)
{
  for (var i = 0; i < level; i++)
  {
    var enemy = "<div id='enemy3' class='enemy'><div class='enemyLife'></div><div class='enemyImage'></div></div>"
    gameScreen.append(enemy);
    // console.log(enemy);
    follow(enemy);
  }
}
function follow(enemy)
{
  console.log(enemy.left);
}
function gameOver()
{
  console.log("game over!");
  // display final score
}
