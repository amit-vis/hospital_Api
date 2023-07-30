const Report = require('../../../models/reports');

module.exports.createReport = async function(req, res){
    try {
        let createReport = await Report.find(req.body);
        if(!createReport){
            await Report.create(req.body);
        }
        return res.status(200).json({
            success: true,
            body: createReport,
            message: "Report has been created successfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server error"
        })
        
    }
}

module.exports.getReport = async function(req, res){
    try {
        let allReports = await Report.find({id: req.params.id});
        return res.status(200).json({
            message: "List of the reports",
            allReports
        }) 
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports.getStatus = async function(req, res){
    try {
        let status = await Report.find({status: req.body.status});
        return res.status(200).json({
            message: "List of the status",
            status
        })
    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}