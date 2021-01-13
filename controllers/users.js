const User = require('../models/User');
const Agent = require('../models/Agent');
const PolicyCarrier = require('../models/PolicyCarrier');
const PolicyCategory = require('../models/PolicyCategory');
const UserAccount = require('../models/UserAccount');
const PolicyInfo = require('../models/PolicyInfo');

exports.importCSV = async(req, res, next) => {
    console.log(req.body);
}