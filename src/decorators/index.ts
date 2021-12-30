import { Method, MethodParameters } from '@/declarations';
import { HTTPFactory } from './HTTPFactory';

export const Post = (methodParameters?: MethodParameters) => HTTPFactory(Method.post, methodParameters);
export const Patch = (methodParameters?: MethodParameters) => HTTPFactory(Method.patch, methodParameters);
export const Delete = (methodParameters?: MethodParameters) => HTTPFactory(Method.delete, methodParameters);
export const Get = (methodParameters?: MethodParameters) => HTTPFactory(Method.get, methodParameters);
export const Put = (methodParameters?: MethodParameters) => HTTPFactory(Method.put, methodParameters);

export * from './factory';
export * from './Controller';