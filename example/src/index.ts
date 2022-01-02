import express, { Router } from 'express';
import { autoloader } from 'express-decorator';
import Example from './controllers/Example';

const app = express();

app.use(autoloader([Example], Router(), (data) => {
  const { method, name, path } = data;
  console.log(`${method.toUpperCase()} ${name} ${path}`);
}))

app.listen(8888, () => {
  console.log('Express decorator on air at 127.0.0.1:8888')
})
