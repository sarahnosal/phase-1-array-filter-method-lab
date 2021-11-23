const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(collection, value) {
    return collection.filter( possibleMatch => 
        possibleMatch.toLowerCase() === value.toLowerCase())
    }
function fuzzyMatch(collection, value) {
    return collection.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(value.toLowerCase()) === 0)
}
function matchName(collection, value) {
    return collection.filter( drivers => drivers.name === value);
}