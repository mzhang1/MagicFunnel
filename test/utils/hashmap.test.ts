import { HashMap } from "./../../src/utils/hashmap";

describe('Hashtable check functions', () => {
    it("should not be null", () => {
        const hashmap: HashMap<number, string> = new HashMap<number, string>();
        expect(hashmap).not.toBeNull();
    })
});
