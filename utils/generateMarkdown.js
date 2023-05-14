// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  return `\n * [license](#license)\n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `\n## license\n
  ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}
  ${renderLicenseBadge(data.license)}
  # Description
  ${data.description}
  # Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Credits](#credits)
  * [Test](#test)
  

  ## installation
  ${data.installation}

  ## usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## credits
  ${data.credits}

  ## test
  ${data.test}


`;
}

module.exports = generateMarkdown;
