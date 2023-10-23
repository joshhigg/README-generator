function formatLicense(license) {
  // Replace spaces with underscores and convert to lowercase for badge format
  if (!license) {
    return { badgeFormat: '', linkFormat: '' }; // Return empty formats for undefined license
  }
  const badgeFormat = license.replace(/\s+/g, '_');

  // Replace spaces with dashes for link format
  const linkFormat = license.replace(/\s+/g, '-');

  return { badgeFormat, linkFormat };
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    const { badgeFormat } = formatLicense(license)
    return `![Github License](https://img.shields.io/badge/License-${badgeFormat}-blue.svg)`
  } else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    const { linkFormat } = formatLicense(license)
    return `[License Link](https://opensource.org/licenses/${linkFormat})`
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'None') {
    return `
<a id="License"></a>
## License
${renderLicenseLink(data.license)}`
  } else return ''
}

function renderLicenseTOC(data) {
  if (data.license !== 'None') {
    return `* [License](#License)`
  } else return ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description

${data.desc}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
${renderLicenseTOC(data)}
* [Questions](#Questions)

<a id="Installation"></a>
## Installation

${data.install}

<a id="Usage"></a>
## Usage

${data.usage}

<a id="Contributing"></a>
## Contributing

${data.contribution}

<a id="Tests"></a>
## Tests

${data.test}


${renderLicenseSection(data)}

<a id="Questions"></a>
### Questions
---
[GitHub Link](https://github.com/${data.username})

If you have any questions, feel free to contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;


