const Doctor = require('../../../models/docter');



module.exports.getApi = async function(req, res){
    try {
        return res.status(200).json({
            message: "We get post",
            post: []
        })
    } catch (error) {
        
    }
}
module.exports.registerDoctor = async function(req, res){
    try {
        let createDoctor = await Doctor.findOne({email: req.body.email});
        if (!createDoctor){
            await Doctor.create(req.body)
        }
        return res.status(200).json({
            success: true,
            body: createDoctor,
            message: "Doctor register succesfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}

module.exports.createSession = async function(req, res){
    try {
        let findDoctor = await Doctor.findOne({email: req.body.email});
        if(!findDoctor || findDoctor.password !== req.body.password){
            return res.status(422).json({
                message: "Invalid use name or password"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Login Successfully"
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports.Login = async function(req, res){
    try {
        let doctor = await Doctor.findOne({email: req.body.email});
        if (doctor){
            return res.status(200).json({
                message: "Login successfully"
            })
        }else{
            return res.status(400).json({
                message: "Incorrect Email or password has entered",
                doctor
            })
        }
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}