export class HashMap<K, V>
{
    private dataSet;

    constructor(){
        this.dataSet = new Map<K, V>();
    }

    set(key: K, value: V): void {
        this.dataSet.set(key, value);
    }

    count() : number {
        return this.dataSet.size;
    }
}
