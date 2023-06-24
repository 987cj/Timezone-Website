// define new timezone object
class ZonePanel {
	ZonePanel(id)
	{
		this.id = id;
	}
	create_disp(zone)
	{
		let disp_string = "";
		disp_string += "<div class=\"zonepanel\" id=\"" + this.id + "\">";
		disp_string += "<br>";
		disp_string += "<form onchange=\"changetest()\">";
		disp_string += "<h4> Timezone:</h4>";
		disp_string += "<select class=\"zones\">";
		disp_string += "<option value=\"ACST\" selected>ACST</option>";
		disp_string += "<option value=\"GMT\">GMT</option>";
		disp_string += "</select></form>";
		disp_string += "<h2 class=\"timer\">Time</h2>";
		disp_string += "</div>";

		zone.innerHTML += disp_string;
		
	}
}