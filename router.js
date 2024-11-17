function route(pathname, handle, response, productId) {
    console.log('pathname : ' + pathname);

    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    }else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found');
        response.end();
    }
    
}

exports.route = route;
// 내가 만든 route() 함수도 이 파일 바깥에서 사용할 수 있게 해줘.
// 경로에 따라서 경로에 따른 일을 해주는 것 뿐