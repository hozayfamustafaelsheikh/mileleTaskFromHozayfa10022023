import http from "../http-common";

class ColorsDataService {
  getAll() {
    return http.get(`/colors`);
  }
}

export default new ColorsDataService();