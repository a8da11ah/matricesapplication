
        
        var x1 = document.getElementById('x1');
        var y1 = document.getElementById('y1');
        var x2 = document.getElementById('x2');
        var y2 = document.getElementById('y2');

        var gridContainer = document.getElementById('grid-container');
        var gridContainer2 = document.getElementById('grid-container2');
        var gridContainer3 = document.getElementById('grid-container3');


        x2.addEventListener('input', function() {
        y1.value = x2.value; 
        handleXchange();
    });
        handleXchange();



        y1.addEventListener('input', function() {
        x2.value = y1.value;
        handleYchange()
    });
        handleYchange();



        //frist matrix 
        {
        x1.addEventListener('input', function() {
            generateGrid(x1, y1, gridContainer);
        });
           generateGrid(x1, y1, gridContainer);   
        }

        //second matrix
        {
       y2.addEventListener('input', function() {
           generateGrid(x2, y2, gridContainer2);
       });
          generateGrid(x2, y2, gridContainer2);   
       }

        //third matrix work correct 
        {
        x1.addEventListener('input', function() {
            generateGrid(x1, y2, gridContainer3);
        });
        y2.addEventListener('input', function() {
            generateGrid(x1, y2, gridContainer3);
        });

           generateGrid(x1, y2, gridContainer3);   
        }



        function handleYchange(){
            generateGrid(x1, y1, gridContainer);
            generateGrid(x2, y2, gridContainer2);
        }
        function handleXchange(){
            generateGrid(x2, y2, gridContainer2);
            generateGrid(x1, y1, gridContainer);
        }



        function generateGrid(row,column,container) {
        // Get the user input for rows and columns
        var rows = parseInt(row.value);
        var columns = parseInt(column.value);

        // Clear the existing grid
        // var gridContainer = document.getElementById(gridContainer2);

        container.innerHTML = '';

        // Create a new grid with the specified rows and columns
        for (var i = 0; i < rows; i++) {
            var row = document.createElement('div');
            row.classList.add('grid-row');
            for (var j = 0; j < columns; j++) {
                var cell = document.createElement('input');
                cell.classList.add('grid-cell');
                // cell.value = 0;
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
    }



        function sum_butn() {
            matrix1 = fristMatrixValues();
            // console.log(matrix1)
            matrix2 = secondMatrixValues();
            // console.log(matrix2)
            result = summation(matrix1,matrix2);
            retrunResult(result);
        }

        function sub_butn() {
            matrix1 = fristMatrixValues();
            // console.log(matrix1)
            matrix2 = secondMatrixValues();
            // console.log(matrix2)
            result = subtract(matrix1,matrix2);
            retrunResult(result);        
        }
        function div_butn() {
            matrix1 = fristMatrixValues();
            // console.log(matrix1)
            matrix2 = secondMatrixValues();
            // console.log(matrix2)
            result = division(matrix1,matrix2);
            retrunResult(result);        
        }
        function mult_butn() {
            matrix1 = fristMatrixValues();
            // console.log(matrix1)
            matrix2 = secondMatrixValues();
            // console.log(matrix2)
            result = multiplication(matrix1,matrix2);
            retrunResult(result);        
        }

        const inv1_butn = () => {
            matrix1 = fristMatrixValues();

            // if (hasInverse(matrix)) {
                result = inverse(matrix1);
                retrunResult(result);   
            // } else {
                
            // }
                 
        };

        function inv2_butn() {
            matrix1 = secondMatrixValues();

            // if (hasInverse(matrix)) {
                result = inverse(matrix1);
                retrunResult(result);   
            // } else {
                
            // }
                     
        }





        function fristMatrixValues() {
            let result = MatrixOfValues(x1,y1,gridContainer);
            return result;
        }
        function secondMatrixValues() {
            let result = MatrixOfValues(x2,y2,gridContainer2);
            return result;
        }
        function thirdMatrixValues() {
            let result = MatrixOfValues(x1,y2,gridContainer3);
            return result;
        }

        function retrunResult(matrix) {
            var rows = parseInt(matrix.length);
            var cols = parseInt(matrix[0].length);


            gridContainer3.innerHTML = '';

            for (var i = 0; i < rows; i++) {
                var row = document.createElement('div');
                row.classList.add('grid-row');
                for (var j = 0; j < cols; j++) {
                    var cell = document.createElement('input');
                    cell.value = matrix[i][j];
                    cell.classList.add('grid-cell');
                    row.appendChild(cell);
                }
                gridContainer3.appendChild(row);
            }

            
        }

        // الميثود الي راح ترجعلي القيم من المصفوفات  وترجعلي مصفوفة بيها القيم 
        // والي عليه انو انطيها عدد الاعمدة وعدد الصفوف والمكان الي توجد بيه المصفوفة
        function MatrixOfValues(row, column, container) {
            var rows = parseInt(row.value);
            var cols = parseInt(column.value);

        //  انشاء المصفوفة بحجم مناسب 
        const matrix = [];
        for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
        matrix[i].push(0);
        }
        }
        const matrixInputs = container.querySelectorAll(".grid-cell");

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j;  // Calculate index in the element list
                matrix[i][j] = parseFloat(matrixInputs[index].value) || 0;  
            }
        }
        // console.log(matrix)
        return matrix;
        }



        function summation(matrix1, matrix2) {

        // Create a new matrix to store the results
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
        // Add corresponding elements from each matrix
        result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
        }

        return result;
        }

        function subtract(matrix1, matrix2) {

        // Create a new matrix to store the results
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
        // Subtract corresponding elements from each matrix
        result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
        }

        return result;
        }
        function multiplication(matrix1, matrix2) {


        // Initialize result matrix with zeros
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
        result[i] = new Array(matrix2[0].length).fill(0);
        }

        // Perform element-wise multiplication and summation
        for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
        for (let k = 0; k < matrix1[0].length; k++) {
            result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
        }
        }

        return result;
        }


        function transpose(matrix) {
        // Initialize an empty transpose matrix
        const transpose = [];
        for (let i = 0; i < matrix[0].length; i++) {
          transpose.push([]);
        }
      
        // Iterate through rows and columns, swapping them for transpose
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            transpose[j][i] = matrix[i][j];
          }
        }
      
        return transpose;
        }


        function division(matrix1, matrix2) {

            // Create a new matrix to store the results
            const result = [];
            for (let i = 0; i < matrix1.length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix1[i].length; j++) {
            // Subtract corresponding elements from each matrix
            result[i][j] = matrix1[i][j] / matrix2[i][j];
            }
            }

            return result;
        }


        function determinant(matrix) {
            // Base cases for 1x1 and 2x2 matrices
            if (matrix.length === 1) {
              return matrix[0][0];
            } else if (matrix.length === 2) {
              return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
            }
          
            // Recursive case for higher dimensions (using Laplace expansion)
            let determinant = 0;
            for (let i = 0; i < matrix.length; i++) {
              const minorMatrix = getMinorMatrix(matrix, i, 0); // Get minor matrix excluding i-th row and 0-th column
              determinant += Math.pow(-1, i) * matrix[i][0] * findDeterminant(minorMatrix);
            }
          
            return determinant;
        }

        // Helper function to get the minor matrix
        function getMinorMatrix(matrix, row, column) {
          const minorMatrix = [];
          for (let i = 0; i < matrix.length; i++) {
            if (i === row) continue;
            minorMatrix.push(matrix[i].slice(0, column).concat(matrix[i].slice(column + 1)));
          }
          return minorMatrix;
      }


        function inverse(matrix) {

            // if (hasInverse(matrix)) {
                
            // } else {
                
            // Get the size of the matrix
            const n = matrix.length;
        
            // Create the identity matrix
            const identity = [];
            for (let i = 0; i < n; i++) {
                identity[i] = [];
                for (let j = 0; j < n; j++) {
                    identity[i][j] = (i === j) ? 1 : 0;
                }
            }
        
            // Perform Gauss-Jordan elimination
            for (let i = 0; i < n; i++) {
                // Find pivot
                let maxRow = i;
                for (let j = i + 1; j < n; j++) {
                    if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
                        maxRow = j;
                    }
                }
                // Swap rows
                [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
                [identity[i], identity[maxRow]] = [identity[maxRow], identity[i]];
        
                // Make the diagonal contain only 1
                const pivot = matrix[i][i];
                if (pivot === 0) {
                    throw new Error("Matrix is singular");
                }
                for (let j = 0; j < n; j++) {
                    matrix[i][j] /= pivot;
                    identity[i][j] /= pivot;
                }
        
                // Make other elements in the column 0
                for (let j = 0; j < n; j++) {
                    if (j !== i) {
                        const factor = matrix[j][i];
                        for (let k = 0; k < n; k++) {
                            matrix[j][k] -= factor * matrix[i][k];
                            identity[j][k] -= factor * identity[i][k];
                        }
                    }
                }
            }
        
            return identity;
            // }
            
        }

        function hasInverse(matrix) {
     
            const det = determinant(matrix);
        
            return det !== 0;
        }

    