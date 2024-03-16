// define new timezone object
class	ZonePanel {
	constructor(id)
	{
		this.id = id;
		this.zone = "UTC +00:00";
		this.time_add = 0;
	}
	create_disp(zone)
	{
		let disp_string = "";
		disp_string += "<div class=\"zonepanel\" id=\"" + this.id + "\">";
		disp_string += "<br>";
		disp_string += "<h4>Timezone:</h4>";
		disp_string += "<select type=\"select\" class=\"zones\" onchange=\"changeZone(this);\">";
		disp_string += "<option value=\"-12\">UTC -12:00</option>";
		disp_string += "<option value=\"-11\">UTC -11:00</option>";
		disp_string += "<option value=\"-10\">UTC -10:00</option>";
		disp_string += "<option value=\"-9.5\">UTC -09:30</option>";
		disp_string += "<option value=\"-9\">UTC -09:00</option>";
		disp_string += "<option value=\"-8\">UTC -08:00</option>";
		disp_string += "<option value=\"-7\">UTC -07:00</option>";
		disp_string += "<option value=\"-6\">UTC -06:00</option>";
		disp_string += "<option value=\"-5\">UTC -05:00</option>";
		disp_string += "<option value=\"-4\">UTC -04:00</option>";
		disp_string += "<option value=\"-3.5\">UTC -03:30</option>";
		disp_string += "<option value=\"-3\">UTC -03:00</option>";
		disp_string += "<option value=\"-2\">UTC -02:00</option>";
		disp_string += "<option value=\"-1\">UTC -01:00</option>";
		disp_string += "<option value=\"0\" selected>UTC +00:00</option>";
		disp_string += "<option value=\"1\">UTC +01:00</option>";
		disp_string += "<option value=\"2\">UTC +02:00</option>";
		disp_string += "<option value=\"3\">UTC +03:00</option>";
		disp_string += "<option value=\"3.5\">UTC +03:30</option>";
		disp_string += "<option value=\"4\">UTC +04:00</option>";
		disp_string += "<option value=\"4.5\">UTC +04:30</option>";
		disp_string += "<option value=\"5\">UTC +05:00</option>";
		disp_string += "<option value=\"5.5\">UTC +05:30</option>";
		disp_string += "<option value=\"5.75\">UTC +05:45</option>";
		disp_string += "<option value=\"6\">UTC +06:00</option>";
		disp_string += "<option value=\"6.5\">UTC +06:30</option>";
		disp_string += "<option value=\"7\">UTC +07:00</option>";
		disp_string += "<option value=\"8\">UTC +08:00</option>";
		disp_string += "<option value=\"8.75\">UTC +08:45</option>";
		disp_string += "<option value=\"9\">UTC +09:00</option>";
		disp_string += "<option value=\"9.5\">UTC +09:30</option>";
		disp_string += "<option value=\"10\">UTC +10:00</option>";
		disp_string += "<option value=\"10.5\">UTC +10:30</option>";
		disp_string += "<option value=\"11\">UTC +11:00</option>";
		disp_string += "<option value=\"12\">UTC +12:00</option>";
		disp_string += "<option value=\"12.75\">UTC +12:45</option>";
		disp_string += "<option value=\"13\">UTC +13:00</option>";
		disp_string += "<option value=\"14\">UTC +14:00</option>";
		disp_string += "</select>";
		disp_string += "<h2 class=\"timer\"></h2>";
		disp_string += "</div>";

		zone.innerHTML += disp_string;
	}
	update_time_zone(zone)
	{
		this.time_add = parseFloat(zone);
	}
}