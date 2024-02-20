## poetry 是什么

todo

[官网->](https://python-poetry.org/docs/)

## 安装 poetry

- 安装（需要 python3）

```sh
curl -sSL https://install.python-poetry.org | python3 -

# 若出现curl: (60) SSL certificate problem: certificate has expired
curl -sSLk https://install.python-poetry.org | python3 -
```

- 配置环境变量

```sh
vi ~/.zshrc_profile
source ~/.zshrc_profile
```

```text
# poetry
export PATH="/Users/xxx/.local/bin:$PATH"
```

```sh
source ~/.zshrc_profile
```

- 验证 poetry 版本

```sh
poetry --version
```

## 初始化工程

```sh
poetry install
```

## 本地开发

```sh
poetry run python3 xx.py
```
