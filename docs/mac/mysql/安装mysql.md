## MacOS12 安装 MySQL

- [下载 MySQL Community 对应版本](https://downloads.mysql.com/archives/community/)
  ![alt text](image.png)
- 安装初始化 root 密码，至少 8 位。
- 配置环境变量

  ```sh
  vi ~/.zshrc
  ```

  ```text
  # mysql
  export PATH=$PATH:/usr/local/mysql/bin
  ```

- 生效

  ```sh
  source ~/.zshrc
  ```

- 测试

  ```sh
  mysql --version
  ```

  ![alt text](image-1.png)

- 关闭 MySQL 服务
  ![alt text](image-2.png)
  ![alt text](image-3.png)
