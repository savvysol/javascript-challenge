


//-------------------------------------------------
//--------- A little Fun First --------------------
console.log(`
    o
    \_/\o
    ( Oo)                    \|/
    (_=-)  .===O-  ~~Z~A~P~~ -O-
    /   \_/U'                /|\
    ||  |_/
    \\  |
    {K ||
    | PP
    | ||
    (__\\

    --------------------------------------------------
        Javascript Homework by Mike Woodall
    --------------------------------------------------
`)

// Import The Data
var sightings = data;


//-------- Warming up to get the Java Juices going...
function logit(me) {
    console.log(me);
}

var msg = "The truth is out there"
    logit(msg)
var msgList = msg.split(" ");
    // logit(msgList);
    logit(msgList.join(". ").toUpperCase())

function TestEvent(){
    logit("It worked!  You're a Java-Jenius!")
}


//-------------------------------------------------
//--------- Ok Let's Do this ----------------------


//--------- Get Form Value ------------------------
var Form_Date = d3.select("#datetime");
var Date_Value = Form_Date.property("value");

Form_Date.on("focus", function() {
    
    logit("We're in the Date Form")

    Form_Date.on("blur", function() {

        Date_Value = Form_Date.property("value");
        logit(`You Enter2ed : ${Date_Value}.`)
    
        //Let's Filter the Data by that Value
        var sighting = sightings.filter(ufo => ufo.datetime === Date_Value);
        logit(sighting)
    
        PopTable(sighting);
    
        logit("We're Out of the Date Form.");
    });
});




// ---------- Populate Table with Filtered Data -------------
function PopTable(filteredData) {
    // Use D3 to select the table body
    var tbody = d3.select("tbody");

    tbody.html("");

    filteredData.map(( data) =>
      {
        var row = tbody.append("tr");
        row.append("td").text(data.datetime);
        row.append("td").text(
            // Get Proper Case City
            data.city.split(" ").map(
                word => 
                word.split("")[0].toUpperCase() + 
                word.split("").slice(1).join("")
                ).join(" ")
        );
        row.append("td").text(data.state.toUpperCase());
        row.append("td").text(data.country.toUpperCase());
        row.append("td").text(
            (data.shape.split("")[0].toUpperCase()) + 
            (data.shape.split("").slice(1).join("")));
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);

            // Testing City Capital
        var PropertCity = data.city.split(" ").map(
            word => 
            word.split("")[0].toUpperCase() + 
            word.split("").slice(1).join("")
            ).join(" ")
        logit(PropertCity)
      }

     );

    logit(`Aaaaaand We're OUT of the Form!  ${filteredData.length}.`) 
};










// Form_Date.on("blur", function() {

//     Date_Value = Form_Date.property("value");
//     logit(`You Entered : ${Date_Value}.`)

//     //Let's Filter the Data by that Value
//     var sighting = sightings.filter(ufo => ufo.datetime === Date_Value);
//     logit(sighting)

//     PopTable(sighting);

//     logit("We're Out of the Date Form.");
// });




// function getValue(class_or_id){
//     var Form_Name = d3.select(class_or_id)
//     var FormValue = Form_Name.property("value");
//     logit(FormValue);    
//     return FormValue
// }

// var DateValue = getValue('#datetime')
// logit(DateValue)

// var Form_Date = d3.select("#datetime");
// Form_Date.on('blur',getValue('#datetime'))


// var Form_Date = d3.select("#datetime")
// Form_Date.on("blur",getValue(Form_Date))

// Form_Value = getValue(Form_Date);
// logit(Form_Value)

// // ---------- Populate Table with Filtered Data -------------
// function PopTable(filteredData) {
//     // Use D3 to select the table body
//     var tbody = d3.select("tbody");

//     tbody.html("");

//     filteredData.map(( data) =>
//       {
//         var row = tbody.append("tr");
//         row.append("td").text(data.datetime);
//         row.append("td").text(
//             // Get Proper Case City
//             data.city.split(" ").map(
//                 word => 
//                 word.split("")[0].toUpperCase() + 
//                 word.split("").slice(1).join("")
//                 ).join(" ")
//         );
//         row.append("td").text(data.state.toUpperCase());
//         row.append("td").text(data.country.toUpperCase());
//         row.append("td").text(
//             (data.shape.split("")[0].toUpperCase()) + 
//             (data.shape.split("").slice(1).join("")));
//         row.append("td").text(data.durationMinutes);
//         row.append("td").text(data.comments);

//             // Testing City Capital
//         var PropertCity = data.city.split(" ").map(
//             word => 
//             word.split("")[0].toUpperCase() + 
//             word.split("").slice(1).join("")
//             ).join(" ")
//         logit(PropertCity)
//       }

//      );

//     logit(`Aaaaaand We're OUT of the Form!  ${filteredData.length}.`) 
// };

//--------- Main Filter Function ------------------

function FilterTable() {
    var dateEntered = getValue(Form_Date);
    logit("You Entered: " + dateEntered)

    //Let's Filter the Data by that Value
    var sighting = sightings.filter(ufo => ufo.datetime === dateEntered)
    if (sighting.length < 1) {
        alert("Hmmmm...something isn't right with your Date.\nPlease enter Data as M/D/YYYY\nEx. 1/1/2010 or 12/10/2012")
    }
    else logit(`Great!  We found ${sighting.length} sightings for that date!`)

    PopTable(sighting);
    // // Use D3 to select the table body
    // var tbody = d3.select("tbody");

    // tbody.html("");

    // sighting.map(( data) =>
    //   {
    //     var row = tbody.append("tr");
    //     row.append("td").text(data.datetime);
    //     row.append("td").text(
    //         // Get Proper Case City
    //         data.city.split(" ").map(
    //             word => 
    //             word.split("")[0].toUpperCase() + 
    //             word.split("").slice(1).join("")
    //             ).join(" ")
    //     );
    //     row.append("td").text(data.state.toUpperCase());
    //     row.append("td").text(data.country.toUpperCase());
    //     row.append("td").text(
    //         (data.shape.split("")[0].toUpperCase()) + 
    //         (data.shape.split("").slice(1).join("")));
    //     row.append("td").text(data.durationMinutes);
    //     row.append("td").text(data.comments);

    //         // Testing City Capital
    //     var PropertCity = data.city.split(" ").map(
    //         word => 
    //         word.split("")[0].toUpperCase() + 
    //         word.split("").slice(1).join("")
    //         ).join(" ")
    //     logit(PropertCity)
    //   }

    //  );

    // logit(`Aaaaaand We're OUT of the Form!  ${sighting.length} on ${dateEntered}.`)

}; 



// // Add Events to Buttons & Fields
// //var Form_Date = d3.select("#datetime")
// // Form_Date.on("blur",FilterTable());


// // Add some New Input Fields

// // Select the List
// var ListGroup = d3.select(".list-group");

// // Create a New List Item and add a Class
// var ListItem = ListGroup.append("li").attr("class","filter list-group-item");

// // Create an Input Field for the State and include a placehold and class
// var StateLable = ListItem.append("label").text("Search by State.")
// var StateInput = ListItem.append("input").attr("placeholder","Enter a State as CA or TX").attr("class","form-control");

// StateInput.on('blur',logit(StateInput.property("value")))


// // YOUR CODE HERE!
