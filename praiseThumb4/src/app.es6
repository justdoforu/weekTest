import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import CONFIG from './config/config';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
const app = new Koa();

initController.init(app,router);

app.context.render = co.wrap(render({
    root:CONFIG.get('viewDir'),
    autoescape:true,
    cache:'memory',
    ext:"html"
}));

app.use(serve(CONFIG.get('staticDir')));

app.listen(CONFIG.get('port'));

export default app