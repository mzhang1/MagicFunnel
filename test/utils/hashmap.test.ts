import { HashMap } from "@/utils/hashmap";

describe('Hashtable basic functions', () => {
    let hashmap: HashMap<number, string> = new HashMap<number, string>();
    it("should not be null", () => {
        expect(hashmap).not.toBeNull();
    });

    it("should be able to receive data", () => {
        hashmap.set(1, "The Queen of Dale");
        hashmap.set(2, "The Royal Scions");
        hashmap.set(3, "Force of Will");
    });
});
