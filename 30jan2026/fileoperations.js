const fs = require('fs');

fs.writeFile('demo.txt', 'Hello, this is a demo file.', (err) => {
    if (err) throw err;
    console.log('File created');

   
    fs.readFile('demo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

     
        fs.appendFile('demo.txt', '\nThis line is appended.', (err) => {
            if (err) throw err;
            console.log('Data appended');

            
            fs.readFile('demo.txt', 'utf8', (err, updatedData) => {
                if (err) throw err;
                console.log('Updated content:', updatedData);

                fs.unlink('demo.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted');
                });
            });
        });
    });
});
