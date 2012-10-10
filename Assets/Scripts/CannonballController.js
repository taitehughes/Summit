#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(hit : Collision) {
	if(hit.gameObject.tag == "Floor") {
		Destroy(gameObject);
		Destroy(hit.gameObject);
	}
}