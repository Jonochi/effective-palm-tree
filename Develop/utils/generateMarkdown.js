// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var editedLicense = license.replace(" ", "_")
  return `
  [![Badge](https://img.shields.io/badge/License-${editedLicense}-green)](${renderLicenseLink(license)})`  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var editedLicense = license.replace(" ", "-")
  return `https://choosealicense.com/licenses/${editedLicense}/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return ""
  } else {
  return `${renderLicenseBadge(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Conttributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## Questions
For any questions, please reach out to github user [${data.github}](https://github.com/${data.github}) or email at ${data.email}

## License
${renderLicenseSection(data.license)} 
`;
}

module.exports = generateMarkdown;
