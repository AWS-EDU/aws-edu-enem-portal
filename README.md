# AWS EDU ENEM Portal

## :wrench: Setup

To start developing, you must have NodeJS preinstalled.
We recommend using a version manager, like NVM.

1. Install [NVM](https://github.com/nvm-sh/nvm)
2. Using NVM, [install NodeJS 15.3.0](https://github.com/nvm-sh/nvm#usage)
3. Clone this project

 `git clone https://github.com/AWS-EDU/aws-edu-enem-portal.git`

4. Enter the directory and start VSCode (or your desired IDE) with

 `cd aws-edu-enem-portal; code .`

5. Edit the file `package.json` and change the project name, author, etc.
6. Install the dependencies with `npm install`.
7. Start the application with `npm start`.

__Notes: The QuickSight dashboard is not open to localhost, you will need to setup a domain and deploy the application.__

## :cloud: Deploying on AWS

1. `npm run build`.
2. `aws s3 cp build/ s3://<your-bucket>/ --recursive`

## :lock: Security

See [CONTRIBUTING](/CONTRIBUTING.md#security-issue-notifications) for more information.

## :scroll: License

This project is licensed under the MIT-0 License.
See the [LICENSE](/LICENSE) file.
