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
  var instructionsText = $("#instructionsText");
  if (instructionsText)
  {
    instructionsText.remove();
  }
}
Menu.prototype.upgrade = function(inventory)
{
  var upgradeMenu = $("#upgradeMenu");
  if (upgradeMenu)
  {
    upgradeMenu.remove();
  }
  for (var i = 0; i < inventory.length; i++)
  {

  }
  $("#gameScreen").append("<div id='upgradeMenu'></div>");
  $("#upgradeMenu").append("<div id='healthAdd' class='item'>100 health</div>")
  $("#upgradeMenu").append("<div id='handgun' class='item'>9mm</div>")
  if (inventory[1])
  {
    $("#upgradeMenu").append("<div id='shotgun' class='item'>Shotgun</div>")
  }
  else
  {
    $("#upgradeMenu").append("<div id='shotgun' class='item'>Shotgun 20,000</div>")
  }
  if (inventory[2])
  {
    $("#upgradeMenu").append("<div id='sniper' class='item'>Sniper rifle</div>")
  }
  else
  {
    $("#upgradeMenu").append("<div id='sniper' class='item'>Sniper rifle 60,000</div>")
  }
  if (inventory[3])
  {
    $("#upgradeMenu").append("<div id='minigun' class='item'>Minigun</div>")
  }
  else
  {
    $("#upgradeMenu").append("<div id='minigun' class='item'>Minigun 100,000</div>")
  }
  $("#upgradeMenu").append("<div id='done' class='item'>Done</div>")
}
Menu.prototype.removeUpgrade = function()
{
  $("#upgradeMenu").remove();
}
