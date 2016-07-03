var Menu = function(){};
Menu.prototype.start = function()
{
  var upgradeMenu = $("#upgradeMenu");
  if (upgradeMenu)
  {
    upgradeMenu.remove();
  }
  $("#gameScreen").append("<div id='upgradeMenu'></div>");
  $("#upgradeMenu").append("<div id='start'>Start</div>")
  $("#upgradeMenu").append("<div id='instructions'>Instructions</div>")
}
Menu.prototype.removeStart = function()
{
  $("#upgradeMenu").remove();
}
Menu.prototype.upgrade = function()
{
  var upgradeMenu = $("#upgradeMenu");
  if (upgradeMenu)
  {
    upgradeMenu.remove();
  }
  $("#gameScreen").append("<div id='upgradeMenu'></div>");
  $("#upgradeMenu").append("<div id='shotgun'>Shotgun 20,000</div>")
  $("#upgradeMenu").append("<div id='sniper'>Sniper rifle 60,000</div>")
  $("#upgradeMenu").append("<div id='minigun'>Minigun 100,000</div>")
  $("#upgradeMenu").append("<div id='done'>Done</div>")
}
Menu.prototype.removeUpgrade = function()
{
  $("#upgradeMenu").remove();
}
