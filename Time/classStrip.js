class Strip {
  constructor(zone, time) {
    this.zone = zone;
    this.time = time;
  }

  timereturn() {
    const today = new Date();
    return today;
  }

  //creating the html output of the strip
  stripcreate() {

    //creating the various tags
    const zonediv = document.createElement("div");
    zonediv.classList.add('zonedisplay');

    const linebr = document.createElement("br");

    const spacingadjdiv = document.createElement("div");
    spacingadjdiv.classList.add('spacingadjust');

    const spacingadjform = document.createElement("div");
    spacingadjform.classList.add('spacingadjustform');

    const zoneform = document.createElement("form");
    zoneform.style = "display: flex;";

    const timehead = document.createElement("h4");
    timehead.innerHTML = "Timezone:";

    const formselect = document.createElement("select");
    formselect.classList.add('zones');
    formselect.name = "timezone";

    //Timezone Options
    const optionACST = document.createElement("option");
    optionACST.value = "ACST";
    optionACST.innerHTML = "ACST";

    const optionGMT = document.createElement("option");
    optionGMT.value = "GMT";
    optionGMT.selected = true;
    optionGMT.innerHTML = "GMT";

    const spacingadjbtn = document.createElement("div");
    spacingadjbtn.classList.add("spacingadjustbtn");

    const btn = document.createElement("button");
    btn.classList.add('delete-button');
    btn.innerHTML = "Delete Button";
    btn.onclick = function() {
      removeParent(btn, 3);
    }

    const timeprint = document.createElement("h4");
    timeprint.classList.add("timer");
    timeprint.innerHTML = timeupdate();

    //ordering the tags

    //timezones
    formselect.appendChild(optionACST);
    formselect.appendChild(optionGMT);

    zoneform.appendChild(timehead);
    zoneform.appendChild(formselect);

    spacingadjform.appendChild(zoneform);

    spacingadjbtn.appendChild(btn);

    spacingadjdiv.appendChild(spacingadjform);
    spacingadjdiv.appendChild(spacingadjbtn);

    zonediv.appendChild(linebr);
    zonediv.appendChild(spacingadjdiv);
    zonediv.appendChild(timeprint);

    document.body.appendChild(zonediv);
  }
}
