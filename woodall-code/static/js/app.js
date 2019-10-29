


//-------------------------------------------------
//--------- A little Fun First --------------------
console.log(`

    --------------------------------------------------
          Javascript Homework by Mike Woodall
    --------------------------------------------------

`)
//--------- HEADING ------------------

//--------- IMPORTING DATA ------------------

var sightings = data;

//--------------- LEVEL 1 ------------------
//------------------------------------------

// ---> IMPORTING

var sightings = data;

// ---> FIND THE FORM & BUTTON 

var Form_Date = d3.select("#datetime");
var Button = d3.select("#filter-btn");

// ---> LEVEL1 CLICK THE BUTTON

            // Button.on('click',function(){

            //     // --> GET THE FORM VALUE
            //     Date_Value = Form_Date.property("value");
            //     console.log(`Date Entered: ${Date_Value}`)

            //     // --> FILTER THE DATA
            //     var sighting = sightings.filter(ufo => ufo.datetime === Date_Value);
            //     console.log(`
            //     We found ${sighting.length} result(s) that match ${Date_Value}.
            //     `)
                
                
            //     // --> POPULATE THE TABLE
            //     PopTable(sighting)

            // }); // End Button Click

            // ---------- Populate Table with Filtered Data -------------
            function PopTable(filteredData) {
                
                console.log(`...in the PopTable function.`)
                
                // Use D3 to select the table body
                var tbody = d3.select("tbody");

                tbody.html("");

                filteredData.map(( data) =>
                {
                    var row = tbody.append("tr");
                    row.append("td").text(data.datetime);
                    row.append("td").text(TitleCase(data.city));
                    row.append("td").text(data.state.toUpperCase());
                    row.append("td").text(data.country.toUpperCase());
                    row.append("td").text(TitleCase(data.shape));
                    row.append("td").text(data.durationMinutes);
                    row.append("td").text(data.comments);

                });

                console.log(`Done.  We added ${filteredData.length} row(s) to the table.`) 
            }; // End PopTable

            //--------- CUSTOM HELPER FUNCTIONS ------------------

            // Get Unique Values from Array
            function Unique(arr) {
                var UniqueList = []
                for (var i = 0; i < arr.length; i++) {
                    if (UniqueList.includes(arr[i]) == false) {
                        UniqueList.push(arr[i])
                    }
                }
                return UniqueList.sort()
            }

            // Capital First Letter of Each Work in String
            function TitleCase(Words) {
                Proper = Words.split(" ").map(
                    word => 
                    word.split("")[0].toUpperCase() + 
                    word.split("").slice(1).join("")
                    )
                    .join(" ")
                return Proper
                };


//--------------- LEVEL 2 ------------------
//------------------------------------------

