// Script to calculate the number of unique loci in each ERV lineage
var lociCountResults = {};
var lineageResults = {};

// list custom-table-row locus_data id locus_numeric_id
var loci = glue.command(["list", "custom-table-row", "locus_data", "id", "locus_numeric_id"]);
var info = loci["listResult"]["row"];
 _.each(info, function(locus){

	 var sequence_id      = locus["value"][0];
	 var locus_numeric_id = locus["value"][1];
	 var id_elements      = sequence_id.split('.');
	 var lineage_name     = id_elements[0];
	 
	 glue.log("INFO", "Got locus ID '"+locus_numeric_id+"' for sequence: '"+sequence_id+"'");

	 if (lociCountResults[lineage_name]) {

		 lociCountResults[lineage_name] += 1;
	 
	 }
	 else {

		 lociCountResults[lineage_name] = 1;
	 }
		 
 });	


_.each(_.keys(lociCountResults), function(lineage_name) {

	var count = lociCountResults[lineage_name];
	glue.log("INFO", "Got count '"+count+"' for lineage'"+lineage_name+"'");

});		