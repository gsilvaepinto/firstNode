const fs = require('node:fs/promises');
const fileName = process.argv[4] || 'Project';

async function createFile() {
	try {
		await fs.mkdir(`${fileName}`);
		await fs.writeFile(`${fileName}/index.html`);
	} catch (error){
		if (error.code === 'EEXIST'){
			console.log('Directory already exists');
		} else {
			console.error('Error:', error);
		}
	}
}

createFile();
