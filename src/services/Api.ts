import axios from 'axios';
import { config } from './Config';
// Set defaults config when creating the instance
const client = axios.create(config.api);
// Request interceptor
client.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle company APIs
const companyService = {
    // getCompanyDetails: Making a server request to get the company details
  async getCompanyDetails(query: string): Promise<any> {
    return await client.request({
      // `method` is the request method to be used when making the request
      method: 'get',
      // `url` is the server URL that will be used for the request
      url: `/v1/companies/suggest?query=${query}`,
    });
  },
};

export { companyService };
