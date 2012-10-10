#pragma strict
var type : String;
var showMenu : boolean;
var steelFloor : GameObject;
var brickFloor : GameObject;
var woodFloor : GameObject;
var sp : GameObject;
private var counter : int = 0;
var maxHeight : int = 6;
private var canEnable : boolean = true;

function Start () {
	showMenu = false;
}

function Update () {

}

function OnGUI() {

	if (canEnable && !showMenu && Input.GetKeyDown(KeyCode.Space))
	{
		showMenu = true;
	}

	if(showMenu) {
		if (GUI.Button(Rect(Screen.width*0.25,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Wood")) {
        	type = "wood";
        	//showMenu = false;
        	SpawnFloor();
        }
    	else if (GUI.Button(Rect(Screen.width*0.45,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Brick")) {
        	type = "brick";
        	//showMenu = false;
        	SpawnFloor();
        }
    	else if (GUI.Button(Rect(Screen.width*0.65,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Steel")) {
        	type = "steel";
        	//showMenu = false;
        	SpawnFloor();
        }
    }
    
    checkHeight();
}

function SpawnFloor() {

	sp.transform.position = GameObject.FindGameObjectWithTag("Player").transform.position;

	if(type == "wood") {
		Instantiate(woodFloor,sp.transform.position,Quaternion.identity);
		//showMenu = true;
	}
	else if(type == "steel") {
		Instantiate(steelFloor,sp.transform.position,Quaternion.identity);
		//showMenu = true;
	}
	else if(type == "brick") {
		Instantiate(brickFloor,sp.transform.position,Quaternion.identity);
		//showMenu = true;
	}
		
	GameObject.FindGameObjectWithTag("Player").transform.position.y += 2;
	
	counter++;
}

function checkHeight()
{
	if (counter >= maxHeight)
	{
		showMenu = false;
		canEnable = false;
		
		GameObject.FindGameObjectWithTag("MainCamera").GetComponent(BasicCameraController).finishedBuilding();
		
		Debug.Log("Max tower height reached, no more blocks can be placed.\n Start stage 2");
	}
}