export type CallbackFunc<K extends number | string | symbol, V, R> = (key: K, value: V) => R;

export class HashMap<K extends number | string | symbol, V>
{
    private dataSet: Map<K, V>;

    constructor();
    constructor(inputMap: Map<K, V>);
    constructor(inputMap?: Map<K, V>){
        this.dataSet = inputMap ?? new Map<K, V>();
    }

    get(key: K) : V | null | undefined {
        return this.dataSet.get(key);
    }

    set(key: K, value: V): void {
        this.dataSet.set(key, value);
    }

    count() : number {
        return this.dataSet.size;
    }

    map<R>(inputFunc: CallbackFunc<K, V, R>) : Map<K, R> {
        let result: Map<K, R> = new Map();
        this.dataSet.forEach((value: V, key: K) => {
            const recordResult: R = inputFunc(key, value);
            result.set(key, recordResult);
        });
        return result;
    }

    /**
     * Loops through all the records of this.dataSet and performs the inputFunc for each
     * of them, expecting to return a value for each. this aims to emulate array.map from 
     * standard JS and outputs records afterwards
     * 
     * @param inputFunc Callback function for mapping
     * @returns A Record variable with the specified generic type. Can be empty with Partial Utility type
     */
    recordMap<R>(inputFunc: CallbackFunc<K, V, R>) : Partial<Record<K, R>> {
        let result: Partial<Record<K, R>> = {};
        this.dataSet.forEach((value: V, key: K) => {
            const recordResult: R = inputFunc(key, value);
            result[key] = recordResult;
        });
        return result;
    };
}
