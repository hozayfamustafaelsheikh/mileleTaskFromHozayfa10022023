import http from "../http-common";

class DatasDataService {
  getAll(data) {
    return http.post(`/datas/getAll`, data);
  }

  create(data) {
    return http.post("/datas", data);
  }

  update(id, data) {
    return http.put(`/datas/${id}`, data);
  }
}

export default new DatasDataService();