const fs = require('fs');
const path = require('path');

let tsFileCount = 0;

function calculateCyclomaticComplexity(code) {
  let complexity = 1;
  code = code.replace(/\s/g, '');

  //统计代码中的节点数，包括if、for、while、case、catch、elseif、三元运算、and、or等
  complexity += (code.match(/if/g) || []).length;
  complexity += (code.match(/for/g) || []).length;
  complexity += (code.match(/while/g) || []).length;
  complexity += (code.match(/case/g) || []).length;
  complexity += (code.match(/catch/g) || []).length;
  complexity += (code.match(/elseif/g) || []).length;
  complexity += (code.match(/\?\s*:\s*/g) || []).length;
  complexity += (code.match(/&&/g) || []).length;
  complexity += (code.match(/\|\|/g) || []).length;  
  return complexity;
}


// 异步函数，用于遍历目录并计算所有文件内容的总行数
async function countTotalcomplexityInDirectory(dirPath) {
  let totalcomplexity = 0; 
  
  // 读取目录中的文件和子目录
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

  for (let entry of entries) {
    const filePath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      
      const directoryLines = await countTotalcomplexityInDirectory(filePath);
      totalcomplexity += directoryLines;
    } else if (entry.isFile() && (filePath.endsWith(".ts") || filePath.endsWith(".ets"))) {
      
      const jscode = await fs.promises.readFile(filePath, 'utf8');

	  let count = calculateCyclomaticComplexity(jscode);
	  //console.log(count,'  ',filePath);
	  
	  const largeArrayCount = countLargeArrays(jscode, 100);
	  if (largeArrayCount >= 3) {
		  count+=10;
		  //console.log(count,' ******* ',filePath);
	  }
	  console.log(count,' ******* ',filePath);
	  tsFileCount++;
      totalcomplexity += count;
    }
  }

  return totalcomplexity;
}

// 获取当前工作目录
const currentDirectoryPath = process.cwd();

// 计算当前目录下所有文件内容的总行数
countTotalcomplexityInDirectory(currentDirectoryPath).then(totalcomplexity => {
  //console.log(`Total complexity in ${currentDirectoryPath}: ${totalcomplexity} / 10`);
  console.log('代码复杂度平均值为：', totalcomplexity / tsFileCount);

}).catch(error => {
  console.error('Error counting complexity:', error);
});

// 使用正则表达式匹配数组
function countLargeArrays(code, sizeThreshold) {
  // 正则表达式匹配形如 [1, 2, 3] 的数组
  const arrayRegex = /\[(.*?)\]/g;
  let match;
  let largeArrayCount = 0;

  while ((match = arrayRegex.exec(code)) !== null) {
    const arrayContent = match[0];
    const elements = arrayContent.slice(1, -1).split(',').map(element => element.trim()).filter(element => element.length > 0);
    const length = elements.length;
    if (length > sizeThreshold) {
      largeArrayCount++;
    }
  }
  return largeArrayCount;
}

