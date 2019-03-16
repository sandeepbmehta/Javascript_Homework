// from data.js
var tableData = data;
  
// YOUR CODE HERE!
var datefilter = d3.select("#filter-btn");
console.log(tableData)

datefilter.on("click", function() {
    d3.event.preventDefault();
    var dateformdata = d3.select("#datetime");
    var inputdate = dateformdata.property("value");
    
    var cityformdata = d3.select("#city");
    var inputcity = cityformdata.property("value");

    var stateformdata = d3.select("#state");
    var inputstate = stateformdata.property("value");
    
    var countryformdata = d3.select("#country");
    var inputcountry = countryformdata.property("value");

    var shapeformdata = d3.select("#shape");
    var inputshape = shapeformdata.property("value");
    
    console.log(`Input Date ${inputdate}`)
    var tableData = data;
    //console.log(tableData)
    //console.log(data)
    
    if (inputdate !== ""){
        var tableData = tableData.filter(eachrow => eachrow.datetime === inputdate);
        //console.log(`Input Date`)
        //console.log(tableData)
    }
    if (inputcity !== ""){
        var tableData = tableData.filter(eachrow => eachrow.city === inputcity);
        //console.log(`Input city`)
        //console.log(tableData)
    }
    if (inputstate !== ""){
        var tableData = tableData.filter(eachrow => eachrow.state === inputstate);
        //console.log(`Input state`)
        //console.log(tableData)
    }
    if (inputcountry !== ""){
        var tableData = tableData.filter(eachrow => eachrow.country === inputcountry);
        //console.log(`Input country`)
        //console.log(tableData)
    }
    if (inputshape !== ""){
        var tableData = tableData.filter(eachrow => eachrow.shape === inputshape);
        //console.log(`Input shape`)
        //console.log(tableData)
    }
    //console.log(tableData);
    d3.select("tbody").text("")
    var tbody = d3.select("tbody");
    //tbody.text("");
    tableData.forEach((data) => {
        console.log(data)
        var newrow = tbody.append("tr");
        Object.entries(data).forEach(([key,value]) => {
            console.log(key)
            console.log(value)
            //Object.entries(row).forEach(([key, value]) => {
            newrow.append("td").text(value)
            //});  
        });
    });
});