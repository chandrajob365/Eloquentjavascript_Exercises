// Returns an array of row heights, one for each row.
    function rowHeights(rows) {
      // Transform each row.
      return rows.map(function(row) {
        // Reduce row to a single number,
        // the height of the tallest cell.
        return row.reduce(function(max, cell) {
          // Return max or the height of the current cell,
          // whichever is larger.
          return Math.max(max, cell.minHeight());
        }, 0);
      });
    }

    // Returns array of minimum column widths,
    // one for each column.
    function colWidths(rows) {
      // Transform each column by looking at each
      // cell in the first row of the table.
      // An underscore means the argument will not be used.
      return rows[0].map(function(_, i) {
        // Reduce each column to a single number,
        // the width of the widest column. Do this
        // by returning max or the width
        // of cell row[i], whichever is larger.
        // By looking at row[i] in every row,
        // you will be able to look at every cell
        // in column i.
        return rows.reduce(function(max, row) {
          return Math.max(max, row[i].minWidth());
        }, 0);
      });
    }
    // Given an array of rows, draws a table.
function drawTable(rows) {
  // Get an array of heights for each row.
  var heights = rowHeights(rows);
  // Get an array of widths for each column.
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    // Get a particular line across all blocks in a row,
    // joined by " ".
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  // Function for drawing a single row.
  function drawRow(row, rowNum) {
    // Turn a single row into blocks.
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    // For each line of content in a block,
    // return a string that goes across all blocks.
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    // Take each line of content,
    // and join them into a single string
    // separated by newlines. This is a full row.
    }).join("\n");
  }

  // Draw each row and join with newlines.
  return rows.map(drawRow).join("\n");
}
