// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    progress: {
        type: Object,
        default: {
            "Array Introduction": {
                arrayCreate: false
            },
            "Array Sorting": {
                bubbleSort: false,
                insertionSort: false,
                selectionSort: false,
                mergeSort: false
            },
            "Array Search": {
                linearSearch: false,
                binarySearch: false
            },
            "Array Update": {
                Insertion: false,
                Deletion: false
            },
            "Vector Introduction": {
                vectorIntro: false
            },
            "Vector Basic Operations": {
                pushBack: false,
                popBack: false,
                clear: false,
                size: false,
                "vector[i]": false,
                front: false,
                back: false,
                empty: false
            },
            "Vector Sort": {
                vecSort: false
            },

            "Vector Advanced Operations": {
                insert: false,
                erase: false,
                swap: false,
                begin_end: false,
                rbegin_rend: false,
                iterate: false,
                assign: false
            },
            "Deque Operations": {
                pushBack: false,
                pushFront: false,
                popBack: false,
                popFront: false
            },
            "list Introduction": {
                listIntro: false
            },
            "list Operations": {
                pushBack: false,
                pushFront: false,
                popBack: false,
                popFront: false,
                insert: false,
                remove: false,
                merge: false
            },
            "Map Introduction": {
                mapIntro: false,
                multimapIntro: false,
                unordered_mapIntro: false
            },
            "map Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false
            },

            "multimap Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false
            },

            "unordered_map Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false
            },
            "Set Introduction": {
                setIntro: false,
                multisetIntro: false,
                unordered_setIntro: false
            },
            "set Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false,
                lower_bound: false,
                upper_bound: false
            },

            "multiset Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false,
                lower_bound: false,
                upper_bound: false
            },

            "unordered_set Operations": {
                insert: false,
                emplace: false,
                count: false,
                find: false,
                erase: false,
            },

            "Stack Introduction": {
                stackIntro: false
            },

            "Stack Operations": {
                push: false,
                pop: false,
                top: false,
                empty: false,
                size: false,
                swap: false
            },
            
            "Queue Introduction": {
                queue: false,
                priority_queue: false
            }

        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
