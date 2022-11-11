gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2_2final = [];

gdjs.Untitled_32sceneCode.GDHoverObjObjects2_2final = [];

gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects3= [];
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects3= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDBestObjects1= [];
gdjs.Untitled_32sceneCode.GDBestObjects2= [];
gdjs.Untitled_32sceneCode.GDBestObjects3= [];
gdjs.Untitled_32sceneCode.GDTimeObjects1= [];
gdjs.Untitled_32sceneCode.GDTimeObjects2= [];
gdjs.Untitled_32sceneCode.GDTimeObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDHoverObjObjects1= [];
gdjs.Untitled_32sceneCode.GDHoverObjObjects2= [];
gdjs.Untitled_32sceneCode.GDHoverObjObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition4IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_2 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_2 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_2 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_2 = {val:false};
gdjs.Untitled_32sceneCode.condition3IsTrue_2 = {val:false};
gdjs.Untitled_32sceneCode.condition4IsTrue_2 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects = Hashtable.newFrom({"IsometricPlatformerGrass": gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Best", "IJG");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Best"), gdjs.Untitled_32sceneCode.GDBestObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Best", "IJG", runtimeScene, runtimeScene.getVariables().get("Best"));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBestObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBestObjects1[i].setString("Best: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Best")));
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects = Hashtable.newFrom({"IsometricPlatformerGrass": gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects3Objects = Hashtable.newFrom({"GreenPlayer": gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHoverObjObjects3Objects = Hashtable.newFrom({"HoverObj": gdjs.Untitled_32sceneCode.GDHoverObjObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects1Objects = Hashtable.newFrom({"GreenPlayer": gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHoverObjObjects1Objects = Hashtable.newFrom({"HoverObj": gdjs.Untitled_32sceneCode.GDHoverObjObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2.length = 0;

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDHoverObjObjects1, gdjs.Untitled_32sceneCode.GDHoverObjObjects2);


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Paused"), true));
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_1.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_2 = gdjs.Untitled_32sceneCode.condition2IsTrue_1;
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2_2final.length = 0;gdjs.Untitled_32sceneCode.GDHoverObjObjects2_2final.length = 0;gdjs.Untitled_32sceneCode.condition0IsTrue_2.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_2.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDHoverObjObjects1, gdjs.Untitled_32sceneCode.GDHoverObjObjects3);

gdjs.Untitled_32sceneCode.condition0IsTrue_2.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHoverObjObjects3Objects, 250, true);
if( gdjs.Untitled_32sceneCode.condition0IsTrue_2.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_2.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2_2final.indexOf(gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2_2final.push(gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDHoverObjObjects3.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDHoverObjObjects2_2final.indexOf(gdjs.Untitled_32sceneCode.GDHoverObjObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDHoverObjObjects2_2final.push(gdjs.Untitled_32sceneCode.GDHoverObjObjects3[j]);
    }
}
}
{
gdjs.Untitled_32sceneCode.condition1IsTrue_2.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
if( gdjs.Untitled_32sceneCode.condition1IsTrue_2.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_2.val = true;
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2_2final, gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDHoverObjObjects2_2final, gdjs.Untitled_32sceneCode.GDHoverObjObjects2);
}
}
}}
}
gdjs.Untitled_32sceneCode.conditionTrue_1.val = true && gdjs.Untitled_32sceneCode.condition0IsTrue_1.val && gdjs.Untitled_32sceneCode.condition1IsTrue_1.val && gdjs.Untitled_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "error.wav", false, 10, 0.7);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDHoverObjObjects1 */

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition2IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition3IsTrue_1.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Paused"), true));
}if ( gdjs.Untitled_32sceneCode.condition1IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition2IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHoverObjObjects1Objects, 250, false);
}if ( gdjs.Untitled_32sceneCode.condition2IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition3IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}}
}
}
gdjs.Untitled_32sceneCode.conditionTrue_1.val = true && gdjs.Untitled_32sceneCode.condition0IsTrue_1.val && gdjs.Untitled_32sceneCode.condition1IsTrue_1.val && gdjs.Untitled_32sceneCode.condition2IsTrue_1.val && gdjs.Untitled_32sceneCode.condition3IsTrue_1.val;
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "select.wav", false, 90, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setAngle(gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].getAngle() + (90));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween("MP", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), "linear", 400, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects = Hashtable.newFrom({"IsometricPlatformerGrass": gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects1Objects = Hashtable.newFrom({"GreenPlayer": gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects = Hashtable.newFrom({"IsometricPlatformerGrass": gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Untitled_32sceneCode.GDPlayButtonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Untitled_32sceneCode.GDPlayButtonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects = Hashtable.newFrom({"IsometricPlatformerGrass": gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Untitled_32sceneCode.GDPlayButtonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Untitled_32sceneCode.GDPlayButtonObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("IsometricPlatformerGrass"), gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1);
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointX("")) + 40,(( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointY("")) + 10);
}
}{runtimeScene.getVariables().get("Time").setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Paused"), false);
}{runtimeScene.getVariables().get("Best").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setAnimationName("Idle");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IsometricPlatformerGrass"), gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HoverObj"), gdjs.Untitled_32sceneCode.GDHoverObjObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointX("")) + 35);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointY("")) - 10);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHoverObjObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHoverObjObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IsometricPlatformerGrass"), gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDGreenPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Paused"), false);
}}
gdjs.Untitled_32sceneCode.conditionTrue_1.val = true && gdjs.Untitled_32sceneCode.condition0IsTrue_1.val && gdjs.Untitled_32sceneCode.condition1IsTrue_1.val;
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("IsometricPlatformerGrass"), gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDCoinObjects1Objects, (( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointX("")) + 40, (( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointY("")) + 10, "");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Paused"), true));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.Untitled_32sceneCode.GDTimeObjects1);
{runtimeScene.getVariables().get("Time").add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTimeObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(20 - Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Time")) / 60)));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Best"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Best"), gdjs.Untitled_32sceneCode.GDBestObjects1);
{runtimeScene.getVariables().get("Best").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBestObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBestObjects1[i].setString("Best: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Best")));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Time")) / 60) == 20);
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Paused"), true);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects, 375, 275, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setAnimationName("Dead");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].addForceTowardPosition((gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].getPointY("")) + 5000, 25, 1);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Best", "IJG", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Best")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Untitled_32sceneCode.GDPlayButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Untitled_32sceneCode.conditionTrue_1.val = true && gdjs.Untitled_32sceneCode.condition0IsTrue_1.val && gdjs.Untitled_32sceneCode.condition1IsTrue_1.val;
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("IsometricPlatformerGrass"), gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Time").setNumber(0);
}{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDIsometricPlatformerGrassObjects1Objects);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointX("")) + 40,(( gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1[0].getPointY("")) + 10);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString("Score: 0");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setPosition(225,140);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setAnimationName("Idle");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Paused"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Untitled_32sceneCode.GDPlayButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Untitled_32sceneCode.GDPlayButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("Tween").hasFinished("MP") ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1[i].setAngle(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIsometricPlatformerGrassObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBestObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBestObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBestObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTimeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTimeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTimeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHoverObjObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHoverObjObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHoverObjObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
