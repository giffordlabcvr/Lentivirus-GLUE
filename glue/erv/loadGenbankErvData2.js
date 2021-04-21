var refconDataPath = "tabular/eve/parvovirinae/erv-refseqs-side-data";
var source_name = 'ncbi-curated-erv';

// Load the refcon data and store relationships between locus and viral taxonomy
var ervRefseqResultMap = {};
get_refcon_data(ervRefseqResultMap, refconDataPath);
//glue.log("INFO", "RESULT WAS ", ervRefseqResultMap);


// Load EVE data from tab file 
var loadResult;
glue.inMode("module/lentiTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/erv/erv-curated-side-data.tsv"]));
	// glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(eveObj) {

	glue.inMode("custom-table-row/locus_data/"+eveObj.sequenceID, function() {
	
		glue.log("INFO", "Entering locus data for sequence:", eveObj.sequenceID);

		//glue.command(["set", "field", "locus_name", eveObj.locus_name]);
		//glue.command(["set", "field", "locus_numeric_id", eveObj.locus_numeric_id]);
		//glue.command(["set", "field", "host_sci_name", eveObj.host_species]);

	});


	if (eveObj.empty_site != 'yes') { // Skip empty sites
	
		// Does an alignment exist for this locus ID
		glue.log("INFO", "Getting taxonomic data for sequence:", eveObj.sequenceID);

		// Get the taxonomy 
		var ervRefConObj = ervRefseqResultMap[eveObj.locus_numeric_id];
		//glue.log("INFO", "LOADED REFCON INFO ", ervRefConObj);
	

		glue.inMode("sequence/"+source_name+"/"+eveObj.sequenceID, function() {

			glue.command(["set", "field", "name", eveObj.sequenceID]);
			glue.command(["set", "field", "full_name", eveObj.name]);

		});
				
	}

});



// get a list of sequence IDs from a given source in an alignment
function get_refcon_data(resultMap, refconDataPath) {

  // Load EVE reference data from tab file 
  var loadResult;
  glue.inMode("module/lentiTabularUtility", function() {
	  loadResult = glue.tableToObjects(glue.command(["load-tabular", refconDataPath]));
	  // glue.log("INFO", "load result was:", loadResult);
  });

  _.each(loadResult, function(eveObj) {

	  var locus_numeric_id = eveObj.locus_numeric_id;
	  //glue.log("INFO", "Setting locus data for EVE reference:", eveObj.sequenceID);
	  resultMap[locus_numeric_id] = eveObj;
	
  });
  
}

