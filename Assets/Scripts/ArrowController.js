#pragma strict

function Start () {

}

function Update () {
	this.rigidbody.velocity = 2 * Vector3(Input.GetAxis("Horizontal"), 0, 0);          
	transform.eulerAngles.y += 1;
	
	if ((this.transform.position.x >= 10.0 && this.rigidbody.velocity.x >= 0) || (this.transform.position.x <= -10.0 && this.rigidbody.velocity.x <= 0))
	{
		this.rigidbody.velocity = Vector3(0,0,0);
	}
}