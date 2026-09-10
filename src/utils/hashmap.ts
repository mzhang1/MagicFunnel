export class HashMap<K, V>
{
    private dataSet = new Map<K, V>();

    constructor(){
        
    }

    set(keyValue: K, value: V): void {

    }

    count() : number {
        return this.dataSet.size;
    }
}
