/* eslint-disable no-param-reassign */
export function Controller(name?: string) {
  return (constructor: Function) => {
    const resourceName = name || constructor.name;
    constructor.prototype.resourceName = resourceName.toLowerCase();
  };
}

export default Controller;
