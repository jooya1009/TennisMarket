let http = require('http'); /* node.js 가 가지고 있는 모듈 http를 변수 http에 넣는다. */
let url = require('url'); /* node.js 가 가지고 있는 모듈 http를 변수 http에 넣는다. */

function start(route, handle){
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse(request.url, true).query;

        route(pathname, handle, response, queryData.productId);
    }
    
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

exports.start = start;
// 내가 만든 start() 함수도 이 파일 바깥에서 사용할 수 있게 해줘.
// server는 request받고 reponse만 해주는 역할