## 背景

在 Web 中使用 video 标签，如果需要兼容多个浏览器，建议使用 mp4 h.264 编码格式。

如果 mp4 文件无法在浏览器中播放，很可能是编码格式不对，可通过 ffmpeg 进行转换。

## ffmpeg 安装

todo

## ffmpeg 转换

```sh
ffmpeg -i origin_video.mp4 -vcodec h264 output_video.mp4
```
