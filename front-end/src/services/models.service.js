import http from "../http-common";

class ModelsDataService {
  getAll() {
    return http.get(`/models`);
  }
}

export default new ModelsDataService();