if (/https?:\/\/(m\.)?soundcloud\.com\/[a-z0-9\-_]+\/[a-z0-9\-_]+/.test(window.location.href))
{
	if (document.getElementsByClassName("imageContent").length === 1)
		window.open(document.getElementsByClassName("imageContent")[0].innerHTML.match(/(https?:\/\/i1\.sndcdn\.com\/[0-9a-z\-]+\-t500x500\.jpg)/)[1]);
	else
	{
		var json = new XMLHttpRequest();
		json.onreadystatechange = function()
		{
			if (json.readyState === XMLHttpRequest.DONE)
			{
				if (json.status === 200)
				{
					track = JSON.parse(json.responseText);
					if (track.downloadable == true)
						window.open(track.download_url + '?client_id=7e578240dc55260b7cd04e32053a5c34');
					else
						window.open(track.stream_url + '?client_id=7e578240dc55260b7cd04e32053a5c34');
				}
				else
					window.alert("Error " + json.status);
			}
		};
		json.open("GET", "https://api.soundcloud.com/resolve.json?url=" + window.location.href + "&client_id=7e578240dc55260b7cd04e32053a5c34", true);
		json.send();
		delete json;
		delete track;
	}
}
else if (/https?:\/\/wavo\.me\/[a-z0-9\-_]+\/[a-z0-9\-_]+/.test(window.location.href))
{
	contest = "";
	for (var property in _r)
		if (/\/contests\/\w+/.test(property))
			contest = property;
	window.location = _r[contest].downloadPackageUrl;
	delete contest;
}
else if (/https?:\/\/(www\.)?mediafire\.com\/\w+\/.*\/.*/.test(window.location.href))
	window.location = document.getElementsByClassName("download_link")[0].innerHTML.match(/kNO = "(https?:\/\/.*)"/)[1];
else if (/^https?:\/\/(www\.)?mediafire\.com\/\?.*$/.test(window.location.href))
	window.location = document.getElementsByClassName("download_link")[0].childNodes[1].href;
else if (/https?:\/\/\w+\.zippyshare\.com\/v\/\w+\/file\.html/.test(window.location.href))
	window.location = document.getElementById("dlbutton").getAttribute("href");
else if (/https:\/\/www\.hive\.co\/downloads\/download\/\d+\/spotlight\//.test(window.location.href) && document.body.classList.contains("download-body"))
{
	document.getElementById("firstName").value = "No";
	document.getElementById("lastName").value = "Thanks";
	document.getElementById("email").value = "jkDownloader@jkmartindale.com";
	document.getElementById("city").value = "Nothing, AZ";
	document.getElementById("no-facebook-link").click();
	document.getElementById("big-continue-btn").click();
	window.location.href = window.NEXT_URL;
}
else if (/https?:\/\/artistintelligence\.agency\/artist\/\S/.test(window.location.href))
{
	if (document.getElementsByClassName("connected").length === 1)
		document.getElementsByClassName("btn-action active download")[0].click();
	else
		window.location += "/social/email";
}
else if (/https?:\/\/artistintelligence\.agency\/auth\/email/.test(window.location.href))
{
	document.getElementById("exampleInputEmail1").value = "jkDownloader@jkmartindale.com";
	document.getElementsByClassName("btn")[0].click();
}
else if (/https?:\/\/(www.)?edmt\.center\/[a-zA-Z0-9\-_]+/.test(window.location.href))
{
		if(res["direct_link"] != "")
			window.location = res["direct_link"];
		else
			window.location = res["http"];
}
else if (/^https:\/\/www\.spinninrecords\.com\/premium\/[\w-]+/.test(window.location.href))
	window.location = "https://s3.eu-central-1.amazonaws.com/spinninrecords/premium/" + window.location.href.match(/https:\/\/www\.spinninrecords\.com\/premium\/([\w-]+)/)[1] + ".zip";
else if (/https:\/\/www\.spinninrecords\.com\/talentpool\/track\/\d+[\w-]+/.test(window.location.href))
{
	location.reload();
	console.log = function()
	{
		if (/(https:\/\/api\.soundcloud\.com\/tracks\/\d+\/stream\?client_id=\w+)/.test(arguments[0]))
			window.open(arguments[0].match(/(https:\/\/api\.soundcloud\.com\/tracks\/\d+\/stream\?client_id=\w+)/)[1]);
	};
	document.getElementsByClassName("player-play-btn")[0].click();
}
else if (/https?:\/\/play\.beatport\.com\/contests\/[a-z0-9\-_]+\/$/.test(window.location.href))
	window.location += "download";
else if (/https?:\/\/play\.beatport\.com\/contests\/[a-z0-9\-_]+\/[a-z0-9]+$/.test(window.location.href))
	window.open(document.getElementsByClassName("player")[0].getAttribute("data-mp3-url"));
else if (/https:\/\/jkmartindale\.com/.test(window.location.href))
	alert("Yes, this is my website. Congrats.");
else
	alert("jkDownloader doesn't support this webpage. For a list of supported websites and other information visit jkmartindale.com.");
