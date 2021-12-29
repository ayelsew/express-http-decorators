import { MethodParameters, MethodType } from '@/declarations';
import Crud from './Crud';

const Put = (methodParamters?: MethodParameters) => Crud(MethodType.put, methodParamters);
export default Put;
