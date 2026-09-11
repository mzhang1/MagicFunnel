export type CallbackFunc<K extends number | string | symbol, V, R> = (key: K, value: V) => R;

export class HashMap<K extends number | string | symbol, V>
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

    map<R>(inputFunc: CallbackFunc<K, V, R>) : Record<K, R> {
 
    };
}
