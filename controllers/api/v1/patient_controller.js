const Patient = require('../../../models/patients');

module.exports.createPatient = async function (req, res) {
    try {
        let patient = await Patient.findOne({ phone: req.body.phone });
        if (patient) {
            return res.status(200).json({
                success: true,
                body: patient,
                message: "User is already registered"
            })
        } else {
            patient = await Patient.create(req.body);
            patient.save();
        }
        return res.status(200).json({
            success: true,
            body: patient,
            message: "Patient is register successfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}