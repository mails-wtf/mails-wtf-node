<p align="center">
  <img src="https://mails.wtf/logo.png" alt="mails.wtf Email Finder">
  <br>
</p>

# Official Email Finding API library client for Node.js

Find anyone's email in seconds with upto 99% accuracy with mails.wtf

## Let's Get Started

First, you need to signup at [mails.wtf](https://mails.wtf) and create a FREE account. After you have signed-up, Visit the [API page](https://mails.wtf/dashboard/api) to get your API Key. You will need this API key for finding emails.

## Installation

Make sure you have [npm](https://npmjs.org) installed.

```bash
$ npm install email-finder
```

## Usage

```js
// Require the Library
const emailFinder = require('email-finder');

// Create instance by passing in API key
var mailsWTF = new emailFinder("API_KEY_HERE");
```

### Find Email Request
Enter First Name, Last Name and Domain to create a find an email request.

findEmail(first_name,last_name,domain)
```js
// Enter First Name, Last Name and Domain.
mailsWTF.findEmail("elon","musk","spacex.com")
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.log(e);
    });

// Output
// {
//   input: { first_name: 'elon', last_name: 'musk', domain: 'spacex.com' },
//   requestID: '5e049512e197270d2a59a8aX',
//   status: 'accepted'
// }
```

### Get Email Request
Enter the request ID to get the email found from a particular request.

getEmail(requestID)
```js
// Enter requestID obtained while Email Find request.
  mailsWTF.getEmail('5e049512e197270d2a59a8aX')
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.log(e);
    });

// Output
// {
//   requestID: '5e049512e197270d2a59a8aX',
//   email: 'elon_musk@spacex.com',
//   pending: 'false'
// }
```

### Response information

#### Find Email Request

A successful API call for Find Email Request responds with the following values:

- **input** `JSON` - Returns the details for which email needs to be found: `first_name`, `last_name`, `domain`
- **requestID** `string` - A requestID that needs to be stored so that Email can be requested for the particular request.
- **status** `string` - Status of the request `accepted`, `rejected`

#### Get Email Request

A successful API call for Get Email Request responds with the following values:

- **requestID** `string` - RequestID for the email find request.
- **email** `string` - Email Found(if any).
- **pending** `string` - Status of the request, if email finding task has been completed or not. `true`, `false`

## License
MIT

## Bug Reports
Report [here](https://github.com/mails-wtf/mails-wtf-node/issues).

## Need Help? Feel free to contact us
https://mails.wtf/contact-us