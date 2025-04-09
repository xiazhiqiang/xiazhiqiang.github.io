# docker

## mac 下安装

- [links for old versions of Docker for Mac](https://gist.github.com/FranklinYu/5e0bb9d6c0d873f33c78415dd2ea4138)
- [10.14 下载 dmg](https://download.docker.com/mac/stable/48506/Docker.dmg)

```sh
brew install --cask --appdir=/Applications docker
```

## start

```
docker run --name repo alpine/git clone https://github.
com/docker/getting-started.git
docker cp repo:/git/getting-started/ .


cd getting-started
docker build -t docker101tutorial


docker run -d -p 80:80 --name docker-tutorial docker101tutorial

docker tag docker101tutorial /docker101tutorial
docker push /docker101tutorial
```

## 常用

```sh
docker system prune -af
```
