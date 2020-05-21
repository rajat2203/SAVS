
import React from 'react';
import './SortingVisualizer.css';
import { getQuickSortAnimations } from '../SortingAlgorithms/QuickSort';
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { getInsertionSortAnimations } from '../SortingAlgorithms/InsertionSort';
import { getSelectionSortAnimations } from '../SortingAlgorithms/SelectionSort';
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import { getCycleSortAnimations } from '../SortingAlgorithms/CycleSort';
import { getShellSortAnimations } from '../SortingAlgorithms/ShellSort';
import { getCocktailSortAnimations } from '../SortingAlgorithms/CocktailSort';
import { getCombSortAnimations } from '../SortingAlgorithms/CombSort';
import { getOddEvenSortSortAnimations } from '../SortingAlgorithms/OddEvenSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/HeapSort';
import { getBitonicSortAnimations } from '../SortingAlgorithms/BitonicSort';
import { getTimSortAnimations } from '../SortingAlgorithms/TimSort';
import { getBucketSortAnimations } from '../SortingAlgorithms/BucketSort';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
// parseInt convert string to integer, just like to_string();
// Total array bars to display
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 300) / 9);

function reportWindowSize() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
    NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 300) / 9);
}
//Whenever widows size changes, this function is called
// and value to WINDOWS (width,height) will change
window.onresize = reportWindowSize;

// primary colour == default colour of array bars
const PRIMARY_COLOR = '#FDCA40';
// secondary color == doing comparisions
const SECONDARY_COLOR = 'red';
// ternary colour == final colour of sorted array bars
const TERNARY_COLOR = '#7fff00';
// animation speed
const ANIMATION_SPEED_MS = 4;

// showing on hover text on buttons
const ENABLED_BUTTON = {
    nlogn: "O(NlogN)",
    nSquare: "O(N^2)",
    n: "O(N)"
}
const DISABLED_BUTTON = "Disabled"

// Generate random number b/w 2 limits
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//extends here means inheritance just like c++
// React.component to use react features
class SortingVisualizer extends React.Component {
    constructor(props) {
        // This is constructor, which initializes empty array
        super(props);
        this.state = {
            // Initializing empty array and later filled by calling reset function
            // after this array is passed to sotrting algorithm.js file 
            // where animation array is returned
            // which contain the 2 index to change colour
            array: []
        };
    }

