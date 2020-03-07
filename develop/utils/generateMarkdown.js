function generateMarkdown(data) {
  return `
# ${data.title} 
# Description
${data.description}
# Table of Contents
[Installation](#installation)<br />
[Tests](#tests)<br />
[Usage](#usage)<br />
[Contributing](#contributing)<br />
[License](#license)<br />
# Installation
Run this Snippet to run Dependencies
# Tests
Run the tests with this snippet
${data.tests}
# Usage
${data.usage}
# Contributing
How You Can Contribute <br />
${data.contributing}
# License <br />
${data.license}
# Questions
Any questions can be directed to me at andytaylor575@gmail.com
<br />
<img src = "${data.avatar_url}" alt = "Github Avatar" style = "border-radius: 50px"/>
<br />
![](https://img.shields.io/badge/License-${data.license}-important)
`;
}

module.exports = generateMarkdown;
