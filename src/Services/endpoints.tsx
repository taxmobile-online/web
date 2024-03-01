// User endpoints
const signInApi = "/auth/login";
const inviteTeamApi = "/user/invite";
const registerUserApi = "/auth/register";
const resetPasswordApi = "/auth/password";
const adminSignInApi = "/auth/admin/login";

// Admin endpoints
const pricingEndpoint = "/pricing";
const getSectionsEndpoint = "/section";
const getDocumentEndpoint = "/document";
const createSectionEndpoint = "/section";
const getSubSectionsEndpoint = "/section/sub";
const createSubSectionEndpoint = "/section/sub";
const getDocumentAccessEndpoint = "/document/token";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  // User endpoints
  inviteTeamApi,
  adminSignInApi,
  registerUserApi,
  pricingEndpoint,
  signInApi,
  resetPasswordApi,
  getDocumentEndpoint,
  getSectionsEndpoint,
  createSectionEndpoint,
  getSubSectionsEndpoint,
  createSubSectionEndpoint,
  getDocumentAccessEndpoint,
};
