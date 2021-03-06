const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
"Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire","Bosnia & Herzegovina","Botswana","Brazil","British Indian Ocean Ter","Brunei","Bulgaria",
"Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Canary Islands","Cape Verde","Cayman Islands","Central African Republic","Chad","Channel Islands",
"Chile","China","Christmas Island","Cocos Island","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote DIvoire",
"Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea",
"Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Ter","Gabon","Gambia","Georgia",
"Germany","Ghana","Gibraltar","Great Britain","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guyana","Haiti","Hawaii","Honduras","Hong Kong","Hungary",
"Iceland","Indonesia","India","Iran","Iraq","Ireland",
"Isle of Man","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kuwait","Kyrgyzstan","Laos","Latvia",
"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malaysia","Malawi",
"Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Midway Islands",
"Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Nambia","Nauru","Nepal","Netherland Antilles","Netherlands (Holland, Europe)","Nevis","New Caledonia","New Zealand","Nicaragua","Niger",
"Nigeria","Niue","Norfolk Island","Norway","Oman","Pakistan","Palau Island","Palestine","Panama"," Papua New Guinea","Paraguay","Peru",
"Philippines","Pitcairn Island","Poland","Portugal","Puerto Rico","Qatar","Republic of Montenegro","Republic of Serbia","Reunion","Romania","Russia",
"Rwanda","St Barthelemy","St Eustatius","St Helena","St Kitts-Nevis","St Lucia","St Maarten","St Pierre & Miquelon",
"St Vincent & Grenadines","Saipan","Samoa","Samoa American","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Seychelles",
"Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain",
"Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
"Tahiti","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga",
"Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Is","Tuvalu","Uganda",
"United Kingdom","Ukraine","United Arab Emirates","United States of America",
"Uruguay","Uzbekistan","Vanuatu","Vatican City State","Venezuela","Vietnam",
"Virgin Islands (Brit)","Virgin Islands (USA)","Wake Island","Wallis & Futana Is","Yemen","Zaire","Zambia","Zimbabwe"]

function addCountry(selectedCountry){
    options.innerHTML = "";
    countries.forEach(country =>{
        let isSelected = country == selectedCountry ? "selected" : ""
        let li =`<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li)
    }) 
}

addCountry()

function updateName(selectedLi){
    searchInp.value = ""
    addCountry(selectedLi.innerText)
    wrapper.classList.remove('active')
    selectBtn.firstElementChild.innerText = selectedLi.innerText
}

searchInp.addEventListener("keyup", () => {
    let arr = []
    let searchedVal = searchInp.value.toLowerCase()
    arr = countries.filter(data =>{
        return data.toLowerCase().startsWith(searchedVal)
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("")
    options.innerHTML = arr ? arr : "<p>Oops! Country not found </p>";
})

selectBtn.addEventListener("click", () =>  {
    wrapper.classList.toggle('active')
})