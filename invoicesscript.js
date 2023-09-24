// Function to fetch and display JSON data with dynamic table headings
function fetchDataTable() {
    fetch('SAMPLEJS.json') // Replace with your server endpoint
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

            table.innerHTML = '';
            let sno = 1;

            if (data.length > 0) {
                const firstRow = data[0]; // Assuming the first object has the table headings

                // Create the table headings dynamically (excluding Serial No)
                const thead = document.getElementById('data-table').getElementsByTagName('thead')[0];
                const headRow = thead.insertRow();
                
                // Add the "Serial No" heading manually
                const serialNoHeader = document.createElement('th');
                serialNoHeader.textContent = "Serial No";
                headRow.appendChild(serialNoHeader);

                // Iterate through the object properties (table headings) to populate the remaining headings
                for (const key in firstRow) {
                    if (key !== "Serial No" && firstRow.hasOwnProperty(key)) {
                        const th = document.createElement('th');
                        th.textContent = key;
                        headRow.appendChild(th);
                    }
                }

                // Loop through the data to populate the table
                data.forEach(item => {
                    const row = table.insertRow();
                    const serial = row.insertCell(0);

                    // Add Serial No to the first cell
                    serial.textContent = sno++;

                    // Iterate through the object properties (table headings) to populate the cells (excluding Serial No)
                    for (const key in item) {
                        if (key !== "Serial No" && item.hasOwnProperty(key)) {
                            const cell = row.insertCell();
                            cell.textContent = item[key];
                        }
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchDataTable();
