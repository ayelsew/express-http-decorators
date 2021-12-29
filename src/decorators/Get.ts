import { MethodParameters, MethodType } from '@/declarations';
import Crud from './Crud';

const Get = (methodParamters?: MethodParameters) => Crud(MethodType.get, methodParamters);
export default Get;
