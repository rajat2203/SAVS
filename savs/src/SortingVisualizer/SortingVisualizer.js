
import React from 'react';
import './SortingVisualizer.css';
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
//Changing width,height accordingly with the browser
let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 300) / 8);

function reportWindowSize() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
    NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 8);
}
window.onresize = reportWindowSize; //TBD -> find a way to update state also when resized


const PRIMARY_COLOR = 'turquoise'; //Normal color of bars
const SECONDARY_COLOR = 'red'; //Color of bars when they are being compared
const ANIMATION_SPEED_MS = 3; //Animation Speed (how fast color changes, how fast height gets overwritten)

//Tooltips for buttons
const DISABLED_BUTTON = "Disabled"
const ENABLED_BUTTON = {
    nlogn: "O(NlogN)",
    nSquare: "O(N^2)",
    n: "O(N)"
}

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    //Generates new random array 
    resetArray() {
        const array = []
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(25, WINDOW_HEIGHT - 30));
        }
        this.setState({ array: array });
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

        document.getElementById("radixSort").disabled = true;
        buttonStyle = document.getElementById("radixSort").style;
        document.getElementById("radixSort").title = DISABLED_BUTTON;
        buttonStyle.cursor = "default";
        buttonStyle.background = "#000000";

        document.getElementById("bucketSort").disabled = true;
        buttonStyle = document.getElementById("bucketSort").style;
        document.getElementById("bucketSort").title = DISABLED_BUTTON;
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

        document.getElementById("radixSort").disabled = false;
        buttonStyle = document.getElementById("radixSort").style;
        document.getElementById("radixSort").title = ENABLED_BUTTON.n;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";

        document.getElementById("bucketSort").disabled = false;
        buttonStyle = document.getElementById("bucketSort").style;
        document.getElementById("bucketSort").title = ENABLED_BUTTON.nSquare;
        buttonStyle.background = "#47535E";
        buttonStyle.cursor = "pointer";


    }
    //Sorting Algorithms

    bubbleSort() {
        this.disableSortButtons();
        const [animations, sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
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
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS * animations.length / 2 + 3000);
        setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
    }

    render() {
        const array = this.state.array;
        const SORT_BUTTONS = 6;
        const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
        return (
            <>
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
                        Generate New Array
                    </button>

                    <h2 className="main_algo_head">Algorithms</h2>

                    <button className="buttons" title="O(N^2) Time Complexity" id="bubbleSort" style={{ position: 'relative', top: `${0.15 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Bubble Sort
                    </button>

                    {/* Need to modify from this point */}

                    <button className="buttons" title="O(N^2) Time Complexity" id="quickSort" style={{ position: 'relative', top: `${0.65 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Quick Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="mergeSort" style={{ position: 'relative', top: `${1.15 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Merge Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="heapSort" style={{ position: 'relative', top: `${1.65 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Heap Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="insertionSort" style={{ position: 'relative', top: `${2.15 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Insertion Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="selectionSort" style={{ position: 'relative', top: `${2.65 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Selection Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="radixSort" style={{ position: 'relative', top: `${3.15 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Radix Sort
                    </button>

                    <button className="buttons" title="O(N^2) Time Complexity" id="bucketSort" style={{ position: 'relative', top: `${3.65 * (WINDOW_HEIGHT - 20) / TOTAL_BUTTONS}px` }} onClick={() => this.bubbleSort()}>
                        Bucket Sort
                    </button>

                </div>
            </>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
