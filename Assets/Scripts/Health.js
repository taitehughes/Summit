#pragma strict

public var health : int = 1;

function Start () {

}

function Update () {
	if (health <= 0)
	{
		Destroy(this.gameObject);
	}
}

function Ouch()
{
	health -= 1;
}