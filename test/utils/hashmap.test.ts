import { HashMap } from "@/utils/hashmap";

describe('Hashtable basic functions', () => {
    let hashmap: HashMap<number, string> = new HashMap<number, string>();
    it("should not be null", () => {
        expect(hashmap).not.toBeNull();
    });
});
