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

    /**
     * Loops through all the records of this.dataSet and performs the inputFunc for each
     * of them, expecting to return a value for each. this aims to emulate array.map from 
     * standard JS
     * 
     * @param inputFunc Callback function for mapping
     * @returns A Record variable with the specified generic type. Can be empty with Partial Utility type
     */
    map<R>(inputFunc: CallbackFunc<K, V, R>) : Partial<Record<K, R>> {
        let result: Partial<Record<K,R>> = {};
        return result;
    };
}
