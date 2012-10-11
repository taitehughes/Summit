#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(hit : Collision) {
	if(hit.gameObject.tag == "Floor") {
		Debug.Log("Destroying an enemy");
		Destroy(hit.gameObject);
	}
	
	Debug.Log("Destroying self");
	Destroy(gameObject);
}