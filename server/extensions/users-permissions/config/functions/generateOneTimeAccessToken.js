const crypto = require('crypto');

/**
 *
 * @param {string} appKey - key, generated by WebSDK by requestOneTimeLoginKey(URI)
 * @param {string} hashToken - hash, computed by generateToken and/or stored in this service as voximplantapi.token
 * @returns {string} one time access token
 */
const generateOneTimeAccessToken = (appKey, hashToken) => {
  const md5 = crypto.createHash('md5');
  return md5.update(`${appKey}\|${hashToken}`).digest('hex');
};

module.exports = generateOneTimeAccessToken;
