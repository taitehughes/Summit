#pragma strict
var type : String;
var showMenu : boolean;
var pause : boolean;
var steelFloor : GameObject;
var brickFloor : GameObject;
var woodFloor : GameObject;
var canFloor : GameObject;
var sp : GameObject;
private var counter : int = 0;
var maxHeight : int = 6;
private var canEnable : boolean = true;


var Steel : boolean = true;
var Brick : boolean = true;
var brickCounter : int = 0;
var Cannon : boolean = true;
var canCounter : int = 0;

function Start () {
	showMenu = false;
	pause = false;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.P)) {
		if(pause == false) {
			pause = true;
			Time.timeScale = 0.0;
		}
		else {
			pause = false;
			Time.timeScale = 1.0;
		}
	}
	
}

function OnGUI() {

	if (canEnable && !showMenu && Input.GetKeyDown(KeyCode.Space))
	{
		showMenu = true;
		GameObject.FindGameObjectWithTag("GUI Instructions").guiText.text = "Select Tower segments.\nYou may only select 1 Steel, 2 Cannons, and 2 Bricks.\nMax tower height is 6";
	}

	if(!pause) {
	if(showMenu) {
		if (GUI.Button(Rect(Screen.width*0.25,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Wood")) {
        	type = "wood";
        	//showMenu = false;
        	SpawnFloor();
        }
    	else if (Cannon && GUI.Button(Rect(Screen.width*0.45,Screen.height*0.7,Screen.width*0.1,Screen.height*0.1),"Cannon")) {
        	type = "cannon";
        	//showMenu = false;
        	SpawnFloor();
        	
        	canCounter++;
        	
        	if (canCounter >= 2)
        	{
        		Cannon = false;
        	}
        }
        else if (Brick && GUI.Button(Rect(Screen.width*0.45,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Brick")) {
        	type = "brick";
        	//showMenu = false;
        	SpawnFloor();
        	brickCounter++;
        	
        	if (brickCounter >= 2)
        	{
        		Brick = false;
        	}
        }
    	else if (Steel && GUI.Button(Rect(Screen.width*0.65,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Steel")) {
        	type = "steel";
        	//showMenu = false;
        	SpawnFloor();
        	Steel = false;
        }
    }
    }
    else {
    	if (GUI.Button(Rect(Screen.width*0.25,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Resume")) {
        	pause = false;
        }
    	else if (GUI.Button(Rect(Screen.width*0.45,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Restart")) {
        	pause = false;
        	Time.timeScale = 1.0;
        	Application.LoadLevel("Test");
        }
    	else if (GUI.Button(Rect(Screen.width*0.65,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Quit")) {
        	pause = false;
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
	else if(type == "cannon") {
		Instantiate(canFloor,sp.transform.position,Quaternion.identity);
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