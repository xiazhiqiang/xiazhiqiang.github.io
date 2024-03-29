## 是什么

[Gradio](https://www.gradio.app/) 是一款功能强大的 Python 库，提供了多种主要功能，使其成为构建演示机器学习和数据科学应用的理想选择：

- 自动生成交互式界面：Gradio 能够自动生成漂亮且交互式的用户界面，无需额外的前端开发工作。通过简单的代码添加，你可以快速创建一个具有用户界面的应用程序，让用户能够直观地与你的机器学习模型或数据科学工作流进行交互。
- 简单集成：使用 Gradio，只需改动几行代码，即可将其集成到你的现有项目中。它与主流的机器学习框架（如 TensorFlow、PyTorch 等）和数据科学工具（如 Pandas、NumPy 等）兼容，使你能够轻松地将 Gradio 应用于你的工作流程中。
- 多种输入输出格式支持：Gradio 支持多种常见的输入和输出格式，以满足不同应用的需求。你可以轻松处理图像分类、文本生成、语音识别等任务，并根据需要进行自定义。Gradio 支持图像、文本、语音等各种输入类型，并能够输出预测结果、图像可视化、生成文本等多种输出格式。
- 外部网络访问：Gradio 支持生成能够通过外部网络访问的链接，方便与他人共享你的应用程序。你可以将生成的链接发送给朋友、同事或用户，让他们可以通过浏览器远程访问你的应用程序并进行交互。这为团队合作、演示展示和用户测试提供了便利。

## 安装

```sh
pip install gradio
```

## 基本使用

```python
import gradio as gr

def greet(name, intensity):
    return "Hello, " + name + "!" * int(intensity)

demo = gr.Interface(
    fn=greet,
    inputs=["text", "slider"],
    outputs=["text"],
)

demo.launch()
```

## 4 种类型界面

- 标准界面（独立的输入和输出）

```python
import gradio as gr

def test(text):
  return text

demo = gr.Interface(fn=test, inputs=[gr.Text()], outputs=["text"], title="", description="")
demo.launch()
```

- 只有输出

```python
import gradio as gr

def test():
  return 111

demo = gr.Interface(fn=test, inputs=None, outputs=gr.Text(), title="", description="")
demo.launch()
```

- 只有输入

```python
import gradio as gr

def test():
    print(f"Hello, world")

demo = gr.Interface(fn=test, inputs=gr.Text(), outputs=None)
demo.launch()
```

- 输入输出同一组件

```python
import gradio as gr


def generate_text(text_prompt):
  return text_prompt

textbox = gr.Textbox()
demo = gr.Interface(generate_text, textbox, textbox)

demo.launch()
```

## 界面状态

界面状态用于交互时的操作状态，分为全局状态和会话状态。
全局状态：方便被所有方法和用户所调用。
局部状态：

## 响应界面

> [快捷访问 →](https://www.gradio.app/guides/reactive-interfaces)

- 实时界面，通过 gr.Interface 方法传入 live=True，即可根据输入试试计算输出

```python
import gradio as gr

def calculator(num1, operation, num2):
    if operation == "add":
        return num1 + num2
    elif operation == "subtract":
        return num1 - num2
    elif operation == "multiply":
        return num1 * num2
    elif operation == "divide":
        return num1 / num2

demo = gr.Interface(
    calculator,
    [
        "number",
        gr.Radio(["add", "subtract", "multiply", "divide"]),
        "number"
    ],
    "number",
    live=True,
)
demo.launch()
```

- 流式组件

gr.Audio(source='microphone') 和 gr.Audio(source='microphone', Streaming=True) 之间的区别：
**当两者都在 gr.Interface(live=True) 中使用时，第一个组件会自动当用户停止录制时提交数据并运行接口函数，而第二个组件将在录制过程中不断发送数据并运行接口函数。**
