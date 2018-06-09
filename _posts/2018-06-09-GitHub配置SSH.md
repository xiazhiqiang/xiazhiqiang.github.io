---
layout:     post
title:      GitHub配置SSH
subtitle:   Mac多个Git SSH配置
date:       2018-06-09
author:     Zhiqiang
header-img: img/post-bg/post-bg-git-ssh.png
catalog: true
tags:
    - Git
    - SSH
---

## 背景

公司有Gitlab仓库，个人有GitHub仓库，在配置GitHub SSH时就存在多个Git SSH的问题。

于是搜了相关资料解决了，因此总结一下，给遇到问题的人提供参考。

## 配置步骤

- git user配置
- Mac本地生成ssh key
- GitHub添加对应ssh key
- 把私钥添加到git
- 添加多个git ssh配置
- 验证是否成功连接


### git user配置

取消git user全局配置，将user配置放到每个repo配置中，避免多个账号remote pull push遇到问题
```
1.取消global
git config --global --unset user.name
git config --global --unset user.email

2.设置每个项目repo的自己的user.email
git config  user.email "xxxx@xx.com"
git config  user.name "xxxx"
```

### 本地生成ssh key

```
ssh-keygen -t rsa -C "xxx@xxx.com"
```
以上命令后，会让你输入ssh key的保存文件名，为了做区分，输入：`${HOME}/.ssh/id_rsa_github1`的绝对路径

然后会让你输入密码，这个是ssh文件的密码，直接回车即可。

此时，会在`${HOME}/.ssh`目录下看到你生成的两个文件：
- "id_rsa_github1"：私钥
- "id_rsa_github1.pub"：公钥

### GitHub添加对应ssh key

登录GitHub，找到输入ssh key的入口：

https://github.com/ -> Your profile -> edit profile -> SSH and GPG keys -> new SSH key

```
cat ~/.ssh/id_rsa_github1.pub
```

把以上输出的内容全部复制并粘贴到github仓库站点ssh管理页面key那栏，title随意自己，可以写"mac-github1"。

### 把私钥添加到git

本地运行
```
ssh-add -K ~/.ssh/id_rsa_github1
```

以上已经完成一个ssh key的添加了。

再添加其他仓库的，重复以上步骤即可，记得输入ssh key文件名的时候别重复了。

### 添加多个git ssh配置

在 ~/.ssh 目录下新建一个 config 文件
```
touch config
```
添加多个git ssh配置

```
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

```
# 下面是github的成功返回语句
$ ssh -T git@github.com
Hi XXXX! You've successfully authenticated, but GitHub does not provide shell access.

# 下面是gitlab的成功返回语句。
$ ssh -T git@xxxx.com
Welcome to GitLab, XXXX!

```

## 参考文档

- [Mac里添加多个git ssh](https://github.com/diamont1001/blog/issues/4)
- [Git多账号处理](https://gist.github.com/suziewong/4378434)
- [同一客户端下使用多个git账号](https://www.jianshu.com/p/89cb26e5c3e8)
- [Mac下配置GitHub SSH](https://www.jianshu.com/p/24acb3d8cf28)
