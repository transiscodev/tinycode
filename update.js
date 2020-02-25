var thehtml = `
<h1>The new BearApp is here<h1>
Please goto <a href=http://ohsbearapp.azurewebsites.net">our new app</a>. The old version of the service is defunct and will not get updates.`;
document.getElementById("thesub").innerHTML = thehtml;
window.location.replace("http://ohsbearapp.azurewebsites.net");
