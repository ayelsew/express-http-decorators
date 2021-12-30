import { ControllerException } from './ControllerException';
import type {  ResourceIdentifier } from './declarations';

export abstract class ControllerBase {
  protected resourceName: string = '';
  protected resourceIdentifier: ResourceIdentifier[] = [];

  public getResourceName(): string {
    return this.resourceName;
  }

  public getAllResourceIdentifier(): ResourceIdentifier[] {
    return this.resourceIdentifier;
  }

  public getResourceIdentifier(index: number): ResourceIdentifier | undefined {
    if (!Number.isInteger(index)) throw new ControllerException(`The index must be a real integer, but was given ${index} type ${typeof index}`);

    return this.resourceIdentifier ? this.resourceIdentifier[index] : undefined;
  }
}

export default ControllerBase;
