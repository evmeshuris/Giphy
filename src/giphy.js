export default class Giphy {
static getGif(input) {
  return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/search?api_key=bd5NRK4RWP6QTppdkZKurBeAm0jx0Mbe&q=${input}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        }else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
