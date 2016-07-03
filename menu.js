var Menu = function(){};
Menu.prototype.start = function()
{
  var upgradeMenu = $("#upgradeMenu");
  if (upgradeMenu)
  {
    upgradeMenu.remove();
  }
  $("#gameScreen").append("<div id='upgradeMenu'></div>");
  $("#upgradeMenu").append("<div id='start' class='item'>Start</div>")
  $("#upgradeMenu").append("<div id='instructions' class='item'>Instructions</div>")
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
  $("#upgradeMenu").append("<div id='handgun' class='item'>9mm</div>")
  $("#upgradeMenu").append("<div id='shotgun' class='item'>Shotgun 20,000</div>")
  $("#upgradeMenu").append("<div id='sniper' class='item'>Sniper rifle 60,000</div>")
  $("#upgradeMenu").append("<div id='minigun' class='item'>Minigun 100,000</div>")
  $("#upgradeMenu").append("<div id='done' class='item'>Done</div>")
}
Menu.prototype.removeUpgrade = function()
{
  $("#upgradeMenu").remove();
}
