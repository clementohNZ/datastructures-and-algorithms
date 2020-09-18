/**
 * Adapted from https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4
 */
class HashTable {
    constructor() {
        this._storage = [];
        this._count = 0;
        this._limit = 100;
    }

    /**
     * Insert an item into a hash table.
     *
     * @param key
     * @param value
     * @returns {HashTable}
     */
    insert(key, value) {
        // create an index for our storage location by passing it through our hashing function
        const index = this.hashFunc(key, this._limit);
        // retrieve the bucket at this particular index in our storage, if one exists
        // [
        //   [ [k,v], [k,v], [k,v] ], <--- bucket 1
        //   [ [k,v], [k,v] ], <--- bucket 2
        //   [ [k,v] ] <--- bucket 3
        // ]
        console.log('index from hash function', index)
        let bucket = this._storage[index];
        // does a bucket exist or do we get undefined when trying to retrieve said index?
        if (!bucket) {
            // create the bucket
            bucket = [];
            // insert the bucket into our hashTable
            this._storage[index] = bucket;
        }

        let override = false;
        // now iterate through our bucket to see if there are any conflicting
        // key value pairs within our bucket. If there are any, override them.
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            if (tuple[0] === key) {
                // override value stored at this key
                tuple[1] = value;
                override = true;
            }
        }

        if (!override) {
            // create a new tuple in our bucket
            // note that this could either be the new empty bucket we created above
            // or a bucket with other tuples with keys that are different than
            // the key of the tuple we are inserting. These tuples are in the same
            // bucket because their keys all equate to the same numeric index when
            // passing through our hash function.
            bucket.push([key, value]);
            this._count++;
            // now that we've added our new key/val pair to our storage
            // let's check to see if we need to resize our storage
            if (this._count > this._limit * 0.75) {
                this.resize(this._limit * 2);
            }
        }
        return this;
    };

    /**
     * Creates a new storage object with a new limit used for calculating
     * the numeric index at which buckets and therefore key-value pairs
     * should be stored.
     *
     * As the hash grows, we want to keep resizing the array so that we don't
     * have too many key-value pairs stored in any given bucket. Concentration of
     * values in a narrow range of buckets will increase likelihood of the hash
     * table algorithm will turning into an O(n) algorithm.
     *
     * @param newLimit - new artificial limit for array. I.e. max number of
     * buckets in the hash table.
     */
    resize(newLimit) {
        const oldStorage = this._storage;

        this._limit = newLimit;
        this._count = 0;
        this._storage = [];

        oldStorage.forEach((bucket) => {
            if (!bucket) {
                return;
            }
            for (let i = 0; i < bucket.length; i++) {
                const tuple = bucket[i];
                this.insert(tuple[0], tuple[1]);
            }
        });
    };

    /**
     * Given a key, generate a numeric index value that will fit
     * within our array. In JavaScript the arrays are dynamic in
     * nature so we've enforced an artificial limit at {@link this._limit}.
     *
     * This function should try and achieve a uniform distribution of values
     * across the full range of buckets. Concentration of values in a narrow
     * range of buckets will increase likelihood of the hash table algorithm
     * will turning into an O(n) algorithm.
     *
     * @param key - key used to store value.
     * @param max - maximum size of hash table.
     * @returns {number} index of bucket the key-value tuple should be stored in.
     */
    hashFunc(key, max) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            const letter = key[i];
            hash = (hash << 5) + letter.charCodeAt(0);
            hash = (hash & hash) % max;
        }
        return hash;
    };

    /**
     * Remove an item from the hash table.
     *
     * @param key
     * @returns {null|*}
     */
    remove(key) {
        const index = this.hashFunc(key, this._limit)
        const bucket = this._storage[index]
        if (!bucket) {
            return null;
        }
        // iterate over the bucket
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i];
            // check to see if key is inside bucket
            if (tuple[0] === key) {
                // if it is, get rid of this tuple
                bucket.splice(i, 1);
                this._count--;
                if (this._count < this._limit * 0.25) {
                    this.resize(this._limit / 2);
                }
                return tuple[1];
            }
        }
    };

    /**
     * Get an item from the hash table.
     *
     * @param key
     * @returns {null|*}
     */
    retrieve(key) {
        const index = this.hashFunc(key, this._limit)
        const bucket = this._storage[index]

        if (!bucket) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1];
            }
        }

        return null;
    };
}

const ht = new HashTable();
ht.insert('one', 1)
ht.insert('two', 2)
ht.insert('two', 3)
ht.insert('four', 'hello my name is...')
console.log(ht._storage)
console.log(ht.retrieve('one'))
ht.remove('two')
// make sure the array resizes
for (let i = 10; i > 0; i--) {
    ht.insert(i, i)
}
console.log(ht._storage)
