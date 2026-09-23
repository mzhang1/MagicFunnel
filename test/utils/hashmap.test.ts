import { HashMap } from '@/utils/hashmap';

describe('Hashtable basic functions', () => {
    let hashmap: HashMap<number, string> = new HashMap();
    it('should not be null', () => {
        expect(hashmap).not.toBeNull();
    });

    it('should be able to receive data', () => {
        hashmap.set(1, 'The Queen of Dale');
        hashmap.set(2, 'The Royal Scions');
        hashmap.set(3, 'Force of Will');
        expect(hashmap.count()).toBe(3);
    });

    it('should be able to be constructed with map data', () => {
        let inputMap: Map<number, string> = new Map([
            [1, 'The Queen of Dale'],
            [2, 'The Royal Scions'],
            [3, 'Force of will']
        ]);
        let hashmap: HashMap<number, string> = new HashMap(inputMap);
        expect(hashmap.count()).toBe(3);
        expect(hashmap.get(1)).toBe('The Queen of Dale');
    });
});

describe('Hashtable map expected behavior', () => {
    it('should output enum keyed map values correctly', () => {
        enum Color {
            White = 1,
            Blue = 2,
            Black = 4,
            Red = 8,
            Green = 16
        };

        const MapValues: Map<Color, boolean> = new Map([
            [Color.White, true],
            [Color.Blue, true],
            [Color.Black, false],
            [Color.Red, true],
            [Color.Green, false]
        ]);
        const simpleHashmap = new HashMap(MapValues);
        const reverse = (key: Color, value: boolean) : boolean => {
            return !value;
        };
        const result: Map<Color, boolean> = simpleHashmap.map<boolean>(reverse);

        expect(result.get(Color.Black)).toBe(true);
        expect(result.get(Color.Blue)).toBe(false);
    });
});

describe('Hashtable recordMap expected behavior', () => {
    it('should be able to output basic results correctly', () => {
        let simpleHashmap: HashMap<number, number> = new HashMap();
        simpleHashmap.set(0, 150);
        simpleHashmap.set(1, 300);
        simpleHashmap.set(2, 600);

        const double = (key: number, value: number) : number => {
            return value *= 2;
        };
        const result: Partial<Record<number, number>> = simpleHashmap.recordMap<number>(double);
        expect(result[0]).toBe(300);
        expect(result[1]).toBe(600);
        expect(result[2]).toBe(1200);
    });

    it('should be able to receive non number keys', () => {
        let simpleHashmap: HashMap<string, number> = new HashMap();
        simpleHashmap.set('a', 150);
        simpleHashmap.set('b', 300);
        simpleHashmap.set('c', 600);

        const double = (key: string, value: number) : number => {
            return value *= 2;
        };
        const result: Partial<Record<string, number>> = simpleHashmap.recordMap<number>(double);
        expect(result['a']).toBe(300);
        expect(result['b']).toBe(600);
        expect(result['c']).toBe(1200);
    });
});
