function loadUrl()
{
	if(num>=1)
	{
		var url="https://hw625.s3.ap-southeast-2.amazonaws.com/HelloWorld_x64.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
