import { Method, MethodParameters } from '../declarations';
import { HTTPFactory } from './HTTPFactory';

export function Post(methodParameters?: MethodParameters) { return HTTPFactory(Method.post, methodParameters); }
export function Patch(methodParameters?: MethodParameters) { return HTTPFactory(Method.patch, methodParameters); }
export function Delete(methodParameters?: MethodParameters) { return HTTPFactory(Method.delete, methodParameters); }
export function Get(methodParameters?: MethodParameters) { return HTTPFactory(Method.get, methodParameters); }
export function Put(methodParameters?: MethodParameters) { return HTTPFactory(Method.put, methodParameters); }

export * from './factory';
export * from './Controller';