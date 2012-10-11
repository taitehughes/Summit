#pragma strict
var cb : GameObject;

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.LeftControl)) {
		Fire();
	}
}

function Fire() {

	if (this.transform.eulerAngles.y == 0)
	{
		var cannonball = Instantiate(cb, Vector3(gameObject.transform.position.x+2,gameObject.transform.position.y,gameObject.transform.position.z),Quaternion.identity);
		cannonball.rigidbody.velocity.x= 50;
	}
	else
	{
		cannonball = Instantiate(cb, Vector3(gameObject.transform.position.x-2,gameObject.transform.position.y,gameObject.transform.position.z),Quaternion.identity);
		cannonball.rigidbody.velocity.x= -50;
	}
}