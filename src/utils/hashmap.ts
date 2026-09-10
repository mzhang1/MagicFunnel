export class HashMap<K, V>
{
    private dataSet;

    constructor();
    constructor(inputMap: Map<K, V>);
    constructor(inputMap?: Map<K, V>){
        this.dataSet = inputMap ?? new Map<K, V>();
    }

    set(key: K, value: V): void {
        this.dataSet.set(key, value);
    }

    count() : number {
        return this.dataSet.size;
    }

    map<R>(inputFunc: <K, V, R>(key: K, value: V) => R) : R[] {
        const result: R[] = [];
        return result;
    };
}
