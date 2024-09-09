# Lentivirus-GLUE: Phylogenomic Analysis of Lentivirus Virus

<img src="md/Lentivirus-glue-logo.png" align="right" alt="" width="280" />

Welcome to the GitHub repository for **Lentivirus-GLUE**!

Lentivirus-GLUE is a sequence-oriented resource for comparative genomic analysis of lentiviruses (family *Retroviridae*, genus *Lentivirus*), developed using the **[GLUE](https://github.com/giffordlabcvr/gluetools)** software framework. 

GLUE is an open, integrated software toolkit designed for storing and interpreting sequence data. It supports the creation of bespoke projects, incorporating essential data items for comparative genomic analysis, such as sequences, multiple sequence alignments, genome feature annotations, and other associated data.

Projects are loaded into the GLUE "engine," forming a relational database that represents the semantic relationships between data items. This foundation supports systematic comparative analyses and the development of sequence-based resources for lentiviruses, including human immunodeficiency virus type 1 (HIV-1).

**Lentivirus-GLUE** contains feature definitions, alignments, and reference sequences for all lentivirus species.

This Lentivirus-GLUE base project can be extended with additional layers, included in this project repository. 

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Lentivirus Genome Features](#lentivirus-genome-features)
- [Reference Sequences](#lentivirus-reference-sequences)
- [Multiple Sequence Alignments](#multiple-sequence-alignments)
- [Database Schema](#lentivirus-glue-database-schema)
- [Publications](#related-publications)

## Key Features

- **GLUE Framework Integration**: Built on the GLUE software framework, Lentivirus-GLUE offers an extensible platform for efficient, standardized, and reproducible computational genomic analysis of Lentivirus virus.

- **Phylogenetic Structure**: Sequence data in Lentivirus-GLUE is organized in a phylogenetically-structured manner, allowing users to explore evolutionary relationships easily.

- **Rich Annotations**: Annotated reference sequences enable rigorous comparative genomic analysis related to conservation, adaptation, structural context, and genotype-to-phenotype associations.

- **Exploratory and operational**: The GLUE framework allows sequence-based resources to be used for exploratory work in a research setting, as well as operational work in a public or animal health setting.


## Installation

If you have not done so already, install the GLUE software framework by following the [installation instructions](http://glue-tools.cvr.gla.ac.uk/#/installation) on the GLUE web site: 

Download the Lentivirus-GLUE repository, navigate into the top-level directory, and start the GLUE command line interpreter.

At the GLUE command prompt, run the 'buildLentivirusProject.glue' file as follows:

```
GLUE Version 1.1.107
Copyright (C) 2015-2020 The University of Glasgow
This program comes with ABSOLUTELY NO WARRANTY. This is free software, and you
are welcome to redistribute it under certain conditions. For details see
GNU Affero General Public License v3: http://www.gnu.org/licenses/

Mode path: /
GLUE> run file buildCoreProject.glue
```

This will build the base or 'core' project, which contains a minimal set of feature definitions, clade categories, reference sequences, and alignments.

## Lentivirus Genome Features

This section provides background information on the virus-associated data items included in the project. 

### Provirus and Genome Features

In their integrated DNA form - referred to as a **provirus** - retrovirus genomes are flanked at either side by identical **long terminal repeat (LTR)** sequences, each of which is composed of distinct **U3**, **R**, and **U5** regions.

![Lentivirus genome](md/lentivirus-genomes.png)

Lentiviruses typically encode a range of ‘accessory’ genes in addition to the fundamental **gag**, **pol**, and **env** genes encoded by all retroviruses. Among these, the **rev** gene is thought to be encoded by all lentiviruses, while **tat** is encoded by all except SRLVs and FIVs. Numerous other accessory genes have been defined, but the evolutionary relationships between these genes are not well-characterized.

A **standard set of genome features** for lentiviruses has been defined, reflecting current knowledge, and [incorporated into Lentivirus-GLUE](https://github.com/giffordlabcvr/Lentivirus-GLUE/blob/master/glue/build/core/lentiFeatures.glue).

## Lentivirus Reference Sequences

Lentivirus-GLUE contains **reference sequences** for all known lentivirus species. These reference sequences are linked to auxiliary data in [tabular format](https://github.com/giffordlabcvr/Lentivirus-GLUE/blob/master/tabular/core/lenti-reference-data.tsv).

This project includes 'master' reference sequences for each lentivirus species:

- **Primate group**: [HIV-1 (AF033819)](https://www.ncbi.nlm.nih.gov/nuccore/AF033819)
- **Equine group**: [EIA Virus (AF016316)](https://www.ncbi.nlm.nih.gov/nuccore/AF016316), etc.
- **Small Ruminant group**: [Small ruminant lentivirus (NC_001452)](https://www.ncbi.nlm.nih.gov/nuccore/NC_001452), etc.
- **Feline group**: [FIV (M25381)](https://www.ncbi.nlm.nih.gov/nuccore/M25381), etc.
- **Bovine group**: [BIV (M32690)](https://www.ncbi.nlm.nih.gov/nuccore/M32690), etc.

Lentivirus genome features on master reference sequences can be found [here](https://github.com/giffordlabcvr/Lentivirus-GLUE/blob/master/glue/build/core/lentiMasterReferences.glue).

## Multiple Sequence Alignments (MSAs)

Multiple sequence alignments (MSAs) are the fundamental tool for comparative genomic analysis. MSAs in Lentivirus-GLUE are linked using GLUE's **constrained MSA tree** data structure, where the coordinate space is defined by a reference sequence. Insertions relative to the reference are recorded and stored, ensuring sequence data integrity.

An **alignment tree** links MSAs across taxonomic levels, using common reference sequences. The root alignment contains reference sequences for major clades, and child alignments inherit references from their parent.

![Alignment tree](../assets/images/lentivirus-msa-tree.png)

Example alignments include:

1. **Root alignment**: [lentivirus-root-gagpol](https://github.com/giffordlabcvr/Lentivirus-GLUE/blob/master/alignments/root/lentivirus-root-gagpol.aln.fna)
2. **Genus-level alignments**: Available [here](https://github.com/giffordlabcvr/Lentivirus-GLUE/tree/master/alignments/internal/)

## Lentivirus-GLUE Database Schema

Lentivirus-GLUE extends GLUE's [core schema](http://glue-tools.cvr.gla.ac.uk/#/coreSchema) by incorporating additional fields in the sequence table and a project-specific custom table called 'isolate'. The isolate table links to the main 'sequence' table and contains information about viral isolates, including species, date, and location of sampling. Schema extensions are defined [here](https://github.com/giffordlabcvr/Lentivirus-GLUE/blob/master/glue/build/core/lentiSchemaExtensions.glue).


## Usage

GLUE contains an interactive command line environment focused on the development and use of GLUE projects by bioinformaticians. This provides a range of productivity-oriented features such as automatic command completion, command history and interactive paging through tabular data. 

For detailed instructions on how to use Lentivirus-GLUE for your comparative genomic analysis, refer to the GLUE's [reference documentation](http://glue-tools.cvr.gla.ac.uk/).

## Contributing

We welcome contributions from the community! If you're interested in contributing to Lentivirus-GLUE, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)

## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

## Contact

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/Lentivirus-GLUE/issues).

