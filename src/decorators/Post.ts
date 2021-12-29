import { MethodParameters, MethodType } from '@/declarations';
import Crud from './Crud';

const Post = (methodParamters?: MethodParameters) => Crud(MethodType.post, methodParamters);
export default Post;
