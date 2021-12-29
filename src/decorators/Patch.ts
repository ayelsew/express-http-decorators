import { MethodParameters, MethodType } from '@/declarations';
import Crud from './Crud';

const Patch = (methodParamters?: MethodParameters) => Crud(MethodType.patch, methodParamters);
export default Patch;
