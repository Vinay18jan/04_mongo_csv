const fs = require('fs');
const path = require('path');
const papa = require('papaparse');
const User = require('../models/User');
const Agent = require('../models/Agent');
const PolicyCarrier = require('../models/PolicyCarrier');
const PolicyCategory = require('../models/PolicyCategory');
const UserAccount = require('../models/UserAccount');
const PolicyInfo = require('../models/PolicyInfo');
const Host = require('../models/Host');
const Log = require('../models/Log');

exports.importCSV = async (req, res, next) => {
    try {
        const fileContents = fs.readFileSync(path.join('data/Sample.csv'), { encoding: 'utf-8' });
        const result = papa.parse(fileContents, {
            header: true
        });

        for (let index = 0; index < result?.data?.length; index++) {
            const element = result?.data[index];
            //insert agent info
            const _agent = await Agent.create(element);
            //insert user info
            const _user = await User.create(element);
            //insert users account info
            const _userAccount = await UserAccount.create(element);
            //insert policy category info
            const _policyCategory = await PolicyCategory.create(element);
            //insert policy carrier info
            const _policyCarrier = await PolicyCarrier.create(element);
            //insert policy info
            element.policyCategoryId = _policyCategory._id;
            element.policyCarrierId = _policyCarrier._id;
            element.userId = _user._id;
            const policyInfo = await PolicyInfo.create(element);
        }
        res.status(200).json({
            message: 'Success'
        })
    } catch (err) {
        console.error(err);
        res.status(401).json({
            message: err
        });
    }
}

exports.Log = async(req, res, next) => {
    try {
        req.body.forEach(async(element, index) => {
            element.ipaddr = req.connection.remoteAddress;
            const host = await Host.create(element);
            element.hostId = host._id;
            const log = await Log.create(element);
        });
        res.status(200).json({
            message: 'Success'
        })
    } catch (err) {
        
    }
}

exports.getPolicyInfo = async(req, res, next) => {
    try {
        let policyInfo;
        const userName = (req.params.username.replace('%20', ''));
        const user = await User.findOne({ firstname: userName });
        if(user) {
            const {_doc: userid} = {...user};
            policyInfo = await PolicyInfo.findById("6001cb0e9540903ee85af6de").select('policy_number');
            console.log(policyInfo);
            res.status(200).json({
                message: 'Success',
                data: policyInfo
            });
        } 
        else {
            res.status(200).json({
                message: 'Record doesnot exists'
            });
        }
            
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err
        });
    }
}

exports.getAggregatePolicy = async(req, res, next) => {
    try {
        const policyInfo = await PolicyInfo.find();
        const obj = policyInfo.aggregate(
            {
                $match: {  }
            },
            {
                $group: {
                    _id: '+'
                }
            }
        );
    } catch (err) {
        
    }
}