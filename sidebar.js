const fs = require("fs");
const path = require("path");
const { minimatch } = require("minimatch");

// 指定文档目录
const docsDir = path.join(__dirname, "docs");

// 忽略的文件或目录的 glob 模式列表
const ignoredPatterns = [
  "**/+(.git|node_modules|public|img|xmind|pdf|video|README.md|_*.md)**",
];

// 检查路径是否匹配任何一个 glob 模式
function isIgnored(path) {
  return ignoredPatterns.some((pattern) => minimatch(path, pattern));
}

// 递归遍历文档目录生成_sidebar.md内容
function generateSidebar(dir, depth = 0) {
  let sidebar = "";

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (isIgnored(filePath)) {
      return; // 如果文件或目录被忽略，则跳过处理
    }

    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      sidebar += `${"  ".repeat(depth)}- ${file}\n`;
      sidebar += generateSidebar(filePath, depth + 1);
    } else if (path.extname(file) === ".md") {
      sidebar += `${"  ".repeat(depth)}- [${path.basename(
        file,
        ".md"
      )}](${path.relative(docsDir, filePath)})\n`;
    }
  });

  return sidebar;
}

// 生成_sidebar.md文件内容
const sidebarContent = generateSidebar(docsDir);

// 将内容写入_sidebar.md文件
fs.writeFileSync(path.join(docsDir, "_sidebar.md"), sidebarContent);

console.log("_sidebar.md 文件已生成。");
