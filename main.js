leftWristx=0
rightWristx=0
diffrence=0
function setup(){
    canvas=createCanvas(300,200)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modalLoaded)
    posenet.on('pose',gotposes)
}
function modalLoaded(){
    console.log("pose net is initialized")
}
function gotposes(error,results){
    if(error){
        console.error(error)
    }
        else{
            console.log(results)
            rightWristx=results[0].pose.rightWrist.x
            leftWristx=results[0].pose.leftWrist.x
            diffrence=rightWrist-leftWristx
            console.log(diffrence)
        }
    
}
function draw(){
    image(video,0,0,300,200)
}