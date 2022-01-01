import type { ResourceIdentifier } from './declarations';

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
    if (index >= 0 && index <= (this.resourceIdentifier.length - 1))
      return this.resourceIdentifier[index]

    return undefined;
  }

  public setResourceIdentifier(item: ResourceIdentifier): void {
    this.resourceIdentifier.push(item);
  }
}

export default ControllerBase;
