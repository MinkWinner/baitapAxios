function ApiService() {
  this.getData = function () {
    return axios({
      url: "https://6183cae691d76c00172d1b57.mockapi.io/api/products",
      method: "GET",
    });
  };
}
