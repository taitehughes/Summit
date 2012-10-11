#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(hit : Collision) {
	if(hit.gameObject.tag == "Floor") {
		Debug.Log("Hit an enemy");
		hit.gameObject.GetComponent(Health).Ouch();
		
		//if (hit.gameObject.GetComponent(Health).getHealth() <= 0);
		//{
		//	Destroy(hit.gameObject);
		//}
	}
	
	Debug.Log("Destroying self");
	Destroy(gameObject);
}