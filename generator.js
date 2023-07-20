// this function takes input and randomly generates a
// spellbook for the given class with maximum spell level
// given in the input
var spellbook = function() {

  // get spells from json
  $('#all_spells').empty();
  $('#my_spells').empty();
  var out = $('#my_spells');
  var strout = "<h2>Spellbook</h2>";
  // get level from input 
  var level = $('#class_level').val();
  var income = $('#wealth_level').val();
  // maximum level spells known, minimum 
  // number of spells known
  var max_level;	// integer for maximum level spell
  var spells_known = [];	// array for storing 
  // spells of every level
  spells_known[0] = undefined;
  if (level >= 1 && level <= 20) {
    //spells_known = (level * 2) + 4;
    if (level < 17)
      max_level = Math.ceil(level / 2);
    else
      max_level = 9;

    for (var i = 1; i <= max_level; ++i) {
      if (i == max_level && level % 2 == 0)
        spells_known[i] = 4;
      else if (i == max_level)
        spells_known[i] = 2;
      if (i == 1 && level > 1)
        spells_known[i] = 8;
      else if (i == 1)
        spells_known[i] = 6;
      if (i > 1 && i < max_level)
        spells_known[i] = 4;
    }
    if (level > 18) {
      if (level == 19)
        spells_known[9] = 6;
      else
        spells_known[9] = 8;
    }
    // add in spells for wealth modifier
    for (var i = 1; i <= max_level; ++i) {
      if (level % 2 == 0) {
        if (income === 'rich')
          spells_known[i] += 2;
        if (income === 'wealthy')
          spells_known[i] += 1;
      }
      if (income === 'rich')
        spells_known[i] += 2;
      if (income === 'wealthy')
        spells_known[i] += 1;
    }

    // now, pick random spells from the json.
    // each spell must be for the correct class,
    // and for the correct level
    var owned_spells;
    strout += "<div class=\"row\">";
    for (var i = 1; i <= max_level; ++i) {
      strout += "<div class=\"flex-item\" id=\"div" + i + "\">"
        + "<h3>Level " + i + " spells</h3>"
        ;
      // first two spells should be from school
      var school = $('#school').val();
      for (var j = 0; j < spells_known[i]; ++j) {
        // get random spell for current
        // spell level 'j'
        var found = false;
        var curr_spell;
        // search for valid spell.
        // quit after 100 searches
        var quit = 0;
        while (!found) {
          curr_spell = randSpell(i);
          var owned = false;
          if (!owned_spells) {
            owned_spells = [{}];
          }
          for (var key in owned_spells) {
            if (owned_spells[key].name === curr_spell.name)
              owned = true;
          }
          if (!owned) {
            found = true;
          }
          // check if spell is from school
          if (school !== 'None') {
            if (j < 2 && curr_spell.school !== school) {
              found = false;
            }
          }
          if (quit++ > 100)
            found = true;
          if (found)
            owned_spells.push(curr_spell);
        }
        strout += ""
          + "<b>" + curr_spell.name
          + "</b> (" + curr_spell.school + ")"
          + "<br>"
          ;
      }
      strout += "</div>";
    }
    strout += "</div>";
    // end of row
  }
  else {
    // return error
    strout += "Invalid level";
  }
  out.append(strout);
  return out;
}

// return json of random spell of given level
var randSpell = function(spell_level) {
  if (all_spell_list) {
    var str_level;
    var str_class = "Wizard";

    var found = false;
    var to_return;
    while (!found) {
      var to_return = spell_list_by_level[spell_level][Math.floor(Math.random() * spell_list_by_level[spell_level].length)];
      if (to_return.class && to_return.class.includes(str_class))
        found = true;
    }
    return to_return;
  }
  else {
    return "[{\"name\": \"spellbook\"},"
      + "{\"level\": \"not\"},"
      + "{\"school\": \"loaded\"}]";
  }
}

$('#submit').on('click', function() {
  $('#my_spells').append(spellbook());
});

// read data.json and fill table
var allSpells = function() {

  if (all_spell_list) {
    var out = $('#all_spells');
    out.append("<table class=\"table table-striped\" id=\"table\">"
        + "<thead>"
        +	"<th>spell name</th>"
        +	"<th>level</th>"
        +	"<th>school</th>"
        + "</thead>"
        + "<tbody>"
        );

    for (var i = 0; i < all_spell_list.length; ++i) {
      $('#table').append("<tr><td>"
          + all_spell_list[i].name + "</td><td>"
          + all_spell_list[i].level + "</td><td>"
          + all_spell_list[i].school + "</td><td>"
          + "</tr>"
          );
    }
    out.append("</tbody></table>");
  }
}

// load spell list into json
var all_spell_list;
var spell_list_by_level = [];
$.getJSON("./json/data.json", function(data) {
  all_spell_list = data;
  allSpells();

  for (var i in all_spell_list) {

    if (all_spell_list[i].level === "1st-level") {
      if (spell_list_by_level[1] === undefined)
        spell_list_by_level[1] = [{}];
      spell_list_by_level[1].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "2nd-level") {
      if (spell_list_by_level[2] === undefined)
        spell_list_by_level[2] = [{}];
      spell_list_by_level[2].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "3rd-level") {
      if (spell_list_by_level[3] === undefined)
        spell_list_by_level[3] = [{}];
      spell_list_by_level[3].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "4th-level") {
      if (spell_list_by_level[4] === undefined)
        spell_list_by_level[4] = [{}];
      spell_list_by_level[4].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "5th-level") {
      if (spell_list_by_level[5] === undefined)
        spell_list_by_level[5] = [{}];
      spell_list_by_level[5].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "6th-level") {
      if (spell_list_by_level[6] === undefined)
        spell_list_by_level[6] = [{}];
      spell_list_by_level[6].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "7th-level") {
      if (spell_list_by_level[7] === undefined)
        spell_list_by_level[7] = [{}];
      spell_list_by_level[7].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "8th-level") {
      if (spell_list_by_level[8] === undefined)
        spell_list_by_level[8] = [{}];
      spell_list_by_level[8].push(all_spell_list[i]);
    }
    if (all_spell_list[i].level === "9th-level") {
      if (spell_list_by_level[9] === undefined)
        spell_list_by_level[9] = [{}];
      spell_list_by_level[9].push(all_spell_list[i]);
    }
  }
})
.fail(function() {
  //console.log("error");
})
;
