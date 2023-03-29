function preload()
{

}





function setup()
{
    canvas = createCanvas(340,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340, 300);
    video.hide();
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initinalized');
}





function gotPoses(results)
{
   if(results.length > 0)
   {
    console.log(results);
    console.log("The x coordinate of nose - " + results[0].pose.nose.x);
    console.log("The y coordinate of nose - " + results[0].pose.nose.y);
   }
}



function draw()
{
       image(video, 0, 0, 340, 300);
}






function take_snapshot()
{
    save('My_Filter_Image.png');
}