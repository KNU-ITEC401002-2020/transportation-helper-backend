const functions = require('firebase-functions');
const api = require('./src');

exports.ceedupApi = functions
                        .region('asia-northeast1')
                        .runWith({timeoutSeconds: 20, memory: '128MB'})
                        .https.onRequest(api);