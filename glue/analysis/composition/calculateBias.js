
nucCompositionResults = {}

// export reference sequences from GLUE
glue.inMode("module/fastaExporter", function(){

	var sequences = glue.command(["export","-w","source.name like '%refseqs%'","-p"]);
	var list = sequences.nucleotideFasta.sequences;
	
	_.each(list, function(seq)  {

	
        //loop through each sequence in the alignment
        seqNucComposition = {}
        
        var sequence   = seq.sequence;
        var sequenceId = seq.id;
		glue.log("INFO", "ID result was:", sequenceId);

	    //loop through each position in the current sequence
		for (var i=0; i < seq.sequence.length; i++) {
			var key = "pos_" + (i + 1);
			var base = seq.sequence.charAt(i);
			
			if (seqNucComposition[base]) {

			    seqNucComposition[base] += 1;
			
			}
			else {

                seqNucComposition[base] = 1;
			}
			
		}
        glue.log("INFO", "Composition result was:", seqNucComposition);
        
        nucCompositionResults[sequenceId] = seqNucComposition;
			
	});

});
