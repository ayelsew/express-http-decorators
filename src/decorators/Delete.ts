import { MethodParameters, MethodType } from '@/declarations';
import Crud from './Crud';

const Delete = (methodParamters?: MethodParameters) => Crud(MethodType.delete, methodParamters);
export default Delete;
