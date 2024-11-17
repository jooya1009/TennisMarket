let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandler.handle);
/* server 모듈의 start를 실행시킬 때 router 모듈이 가지고 있는 route를 전달한다. */

/* index는 모듈을 소환하는 역할과 서버를 기동시키는 역할만 함 */
