'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[题目编号]必填 - Please enter new problem number');
  process.exit(1);
}
if (!process.argv[3]) {
  console.error('[题目名称]必填 - Please enter new problem name');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const problemNumber = process.argv[2];
const problemName = process.argv[3];
const chineseName = process.argv[4] || problemName;
const problemTags = process.argv[5] || '';
const problemParentFolderName = problemNumber % 100 === 0 ? `${problemNumber - 99}-${problemNumber}` : `${Math.floor(problemNumber / 100) * 100 + 1}-${Math.ceil(problemNumber / 100) * 100}`
const problemFolderPath = path.resolve(__dirname, '../../src', problemParentFolderName, `${problemNumber}.${problemName}`);
const problemTagsMarkdown = problemTags ? problemTags.split('、').map(tag => `\`${tag}\``).join(' ') : '';
const Files = [
  {
    filename: 'index.js',
    content: problemTags ? [
      `// ${problemNumber}. ${chineseName}`,
      `// ${problemTags}`
    ] : [`// ${problemNumber}. ${chineseName}`]
  },
  {
    filename: 'README.md',
    content: [
      `## ${problemNumber}. ${chineseName}\n`,
      `标签：${problemTagsMarkdown}\n`,
      '### 题解\n',
      '#### 解法一\n',
      '运行耗时：xx ms 内存消耗：xx MB\n',
      '```javascript',
      '```'
    ]
  },
];

// 添加到 dir.json
const dirFile = require('../../dir.json');
if (!dirFile[problemParentFolderName]) {
  dirFile[problemParentFolderName] = {};
}
if (dirFile[problemParentFolderName] && dirFile[problemParentFolderName][`${problemNumber}.${problemName}`]) {
  console.error(`${problemFolderPath} 已存在.`);
  process.exit(1);
}
dirFile[problemParentFolderName][`${problemNumber}.${problemName}`] = `${problemNumber}. ${chineseName}-${problemTags}`;
fileSave(path.join(__dirname, '../../dir.json'))
  .write(JSON.stringify(dirFile, null, '  '), 'utf8')
  .end('\n');

// 新建文件
Files.forEach(file => {
  fileSave(path.join(problemFolderPath, file.filename))
    .write(file.content.join('\n'), 'utf8')
    .end('\n');
});

console.log('DONE!');
