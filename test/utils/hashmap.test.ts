import { HashMap } from "@/utils/hashmap";

describe('Hashtable basic functions', () => {
    let hashmap: HashMap<number, string> = new HashMap();
    it("should not be null", () => {
        expect(hashmap).not.toBeNull();
    });

    it("should be able to receive data", () => {
        hashmap.set(1, "The Queen of Dale");
        hashmap.set(2, "The Royal Scions");
        hashmap.set(3, "Force of Will");
        expect(hashmap.count()).toBe(3);
    });
});

describe('Hashtable map expected behavior', () => {
    it("should be able to output basic results correctly", () => {
        let simpleHashmap: HashMap<number, number> = new HashMap();
        simpleHashmap.set(0, 150);
        simpleHashmap.set(1, 300);
        simpleHashmap.set(2, 600);

        const double = (key: number, value: number) : number => {
            return value *= 2;
        };
        const result: Partial<Record<number, number>> = simpleHashmap.map<number>(double);
        expect(result[0]).toBe(300);
        expect(result[1]).toBe(600);
        expect(result[2]).toBe(1200);
    });
});
