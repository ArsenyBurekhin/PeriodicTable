import {GetTheElementColor} from './common.js';
// ... (Keep your existing code for sticky notes here)
function hideDiv(div)
{ 
    div.style.display = 'none';    
}
function showDiv(div) {
    div.style.display = 'grid';   
}
// Add this new function for generating the periodic table
function generatePeriodicTable() {
        const container = document.getElementById('periodic-table-container');
        hideDiv(document.getElementById('container'));
        showDiv(container);
        container.innerHTML = ''; // Clear existing content
        const cellSize = 65; // px
        const gap = 3; // px
        const rowOffset = 5; // px, space between rows
        container.style.position = 'relative';
        container.style.width = `${18 * (cellSize + gap)}px`;
        container.style.height = `${7 * (cellSize + gap + rowOffset)}px`; // Adjust based on number of rows
        if (elementsData != null) {
            console.log("we got elementsData in elementTable js")
            
        }
        const rowLimits = [2, 10, 18, 36, 54, 86, 118];
        const columnLookup = {
            0: [1, 3, 11, 19, 37, 55, 87],
            1: [4, 12, 20, 38, 56, 88],
            2: [21, 39, 57,89],
            3: [22, 40, 72, 104],
            4: [23, 41, 73, 105],
            5: [24, 42, 74, 106],
            6: [25, 43, 75, 107],
            7: [26, 44, 76, 108],
            8: [27, 45, 77, 109],
            9: [28, 46, 78, 110],
            10: [29, 47, 79, 111],
            11: [30, 48, 80, 112],
            12: [5, 13, 31, 49, 81, 113],
            13: [6, 14, 32, 50, 82, 114],
            14: [7, 15, 33, 51, 83, 115],
            15: [8, 16, 34, 52, 84, 116],
            16: [9, 17, 35, 53, 85, 117],
            17: [2, 10, 18, 36, 54, 86, 118]
        };
        function getColumn(periodicNumber) {
            for (let [column, numbers] of Object.entries(columnLookup)) {
                if (numbers.includes(periodicNumber)) {
                    return parseInt(column);
                }
            }
            return -1; // or any default value for elements not found
        }
        for ( var i = 0; i < elementsData.elements.length; i++){
            
            var element  = elementsData.elements[i];
            const row = rowLimits.findIndex(limit => element.periodicNumber <= limit);
            const column = getColumn(element.periodicNumber);
            if(column == -1)
            {
                continue;
            }
            const cell = document.createElement('div');
            cell.className = 'element-cell';
           // cell.textContent = element.symbol;// + " " + element.periodicNumber + "\n" + element.name + "\n"+ element.atomicWeight; 
            const text = `${element.symbol}   ${element.periodicNumber}\n${element.name}\n\n${element.atomicWeight}`;
            cell.textContent =text;
            console.log(text);
            cell.style.position = 'absolute';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.background = GetTheElementColor(element);
            cell.style.left = `${column * (cellSize + 2*gap)}px`;
            cell.style.top = `${row * (cellSize + gap + rowOffset)}px`;
            container.appendChild(cell);
            // Animate the appearance of each cell
            setTimeout(() => {
                cell.style.opacity = '1';
            }, i * 50);
        }
    
   
    
}

// Event listener for the "Generate Periodic Table" button
document.getElementById('generate-table').addEventListener('click', generatePeriodicTable);

  


// ... (Keep your existing event listener for the sticky note form)