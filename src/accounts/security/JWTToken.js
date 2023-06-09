import jwt from 'jsonwebtoken';

import TokenManager  from './TokenManager.js';

export default  class extends TokenManager {

  generate(payload) {
    console.log("method:::: ")
    return jwt.sign(payload, process.env.JWT_SECRET_KEY );
  }

  decode(accessToken) {
    return jwt.verify(accessToken,  process.env.JWT_SECRET_KEY);
  }
}
