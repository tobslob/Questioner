import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
    /**
     * Hash Password Method
     * @param {string} Password
     * @returns {string} returns hashed password
     */
    hashPassword(password) { 
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    /**
     * compare Password
     * @param {string} hashPassword
     * @param {string} password
     * @returns {Boolean} return True or False
     */
    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    },

    /**
     * isValidEmail helper method
     * @param {string} email
     * @retuns {Boolean} True or False
     */
    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    },

    /**
     * Generate Token
     * @params {string} id
     * @params {string} token
     */
    generateToken(id) {
        const token = jwt.sign({
            userId: id
        },
        process.env.SECRET, { expiresIn: '2d'}
        );
        return token;
    }
};

export default Helper;