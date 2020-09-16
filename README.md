# AzaleaChallenge

A bit of logic for how I solved this.

Since a valid output must be an element common to all three arrays, it doesn't matter which array is evaluated first and any number that is outside the parameters of any of the three arrays (smaller than its smallest entry, larger than its largest entry) will not be a valid output, and can be ignored. So I can iterate over the arrays in any order and it won't be a problem. Since the arrays are already sorted, they can be evaluated left to right and whichever element is found that is in each array first will be the smallest element with the property. Given that is is simple to solve in a linear manner, iterating over the first array and searching for matching elements in both of the others.
