const modelAuth = require('../../Models/auth')
const respons = require('../../Helpers/StandarRespon')
const hash = require('../../Helpers/hash')

const Register = async (req, res) => {
    try {
        const check_email = await modelAuth.getEmail(req.body.email)
        if (check_email.length > 0) {
            respons(res, 400, 'email sudah terdaftar')
        } else {
            const data = { ...req.body, ...{ password: await hash(req.body.password) } }
            const result = await modelAuth.addUser(data)
            respons(res, 200, result)
        }
    } catch (error) {
        console.log(error)
    }
};
  
module.exports = Register;
  