# Lentivirus-GLUE

<img src="md/lentivirus-glue-logo.png" align="right" alt="" width="280"/>

Welcome to the GitHub repository for **Lentivirus-GLUE**!

Lentiviruses (family *Retroviridae*, genus *Lentivirus*) are complex retroviruses that cause chronic, persistent infections in mammals, including humans. They are best known as the genus of retroviruses that includes **human immunodeficiency virus type 1 (HIV-1)**.

Lentivirus-GLUE is a sequence-oriented resource for comparative genomic analysis of lentiviruses (family *Retroviridae*, genus *Lentivirus*), developed using the **[GLUE](https://github.com/giffordlabcvr/gluetools)** software framework. 

GLUE is an open, integrated software toolkit that provides functionality for storage and interpretation of sequence data. It provides an extensible platform for implementing 'sequence-based resources' that represent the semantic links between sequences and other data items via a relational database. This minimises the requirement for labour-intensive pre-processing of data, and allows sequence-based analyses to be implemented in an efficient, standardised and reproducible way.

## Extension layers 

This **Lentivirus-GLUE**  project can be extended with additional layers, openly available via GitHub, including:

  - **[Lentivirus-GLUE-Primates](https://github.com/giffordlabcvr/Lentivirus-GLUE-Primates)**: all NCBI sequence data for primate lentiviruses, including HIV-1 and HIV-2.
  - **[Lentivirus-GLUE-SRLV](https://github.com/giffordlabcvr/Lentivirus-GLUE-SRLV)**: small ruminant lentiviruses (SRLVs), all NCBI sequence data plus curated metatdata and analysis logic.
  - **[Lentivirus-GLUE-EIAV](https://github.com/giffordlabcvr/Lentivirus-GLUE-EIAV)**: equine infectious anemia virus (EIAV), all NCBI sequence data.
  - **[Lentivirus-GLUE-FIV](https://github.com/giffordlabcvr/Lentivirus-GLUE-FIV)**: feline immunodeficiency viruses (FIVs), all NCBI sequence data.
  - **[Lentivirus-GLUE-ERV](https://github.com/giffordlabcvr/Lentivirus-GLUE-ERV)**: adds lentivirus sequences that occur as endogenous retroviruses (ERVs).

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

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

