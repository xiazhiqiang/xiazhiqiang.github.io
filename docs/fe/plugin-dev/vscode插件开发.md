## 功能区域

![alt text](img/vscode1.png)
![alt text](img/vscode2.png)

## 插件能力

- 插件
- 主题

## 开发必备

[官网文档地址](https://code.visualstudio.com/api/references/vscode-api)

![alt text](img/vscode3.png)

### 命令行

- 安装工具并初始化

```sh
npm i -g generator-code yo
npx yo code
```

- 调试插件
  - 进入插件根目录，F5 或者启用 Debug（会打开一个新的窗口）
  - 在新窗口中，Command + Shift + P，输入插件注册的 command（Hello World）
  - 修改插件源码后，在调试新窗口中（Command + Shift + P），Reload Window 即可

![视频](video/vscode1.mp4 ":include controls=true width=100%")

### 颜色主题

- 安装工具并初始化

```sh
npm i -g yo generator-code
npx yo code
```

![alt text](img/vscode5.png ":size=100%")

- 测试主题插件
  - 进入插件根目录，F5 或者启用 Debug（会打开一个新的窗口）
  - 在新窗口中，Code > Preferences > Theme > Color Theme，可以看到颜色主题在列表中

### TreeView

- 配置 package.json 中的 contributes

```json
{
  "contributes": {
    "views": {
      "explorer": [
        {
          "id": "nodeDependencies",
          "name": "Node Dependencies"
        }
      ]
    }
  }
}
```

其中 views 下面的属性说明如下：

```text
explorer: 侧栏中的资源管理器视图
debug: 侧栏中的运行和调试视图
scm: 侧栏中的源代码管理视图
test: 侧栏中的测试资源管理器视图
```

## 发布插件

- 源码共享
- 发布到插件市场
- 打包成 vsix 包

### 打包 vsix 包

- 插件根目录下执行如下命令即可生成 vsix 包：

```sh
vsce package
```

### 安装 vsix 包

![alt text](img/vscode4.png)
