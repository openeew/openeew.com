---
id: contributing
title: Contributing
sidebar_label: Contributing
---

We are now welcoming contributors to collaborate. If this is your first time contributing an open source project, consider reading about "[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)" and "[Building Welcoming Communities](https://opensource.guide/building-community/)" because these are the guiding prinicples of OpenEEW.

## Code of Conduct
OpenEEW has adopted a Code of Conduct that we expect project participants to adher to. Please red [the full text](https://github.com/openeew/openeew/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Get Involved
There are many ways to contribute to OpenEEW and many of them do not involve writing code or building hardware. Here's a few ideas to get started:

- Start using OpenEEW! Get yourself a sensor, download software and send alerts. Does everything work as expected? If not, we're always looking for improvements. Let us know by [opening an issue](/#reporting-new-issues).
- Add your sensor to an existing OpenEEW network. [Look for nearby networks](/), contact the administrator, and offer to route your data. This is a fantastic way to strengthen regional OpenEEW projects.
- Help us make the docs better. File an issue if you find anything confusing or can be improved.
- Take a look at features requested by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome. If you think you need help planning your contribution, please [join our Slack channel](https://join.slack.com/t/openeew/shared_invite/zt-cibhc0za-XKReMPobi2DsrPusORJZVQ) or [send us an email](mailto:hello@openeew.com) and let us know you are looking for a bit of help.

## Our development process
OpenEEW uses [GitHub](https://github.com/openeew/) as its source of truth. The core team will be working directly there. All changes will be public from the beginning.

### Reporting new issues
When opening a new issue, always make sure to fill out the issue template. This step is very important! Not doing so may result in your issue not managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template.

- One issue, one bug: Please report a single bug per issue.
- Provide reproduction steps: List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

### Reporting bugs
We use GitHub Issues for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you a are certain this is a new, unreported bug, you can submit a bug report.

If you have questions about using Docusaurus, contact the Docusaurus Twitter account at @docusaurus, and we will do our best to answer your questions.

You can also file issues as feature requests or enhancements. If you see anything you'd like to be implemented, create an issue with feature template

## Pull requests
### Your first pull request
So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

We have a list of beginner friendly issues to help you get your feet wet in the OpenEEW codebase and familiar with our contribution process. This is a great place to get started.

### Proposing a change
If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can also file an issue with [feature template](https://github.com/openeew/openeew/issues/new?template=feature.md/).

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Sending a pull request
Small pull requests are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.

Please make sure the following is done when submitting a pull request:

- Fork the repository and create your branch from master.
- Add the copyright notice to the top of any code new files you've added.
- Describe your test plan in your pull request description. Make sure to test your changes!
- Make sure your code lints (yarn prettier && yarn lint).
- Make sure your Jest tests pass (yarn test).
- If you haven't already, sign the CLA.

All pull requests should be opened against the master branch.

#### Test plan

#### Copyright header for source code
Copy and paste this to the top of your new file(s):
```
# =============================================================================
# Copyright OpenEEW
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# =============================================================================
```

### What happens next?
The core OpenEEW team will be monitoring for pull requests. Do help us by keeping pull requests consistent by following the guidelines above.

## License
By contributing to OpenEEW, you agree that your contributions will be licensed under its Apache 2 license.

## Resources
The Open Source Guides website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)
