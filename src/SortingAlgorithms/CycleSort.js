export function getCycleSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    cycleSort(auxillaryArray, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function cycleSort(auxillaryArray, animations) {
    let N = auxillaryArray.length;
    let writes = 0;
    for (let cycle_start = 0; cycle_start <= N - 2; cycle_start++) {
        let item = auxillaryArray[cycle_start];
        let pos = cycle_start;

        for (let i = cycle_start + 1; i < N; i++) {
            animations.push([i, cycle_start]);
            animations.push([i, cycle_start]);
            if (auxillaryArray[i] < auxillaryArray[cycle_start]) {
                pos++;
            }
        }

        if (pos == cycle_start) {
            animations.push([pos, cycle_start]);
            animations.push([pos, cycle_start]);
            continue;
        }

        while (auxillaryArray[cycle_start] == auxillaryArray[pos]) {
            animations.push([cycle_start, pos]);
            animations.push([cycle_start, pos]);
            pos++;
        }

        if (pos != cycle_start) {
            animations.push([cycle_start, pos]);
            animations.push([cycle_start, pos]);
            swap(auxillaryArray, cycle_start, pos);
            writes++;
        }

        while (pos != cycle_start) {
            pos = cycle_start;
            for (let i = cycle_start + 1; i < N; i++) {
                animations.push([i, cycle_start]);
                animations.push([i, cycle_start]);
                if (auxillaryArray[i] < item) {
                    pos++;
                }
            }

            while (item == auxillaryArray[pos]) {
                animations.push([cycle_start, pos]);
                animations.push([cycle_start, pos]);
                pos++;
            }

            if (item != auxillaryArray[pos]) {
                animations.push([cycle_start, pos]);
                animations.push([cycle_start, pos]);
                swap(auxillaryArray, cycle_start, pos);
                writes++;
            }
        }
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}