var threshold = 75;

// list the species alignments
var listAlignmentResult = glue.command(["list", "alignment", "-w", "name not like '%root%'"]);

// iterate through the alignments (in mode for each alignment)
var listResult = listAlignmentResult["listResult"];
glue.logInfo("Processing result: "+listResult);

var rows = listResult["row"];
//glue.logInfo("Processing rows: "+rows);

var columns = listResult["column"];
//glue.logInfo("Processing columns: "+columns);

// transform result 
var myArray = [];
for(var i = 0; i < rows.length; i++) {

    var myMap = {};
	var rowMap = rows[i];
	var rowArray = rowMap["value"];
	//glue.logInfo("Processing row: "+rowArray);

	for(var j = 0; j < columns.length; j++) {

		var columnName = columns[j];
        var rowValue = rowArray[j]
		
		glue.logInfo("Processing value: "+columnName+": "+rowValue);
        myMap[columnName] = rowValue;

	}
    
    myArray.push(myMap);
}

// Iterate through the alignments
for(var k = 0; k < myArray.length; k++) {

	var alignmentData = myArray[k];

	// get the reference sequence 
	var refSeqName = alignmentData["refSequence.name"];
	glue.logInfo("Processing reference seq: "+refSeqName);

	// get the feature locations
	var listFeatureResult;
	listFeatureResult
	glue.inMode("/reference/"+refSeqName, function() {
		 = glue.command(["list", "feature-location"]);
	});
	
}



// get a list of the features
var my = get_features();


// iterate through the features
for(var l = 0; l < listFeatureResult.length; l++) {

// get all members with above-threshold coverage

// add to alignment array

}	


// Initialise gene result map with codon map for every codon in gene
function get_refseq_feature_locations(refSeqName) {

	for(var k = 0; k < myArray.length; k++) {

		var alignmentData = myArray[k];

		// get the reference sequence 
		var refSeqName = alignmentData["refSequence.name"];
		glue.logInfo("Processing reference seq: "+refSeqName);

		// get the feature locations
		var listFeatureResult;
		glue.inMode("/reference/"+refSeqName, function() {
			listFeatureResult = glue.command(["list", "feature-location"]);
		});
	}
	return listFeatureResult;
}



