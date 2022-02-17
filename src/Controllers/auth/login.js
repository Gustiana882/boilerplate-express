const modelAuth = require('../../Models/auth')
const respons = require('../../Helpers/StandarRespon')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const token = async (email, role) => {
    try {
      const payload = {
        user: email,
        role: role || 'user',
      };
      const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });
      const result = {
        token,
        msg: 'Login Success',
        email,
      };
  
      return result;
    } catch (error) {
      throw error;
    }
  };

const Login = async (req, res) => {
    try {
        const user = await modelAuth.getEmail(req.body.email)
        if (user.length < 1) {
            respons(res, 400, 'email tidak terdaftar!')
        } else {
            const check_pass = await bcrypt.compare(req.body.password, user[0].password);
            if (check_pass) {
                const get_token = await token(user[0].email)
                respons(res, 200, get_token)
            } else {
                respons(res, 400, 'password salah')
            }
        }
    } catch (error) {
        console.log(error)
    }
};
  
module.exports = Login;
  