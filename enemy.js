function Enemy()
{
  this.me = "<div class='enemy'><div class='enemyLife'></div><div class='enemyImage'></div></div>";
  // this.position = enemyHor;
  this.follow = function(enemyHor)
  {
    console.log("in follow function");
    console.log(hor);
    console.log(enemyHor);
    console.log(this);
    console.log(this.me);
    console.log($(this));
    console.log($(this).me);
    // var x = 0;
    setInterval(function()
    {
      // x++;
      // console.log(x);
      if (enemyHor + 50 < hor)
      {
        // console.log("if");
        enemyHor+=.5;
        this.me.style.left = enemyHor+"px";
        // this.css("left", enemyHor+"px");
      }
      else if (enemyHor > hor + 70)
      {
        // console.log("else if");
        enemyHor-=.5;
        this.me.style.left = enemyHor+"px";
        // this.css("left", enemyHor+"px");
      }
    }, 1);
  };
}
