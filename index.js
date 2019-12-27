var rp = require('request-promise');

var BASE_URL = "https://mails.wtf/api/";
var ENDPOINTS = {
    EMAIL_FIND_REQUEST: BASE_URL + "find_email",
    EMAIL_FIND_RESULT: BASE_URL + "find_email"
};

function mailsWTF(apiKey) {
    if (!apiKey) {
        throw new Error("API Key missing");
    }
    var self = this;
    self.apiKey = apiKey;
    self.headers = {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey
    };
}

function requestFindEmail(self, uri, first_name, last_name, domain) {
    var options = {
        method: 'POST',
        uri,
        headers: self.headers,
        body: {
            first_name,
            last_name,
            domain
        },
        json: true
    };

    return rp(options)
        .then(function (parsedBody) {
            return parsedBody;
        })
        .catch(function (err) {
            return Promise.reject(err);
        });
}

function requestGetEmail(self, uri, requestID) {
    var options = {
        method: "GET",
        uri,
        qs: {
            requestID
        },
        headers: self.headers,
        json: true
    };

    return rp(options)
        .then(function (parsedBody) {
            return parsedBody;
        })
        .catch(function (err) {
            return Promise.reject(err);
        });
}

mailsWTF.prototype.findEmail = function (first_name, last_name, domain) {
    return requestFindEmail(this, ENDPOINTS.EMAIL_FIND_REQUEST, first_name, last_name, domain);
};

mailsWTF.prototype.getEmail = function (requestID) {
    return requestGetEmail(this, ENDPOINTS.EMAIL_FIND_RESULT, requestID);
};


module.exports = mailsWTF;