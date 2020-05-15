const fs = require('fs');
const rootPath = require('../../config');

const readDir = function (req, res) {
    console.log('Request to read directory');
    let path = rootPath;

    if(req.query.path!=undefined){
        path +=req.query.path;
    }
    console.log('Path: ' + path);
    
    let arr = []
    let pdfCount = 0, dirCount = 0;

    fs.readdir(path, { withFileTypes: true }, (err, files) => {

        if(err) {
            res.send({
                'message': 'error', 
                'data': 'Error reading directory: ' + path
            });
        }

        files.forEach(file => {
            const fileData = {'name': file.name, 'isDirectory': file.isDirectory()};

            // rearranging array so that directories appear before files
            if(file.isDirectory()) {
                arr.splice(dirCount, 0, fileData)
                dirCount ++;
            } else {
                arr.splice(dirCount + pdfCount, 0, fileData);
                pdfCount ++;
            }
        });

        res.send({
            'message': 'success',
            'data': arr,
            'pdfCount': pdfCount
        });

    });

}

module.exports = readDir;