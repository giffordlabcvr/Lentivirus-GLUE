var threshold = 75;

// get the alignments
var where_clause = "name not like '%root%'";
var alignmentArray = get_alignments(where_clause);

 // Iterate through the alignments
var mySpeciesAligns = {};
for(var k = 0; k < alignmentArray.length; k++) {

	// get the reference sequence 
	var alignmentData = alignmentArray[k];
	var refSeqName = alignmentData["refSequence.name"];
	var alignmentName = alignmentData["name"];
	glue.logInfo("Processing reference seq: "+refSeqName);

	// get the feature locations
	var listFeatureResult = get_refseq_feature_locations(refSeqName);

	// get sequences with above threshold coverage for each feature
	var myGeneAligns = {};
    for(var j = 0; j < listFeatureResult.length; j++) {

	   var featureName = listFeatureResult[j];
	   glue.logInfo("  Processing feature: "+featureName);

	   // get the feature locations
	   var listFeatureResult;
	   glue.inMode("/reference/"+refSeqName, function() {
		   listFeatureResult = glue.command(["list", "feature-location"]);
	   });
	   
	   var sufficientCoverageMembers;
	   glue.inMode("alignment/"+alignmentName+"/", function(){			
		   sufficientCoverageMembers = glue.getTableColumn(glue.command(["list", "member", "-w", "fLocNotes.featureLoc.feature.name = 'Env' and fLocNotes.ref_nt_coverage_pct >= "+threshold]), "sequence.sequenceID");
	   });	
	   
	   myGeneAligns[featureName] = sufficientCoverageMembers;
	   
	   // Create the alignment in GLUE and add the members 

	   // Compute the alignment

   }
   
   mySpeciesAligns[refSeqName] = myGeneAligns;
}	

//### SUBROUTINES
function get_alignments(where_clause) {

	// list the species alignments
	var listAlignmentResult = glue.command(["list", "alignment", "-w", where_clause]);

	var listResult = listAlignmentResult["listResult"];
	glue.logInfo("Processing result: "+listResult);
	var rows = listResult["row"];
	var columns = listResult["column"];
	//glue.logInfo("Processing columns: "+columns);
	//glue.logInfo("Processing rows: "+rows);

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

	return myArray;
}

function get_refseq_feature_locations(refSeqName) {

	// get the feature locations
	var listFeatureResult;
	glue.inMode("/reference/"+refSeqName, function() {
		listFeatureResult = glue.command(["list", "feature-location"]);
	});

	var listResult = listFeatureResult["listResult"];
	glue.logInfo("Processing result: "+listResult);
	var rows = listResult["row"];
	var columns = listResult["column"];
	//glue.logInfo("Processing columns: "+columns);
	glue.logInfo("Processing rows: "+rows);

	// transform result 
	var myArray = [];
	for(var i = 0; i < rows.length; i++) {

		var rowMap = rows[i];
		var rowArray = rowMap["value"];
		glue.logInfo("Processing row: "+rowArray);

		for(var j = 0; j < columns.length; j++) {
			var name = columns[j];
			var rowValue = rowArray[j]		
			glue.logInfo("Processing value: "+name+": "+rowValue);
			myArray.push(rowValue);
		}	
	}

	return myArray;
}

