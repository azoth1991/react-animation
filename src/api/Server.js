/**
 * api接口抽象方法
 */
let serverRoot = 'http://interface.m.yhd.com/centralmobile/mobileservice/saleTop/';

class Server {

    static getSaleTopCategorys(data, callback) {
        FetchJsonp(serverRoot + 'getSaleTopCategorys.action', {
            data: data
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            callback(json);
        }).catch(function (exp) {
            callback({});
        })
    }

}

export default Server
