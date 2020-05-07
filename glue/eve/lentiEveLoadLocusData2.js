// Load EVE data from tab file 
var loadResult;
glue.inMode("module/lentiTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/locus/locus-data.tsv"]));
	//glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(eveObj) {

	glue.inMode("custom-table-row/locus_data/"+eveObj.sequenceID, function() {
	
		glue.command(["set", "field", "scaffold", eveObj.scaffold]);
		glue.command(["set", "field", "start", eveObj.extract_start]);
		glue.command(["set", "field", "end", eveObj.extract_end]);
		glue.command(["set", "field", "orientation", eveObj.orientation]);

	});

	glue.inMode("sequence/fasta-digs-eve/"+eveObj.sequenceID, function() {
	
		glue.command(["set", "field", "name", eveObj.sequenceID]);
		glue.command(["set", "field", "full_name", eveObj.sequenceID]);
		glue.command(["set", "field", "species", eveObj.organism]);
	
		glue.command(["set", "field", "subgenus", eveObj.virus_subgenus]);
		glue.command(["set", "field", "clade", eveObj.virus_clade]);

		glue.command(["set", "field", "length", eveObj.sequence_length]);
	});
	

});
