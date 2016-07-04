function Enemy(enemyHor)
{
  this.me = "<div class='enemy'><div class='enemyLife'></div><div class='enemyImage'></div></div>";
  this.position = enemyHor;
  this.follow = function()
  {
    setInterval(function()
    {
      if (this.position().left + 50 < hor)
      {
        this.position+=.5;
        this.css("left", this.position+"px");
      }
      else if (this.position() > hor + 70)
      {
        this.position-=.5;
        this.css("left", this.position+"px");
      }
    }, 1)
  };
}
