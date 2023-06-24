// define new timezone object
class ZonePanel {
	constructor(id)
	{
		this.id = id;
		this.zone = "GMT";
		this.time_add = 0;
	}
	create_disp(zone)
	{
		let disp_string = "";
		disp_string += "<div class=\"zonepanel\" id=\"" + this.id + "\">";
		disp_string += "<br>";
		disp_string += "<form onchange=\"changeZone(this);\">";
		disp_string += "<h4> Timezone:</h4>";
		disp_string += "<select class=\"zones\">";
		disp_string += "<option value=\"ACST\">ACST</option>";
		disp_string += "<option value=\"GMT\" selected>GMT</option>";
		disp_string += "</select></form>";
		disp_string += "<h2 class=\"timer\">Time</h2>";
		disp_string += "</div>";

		zone.innerHTML += disp_string;
	}
	update_time_zone(zone)
	{
		this.zone = zone;
		switch(zone)
		{
			case "GMT":
				this.time_add = 0;
				break;
			case "ACST":
				this.time_add = 9.5;
				break;
			default:
				this.time_add = 0;
				break;
		}
	}
}