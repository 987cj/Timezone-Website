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
		disp_string += "<h4>Timezone:</h4>";
		disp_string += "<select type=\"select\" class=\"zones\" onchange=\"changeZone(this);\">";
		disp_string += "<option value=\"ACDT\">ACDT +10:30</option>";
		disp_string += "<option value=\"ACST\">ACST +09:30</option>";
		disp_string += "<option value=\"ACT\">ACT -05:00</option>";
		disp_string += "<option value=\"ADT\">ADT -03:00</option>";
		disp_string += "<option value=\"AEDT\">AEDT +11:00</option>";
		disp_string += "<option value=\"ACT\">ACT</option>";
		disp_string += "<option value=\"GMT\" selected>GMT</option>";
		disp_string += "</select>";
		disp_string += "<h2 class=\"timer\"></h2>";
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
			case "ACDT":
				this.time_add = 10.5;
				break;
			case "ACST":
				this.time_add = 9.5;
				break;
			case "ACT":
				this.time_add = -5;
				break;
			case "ADT":
				this.time_add = -3;
				break;
			case "AEDT":
				this.time_add = 11;
				break;
			default:
				this.time_add = 0;
				break;
		}
	}
}