// --------- Create a Label -----------------
        function LabelThis(text = 'Custom Label') {
            // Select the List
            var ListGroup = d3.select(".list-group");

            // Create a New List Item and add a Class
            var ListItem = ListGroup.append("li").attr("class","filter list-group-item");

            // Create an Input Field for the State and include a placehold and class
            var InputLabel = ListItem.append("label").text(text)

            console.log('Sweet!  You made a label with a function.')

        }; // End Label This

        // --> NEW INPUT FORM FUNCTION
        function NewInput(label = 'New Input', placeholder = 'Enter some Text') {
            // Select the List
            var ListGroup = d3.select(".list-group");

            // Create a New List Item and add a Class
            var ListItem = ListGroup.append("li").attr("class","filter list-group-item");

            // Create an Input Field for the State and include a placehold and class
            var InputLabel = ListItem.append("label").text(label)
            var InputForm = ListItem.append("input")

            // Add some attributes
            InputForm.attr("placeholder",placeholder).attr("class","form-control");

            // Return The Form so we can assign some event listeners...
            return InputForm
        }; // End NewInput

        // --> CREATE SOME NEW INPUT FIELDS
        // FormCountry = NewInput('Enter a Country',`Options: ${Unique(Countries).join(', ')}`)
        // FormState = NewInput('Enter a State',`Enter State as 2 Letter Code such as CA or TX`)
        // FormCity = NewInput('Enter a City',`Type a City and we'll see if it's there...`)
        // FormShape = NewInput('Enter a Shape',`All Kinds of Shapes...`)

        // --> NEW DROPDOWN OPTION FUNCTION
        function NewDropDown(array, label,selectID, defaultValue = '-- Select -- ') {
            // Select the List
            var ListGroup = d3.select(".list-group");

            // Create a New List Item and add a Class
            var Label = ListGroup.append("label").text(label)

            // Create a New List Item and add a Class
            var NewSelect = ListGroup.append("select").attr("id",selectID);

            // Default Value
            NewSelect.append("option").text(defaultValue)

            // Create new Option & Value
            for (var i = 0; i < array.length; i++) {
                NewSelect.append("option").text(array[i]).attr("value",array[i]);
            }
            return NewSelect
        } // End NewDropDown


        // --> CREATE UNIQUE LIST OF VALUES FOR EACH DROPDOWN
        var Dates = sightings.map(data => data.datetime);
        var States = sightings.map(data => data.state.toUpperCase());
        var Countries = sightings.map(data => data.country.toUpperCase());
        var Cities = sightings.map(data => TitleCase(data.city));
        var Shapes = sightings.map(data => TitleCase(data.shape));

        // --> CREATE DROPDOWNS
        var CitySelect = NewDropDown(Unique(Cities),'Filter Results by City','select-city','- City')
        var ShapeSelect = NewDropDown(Unique(Shapes),'Filter Results by Shape','select-shape','- Shape')
        
        // var StateSelect = NewDropDown(Unique(States),'Select a State','select-state')
        // var CountrySelect = NewDropDown(Unique(Countries),'Select a Country','select-country')
        

        // --> GET THE VALUES OF EACH SELECTED OPTION
        var DateEntered = GetSelectedText('datetime')
        var City = GetSelectedText('select-city')
        var Shape = GetSelectedText('select-shape')

        // var Country = GetSelectedText('select-country')
        // var State = GetSelectedText('select-state')
        


        function GetSelectedText(selectid){
            var selText = document.getElementById(selectid).value;
            return selText
        }

        function Get(selectid){
            var element = document.getElementById(selectid);
            return element
        }

        function FilterDate(data){
            var DateEntered = GetSelectedText('datetime')

            // --> FILTER THE DATA & POPULATE TABLE
            var filtered = data.filter(ufo => ufo.datetime === DateEntered);
            PopTable(filtered)

            Button.text('Filter by Date')

            return filtered
        } // End FilterDate

        function FilterCity(data){
            // --> Filter By Date
            City = GetSelectedText('select-city')

            // --> FILTER THE DATA & POPULATE TABLE
            var filtered = data.filter(ufo => TitleCase(ufo.city) === City);
            PopTable(filtered)

            Button.text("Reset Table")

            return filtered
        } // End FilterCity

        function FilterShape(data){
            // --> Filter By Date
            Shape = GetSelectedText('select-shape')

            // --> FILTER THE DATA & POPULATE TABLE
            var filtered = data.filter(ufo => TitleCase(ufo.shape) === Shape);
            PopTable(filtered)

            return filtered
        } // End FilterShape



        // ----------- EVENTS & FILTERS -------------------

        Button.on("click",function(){
            filtered = FilterDate(sightings)
            
            LabelThis(`
            We found ${filtered.length} result(s) that match ${GetSelectedText('datetime')}
            `)

        }) // End Button Click

        Get('select-city').addEventListener("change", function(){
       
            DateFiltered = FilterDate(sightings)
            filtered = FilterCity(DateFiltered)

            LabelThis(`
            We found ${filtered.length} result(s) that match ${GetSelectedText('datetime')} and ${GetSelectedText('select-city')}.
            `)
            
            return filtered

        }); // End City Select

        Get('select-shape').addEventListener("change", function(){
            City = GetSelectedText('select-city')
            if (City == '--- Select a City ----') {
                FilterDate(sightings)
            }
            
            DateFiltered = FilterDate(sightings)
            filtered = FilterCity(DateFiltered)

            LabelThis(`
            We found ${filtered.length} result(s) that match ${GetSelectedText('datetime')} and ${GetSelectedText('select-city')}.
            `)
            
            return filtered

        }); // End City Select