    componentDidMount() {
        // Reset array
        this.resetArray();
    }
    // New array with random values
    // Just like rand() fubction in c++;
    resetArray() {
        this.disableSortButtons();
        //disable all button until new arr is generated
        const array_with_height = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array_with_height.push(randomIntFromInterval(25, WINDOW_HEIGHT - 80));
        }
        this.setState({ array: array_with_height });
        this.restoreStoreButtons();
    }

    disableSortButtons() {
        // This function will disable all sort button, when any one is clicked
        document.getElementById("bubbleSort").disabled = true;
        let buttonStyle = document.getElementById("bubbleSort").style;
        document.getElementById("bubbleSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("quickSort").disabled = true;
        buttonStyle = document.getElementById("quickSort").style;
        document.getElementById("quickSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("mergeSort").disabled = true;
        buttonStyle = document.getElementById("mergeSort").style;
        document.getElementById("mergeSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("heapSort").disabled = true;
        buttonStyle = document.getElementById("heapSort").style;
        document.getElementById("heapSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("insertionSort").disabled = true;
        buttonStyle = document.getElementById("insertionSort").style;
        document.getElementById("insertionSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("selectionSort").disabled = true;
        buttonStyle = document.getElementById("selectionSort").style;
        document.getElementById("selectionSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("shellSort").disabled = true;
        buttonStyle = document.getElementById("shellSort").style;
        document.getElementById("shellSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("cocktailSort").disabled = true;
        buttonStyle = document.getElementById("cocktailSort").style;
        document.getElementById("cocktailSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("combSort").disabled = true;
        buttonStyle = document.getElementById("combSort").style;
        document.getElementById("combSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("oeSort").disabled = true;
        buttonStyle = document.getElementById("oeSort").style;
        document.getElementById("oeSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("cycleSort").disabled = true;
        buttonStyle = document.getElementById("cycleSort").style;
        document.getElementById("cycleSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

    }

    restoreStoreButtons() {
        // This will enable all buttons, once sort is over
        document.getElementById("bubbleSort").disabled = false;
        let buttonStyle = document.getElementById("bubbleSort").style;
        document.getElementById("bubbleSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("quickSort").disabled = false;
        buttonStyle = document.getElementById("quickSort").style;
        document.getElementById("quickSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("mergeSort").disabled = false;
        buttonStyle = document.getElementById("mergeSort").style;
        document.getElementById("mergeSort").title = ENABLED_BUTTON.nlogn;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("heapSort").disabled = false;
        buttonStyle = document.getElementById("heapSort").style;
        document.getElementById("heapSort").title = ENABLED_BUTTON.nlogn;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("insertionSort").disabled = false;
        buttonStyle = document.getElementById("insertionSort").style;
        document.getElementById("insertionSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("selectionSort").disabled = false;
        buttonStyle = document.getElementById("selectionSort").style;
        document.getElementById("selectionSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("shellSort").disabled = false;
        buttonStyle = document.getElementById("shellSort").style;
        document.getElementById("shellSort").title = ENABLED_BUTTON.n;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("cocktailSort").disabled = false;
        buttonStyle = document.getElementById("cocktailSort").style;
        document.getElementById("cocktailSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("combSort").disabled = false;
        buttonStyle = document.getElementById("combSort").style;
        document.getElementById("combSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("oeSort").disabled = false;
        buttonStyle = document.getElementById("oeSort").style;
        document.getElementById("oeSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("cycleSort").disabled = false;
        buttonStyle = document.getElementById("cycleSort").style;
        document.getElementById("cycleSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";


    }

    bubbleSort() {
        this.disableSortButtons();
        const [animations] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);

                if (isColorChange === true) {
                    const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }

        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    quickSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length - 1; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 6 === 0) || (i % 6 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    if (barOneIndex === -1) {
                        continue;
                    }
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    mergeSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 3 !== 2);
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const color = (i % 3 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    //If we don't multiply by the index then every animations[i] wait for exactly ANIMATION_SPEED_MS and immediately change into final state
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);

                }
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    heapSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);

                if (isColorChange === true) {
                    const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }

        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    insertionSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [temp, barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [temp, barIndex, newHeight] = animations[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    selectionSort() {
        this.disableSortButtons();
        const [animations] = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [temp, barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [temp, barIndex, newHeight] = animations[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    shellSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getShellSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [temp, barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [temp, barIndex, newHeight] = animations[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    cocktailSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getCocktailSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }

        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    combSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getCombSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }

        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    oeSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getOddEvenSortSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            let [b1Index, b2Index] = animations[i];
            if (b1Index == -2) {
                const barTwoStyle = arrayBars[b2Index].style;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = TERNARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const isColorChange = (i % 4 === 0) || (i % 4 === 1);
                const arrayBars = document.getElementsByClassName('array-bar');
                if (isColorChange === true) {
                    const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const [barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * ANIMATION_SPEED_MS);
                }
                else {
                    const [barIndex, newHeight] = animations[i];
                    if (barIndex === -1) {
                        continue;
                    }
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
            }

        }

        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    cycleSort() {
    }

    render() {
        const array = this.state.array;
        const SORT_BUTTONS = 6;
        const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
        return (
            <>
                <span><div class="square" style={{ position: 'absolute', right: `1000px` }}></div> <div class="squareone" style={{ position: 'absolute', right: `840px` }}>Initial Unsorted Array</div> </span>

                <span><div class="square1" style={{ position: 'absolute', right: `750px` }}></div> <div class="squaretwo" style={{ position: 'absolute', right: `615px` }}>Final Sorted Array</div> </span>

                <span><div class="square2" style={{ position: 'absolute', right: `525px` }}></div> <div class="squarethree" style={{ position: 'absolute', right: `310px` }}>Comparing Two Index Values</div> </span>

                <span><div class="square3" style={{ position: 'absolute', right: `220px` }}>+</div> <div class="squarefour" style={{ position: 'absolute', right: `100px` }}>Random Values</div> </span>

                <div className="array-container" style={{ position: 'absolute', right: `20px` }}>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`
                            }}
                        ></div>
                    ))}
                </div>

                <div  >
                    <button className="main_button" title="Generates a new random array" style={{ position: 'relative', top: `${0 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.resetArray()}>
                        <span className="plussign"> + </span>New Array
                    </button>

                    <h2 className="main_algo_head">Algorithms</h2>

                    <button className="buttons" title="O(N^2)" id="bubbleSort" style={{ position: 'relative', top: `${0.10 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Bubble Sort
                    </button>

                    {/* Need to modify from this point */}

                    <button className="buttons" title="O(N^2)" id="quickSort" style={{ position: 'relative', top: `${0.45 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.quickSort()}>
                        Quick Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="mergeSort" style={{ position: 'relative', top: `${0.80 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.mergeSort()}>
                        Merge Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="heapSort" style={{ position: 'relative', top: `${1.15 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }}
                    //onClick={() => this.heapSort()}
                    >
                        Heap Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="insertionSort" style={{ position: 'relative', top: `${1.55 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.insertionSort()}>
                        Insertion Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="selectionSort" style={{ position: 'relative', top: `${1.90 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.selectionSort()}>
                        Selection Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="shellSort" style={{ position: 'relative', top: `${2.25 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.shellSort()}>
                        Shell Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="cocktailSort" style={{ position: 'relative', top: `${2.60 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.cocktailSort()}>
                        Cocktail Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="combSort" style={{ position: 'relative', top: `${2.95 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.combSort()}>
                        Comb Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="oeSort" style={{ position: 'relative', top: `${3.30 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.oeSort()}>
                        Odd-Even Sort
                    </button>

                    <button className="buttons" title="O(N^2)" id="cycleSort" style={{ position: 'relative', top: `${3.65 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }}
                    //onClick={() => this.cycleSort()}
                    >
                        Cycle Sort
                    </button>

                </div>
            </>
        );
    }
}



export default SortingVisualizer;
