// Function to allow user input to be changed to work in image and link
function formatLicense(license) {

  if (!license) {
    return { badgeFormat: '', linkFormat: '' }; // Return empty formats for undefined license
  }
  // Replace spaces with underscores for badge format
  const badgeFormat = license.replace(/\s+/g, '_');

  // Replace spaces with dashes for link format
  const linkFormat = license.replace(/\s+/g, '-');

  return { badgeFormat, linkFormat };
}

// Function to handle whether or not a license is selected
function renderLicenseBadge(license) {
  if(license !== 'None') {
    const { badgeFormat } = formatLicense(license)
    return `![Github License](https://img.shields.io/badge/License-${badgeFormat}-blue.svg)`
  } else return ''
}

// Function to display the license link, if needed
function renderLicenseLink(license) {
  if (license !== 'None') {
    const { linkFormat } = formatLicense(license)
    return `[License Link](https://opensource.org/licenses/${linkFormat})`
  } else return ''
}

// Created the license section, if needed
function renderLicenseSection(data) {
  if (data.license !== 'None') {
    return `
<a id="License"></a>
## License
${renderLicenseLink(data.license)}`
  } else return ''
}

// Creates the License in Table of contents, if needed
function renderLicenseTOC(data) {
  if (data.license !== 'None') {
    return `* [License](#License)`
  } else return ''
}


// Function to generate markdown for README
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

// Allow the file to be accessed by the index.js file
module.exports = generateMarkdown;


