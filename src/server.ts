process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import HomeRoute from './routes/home.route';

const app = new App([new IndexRoute(), new HomeRoute()]);

app.listen();
