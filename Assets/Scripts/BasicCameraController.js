#pragma strict

var buildStage : boolean = true;
var stage2Camera : Vector3;

function Start () {
	stage2Camera = Vector3(19,0,30);
}

function Update () {

	if (buildStage)
	{
		this.transform.position.x = GameObject.FindGameObjectWithTag("Player").transform.position.x;
	}
	else if (this.transform.position != stage2Camera)
	{
		this.transform.position -= (this.transform.position - stage2Camera) * 0.025;
		
		if (transform.eulerAngles.y <= 179 || transform.eulerAngles.y >= 181)
		{
			transform.eulerAngles.y += 1;
		}
		else if (Vector3.Magnitude(this.transform.position - stage2Camera) < 0.20)
		{
			transform.eulerAngles.y = 180;
			
			this.transform.position = stage2Camera;
			
			GameObject.FindGameObjectWithTag("GUI Instructions").guiText.text = "Press the Left Control key to fire all Cannons.\n Use the P key to Pause and Reset the Demo.";

		}
	}

}



public function finishedBuilding()
{
	buildStage = false;
}