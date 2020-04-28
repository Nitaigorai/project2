var stateObject = {
"India": { "Delhi": ["New Delhi", "North Delhi", "West Delhi", "North West Delhi", "South West Delhi", "South Delhi", "South East Delhi", "Central Delhi", "North East Delhi", "Shahdara", "East Delhi"],
"Kerala": ["Thiruvananthapuram", "Palakkad"],
"Goa": ["North Goa", "South Goa"],
"West Bengal": ["Alipurduar", "Bankura", "Paschim Bardhaman", "Purba Bardhaman", "Birbhum", "Cooch Behar", "Darjeeling", "Uttar Dinajpur", "Dakshin Dinajpur", "Hooghly", ""],
"Jharkhand": ["Garhwa", "Palamu", "Latehar", "Chatra", "Hazaribagh", "Koderma", "Giridih", "Ramgarh", "Bokaro", "Dhanbad", "Gumla", "Lohardaga", "Simdega", "Ranchi", "Khunti", "West Singhbhum", "Saraikela Kharsawan", "East Singhbhum", "Jamtara", "Deoghar", "Dumka", "Pakur", "Godda", "Sahebganj"],
},

}
window.onload = function () {
var countrySel = document.getElementById("countrySel"),
stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countrySel.options[countrySel.options.length] = new Option(country, country);
}
countrySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countrySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countrySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}



function toggle(source) {
            checkboxes = document.getElementsByName('check');
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = source.checked;
            }
        }
