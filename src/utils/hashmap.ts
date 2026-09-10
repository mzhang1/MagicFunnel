export class HashMap<K, V>
{
    private dataSet = new Map<K, V>();

    constructor(){
        
    }

    set(key: K, value: V): void {
        this.dataSet.set(key, value);
    }

    count() : number {
        return this.dataSet.size;
    }
}
