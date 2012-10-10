#pragma strict

function Start () {

}

function Update () {
	this.transform.position.x = GameObject.FindGameObjectWithTag("Player").transform.position.x;
}