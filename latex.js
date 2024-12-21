const { exec } = require('child_process');
const config = require('./config');

const compileLatex = (texFilePath, pdfOutputPath) => {
    return new Promise((resolve, reject) => {
            exec(`pdflatex --interaction=nonstopmode -output-directory=filePlan ${texFilePath}`, (error, stdout, stderr) => {
	    if (error) {
                reject(error);
                return;
            }
    	    resolve(pdfOutputPath);
	});
    });
};

module.exports = { compileLatex };
