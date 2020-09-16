function lowestOfThree(array1, array2, array3) {

    for (var i = 0; i < array1.length; i++) {
        var myNum = array1[i];
        if (array2.indexOf(myNum) != -1) {
            if (array3.indexOf(myNum) != -1) {
                return array1[i];
            }
        }
    }
    return false;
}
