var Menu = function(){};
Menu.prototype.createMenu = function()
{
  var upgradeMenu = $("#upgradeMenu");
  if (upgradeMenu)
  {
    upgradeWindow.remove();
  }
  $("#gameScreen").append("<div id='upgradeMenu'></div>");
}
Menu.prototype.removeMenu = function()
{
  $(this).remove();
}
