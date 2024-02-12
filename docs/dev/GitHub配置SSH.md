![](../public/img/bg/post-bg-git-ssh.jpg)

> mac 配置指南

## 背景

公司有 Gitlab 仓库，个人有 GitHub 仓库，在配置 GitHub SSH 时就存在多个 Git SSH 的问题。

于是搜了相关资料解决了，因此总结一下，给遇到问题的人提供参考。

## 配置步骤

- git user 配置
- Mac 本地生成 ssh key
- GitHub 添加对应 ssh key
- 把私钥添加到 git
- 添加多个 git ssh 配置
- 验证是否成功连接

### git user 配置

取消 git user 全局配置，将 user 配置放到每个 repo 配置中，避免多个账号 remote pull push 遇到问题

```sh
# 1.取消global
git config --global --unset user.name
git config --global --unset user.email

# 2.设置每个项目repo的自己的user.email
git config  user.email "xxxx@xx.com"
git config  user.name "xxxx"
```

### 本地生成 ssh key

```sh
ssh-keygen -t rsa -C "xxx@xxx.com"
```

以上命令后，会让你输入 ssh key 的保存文件名，为了做区分，输入：`${HOME}/.ssh/id_rsa_github1`的绝对路径

然后会让你输入密码，这个是 ssh 文件的密码，直接回车即可。

此时，会在`${HOME}/.ssh`目录下看到你生成的两个文件：

- "id_rsa_github1"：私钥
- "id_rsa_github1.pub"：公钥

### GitHub 添加对应 ssh key

登录 GitHub，找到输入 ssh key 的入口：

https://github.com/ -> Your profile -> edit profile -> SSH and GPG keys -> new SSH key

```sh
cat ~/.ssh/id_rsa_github1.pub
```

把以上输出的内容全部复制并粘贴到 github 仓库站点 ssh 管理页面 key 那栏，title 随意自己，可以写"mac-github1"。

### 把私钥添加到 git

本地运行

```sh
ssh-add -K ~/.ssh/id_rsa_github1
```

以上已经完成一个 ssh key 的添加了。

再添加其他仓库的，重复以上步骤即可，记得输入 ssh key 文件名的时候别重复了。

### 添加多个 git ssh 配置

在 ~/.ssh 目录下新建一个 config 文件

```sh
touch config
```

添加多个 git ssh 配置

```text
#github
Host github
HostName github.com
User xxx@xxx.com
IdentityFile ~/.ssh/id_rsa_github1

#gitlab
Host gitlab
HostName gitlab.xxxxx.com
User xxx@xxx.com
IdentityFile ~/.ssh/id_rsa_gitlab

#github2
Host github
HostName github.com
User xxx2@xxx.com
IdentityFile ~/.ssh/id_rsa_github2

#github3
Host github
HostName github.com
User xxx3@xxx.com
IdentityFile ~/.ssh/id_rsa_github3

# ...
```

### 验证是否成功连接

```sh
# 下面是github的成功返回语句
$ ssh -T git@github.com
Hi XXXX! You've successfully authenticated, but GitHub does not provide shell access.

# 下面是gitlab的成功返回语句。
$ ssh -T git@xxxx.com
Welcome to GitLab, XXXX!

```

## 参考文档

- [Mac 里添加多个 git ssh](https://github.com/diamont1001/blog/issues/4)
- [Git 多账号处理](https://gist.github.com/suziewong/4378434)
- [同一客户端下使用多个 git 账号](https://www.jianshu.com/p/89cb26e5c3e8)
- [Mac 下配置 GitHub SSH](https://www.jianshu.com/p/24acb3d8cf28)
- [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
- [github 操作从 ssh 转成 https](https://molunerfinn.com/git-ssh2https/#%E4%BB%8Essh%E5%88%B0https)
- [github 操作从 https 转成 ssh](https://blog.phpgao.com/github_https_to_ssh.html)
