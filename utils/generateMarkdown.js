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
    return `### License
  ${renderLicenseLink(data.license)}`
  } else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
${data.desc}
\n
## Installation Instructions
${data.install}
\n
## Usage Information
${data.usage}
\n
## Contribution Guidelines
${data.contribution}
\n
## Test Instructions
${data.test}
\n
${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
