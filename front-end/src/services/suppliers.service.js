import http from "../http-common";

class SuppliersDataService {
  getAll() {
    return http.get(`/suppliers`);
  }
}

export default new SuppliersDataService();