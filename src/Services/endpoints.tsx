// User endpoints
const registerUserApi = "/auth/register";
const resetPasswordApi = "/auth/password";
const signInApi = "/auth/login";
const adminSignInApi = "/auth/admin/login";
const inviteTeamApi = "/user/invite";

// Admin endpoints
const createSectionEndpoint = "/section";
const createSubSectionEndpoint = "/section/sub";
const getSectionsEndpoint = "/section";
const getSubSectionsEndpoint = "/section/sub";
const pricingEndpoint = "/pricing";
const getDocumentEndpoint = "/document";
const getDocumentAccessEndpoint = "/document/token";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  // User endpoints
  registerUserApi,
  resetPasswordApi,
  signInApi,
  adminSignInApi,
  inviteTeamApi,
  createSectionEndpoint,
  getSectionsEndpoint,
  getSubSectionsEndpoint,
  createSubSectionEndpoint,
  getDocumentEndpoint,
  getDocumentAccessEndpoint,
  pricingEndpoint,
};
