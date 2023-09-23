
        // Function to fetch and display JSON data
        function fetchDataTable() {
            fetch('SAMPLEJS.json') // Replace with your server endpoint
                .then(response => response.json())
                .then(data => {
                    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

                    
                    table.innerHTML = '';
                    let sno=1;
                    // Loop 
                    data.forEach(item => {
                        const row = table.insertRow();
                        const serial=row.insertCell(0)
                        const nameCell = row.insertCell(1);
                        const ageCell = row.insertCell(2);

                        serial.textContent=sno++;
                        nameCell.textContent = item.Item;
                        ageCell.textContent = item.Price;
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        fetchDataTable();
    