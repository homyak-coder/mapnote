export function removeElementAtIndex<T>(index: number, array: Array<T>): Array<T> {
  return array.filter((item: T, arrayIndex: number) => { return arrayIndex != index})
}


export function findElementIndex<T>(lookForValue: T, array: Array<T>): number {
  return array.findIndex((item: T) => { return lookForValue === item})
}
