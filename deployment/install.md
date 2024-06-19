---
title: 安装
icon: download
order: 1
category: 使用指南
tag:
  - 安装
---

## **开始安装**

### **常规部署**

1. 安装 [`Git`](https://git-scm.com/download/) 和 [`Python3.10+`](https://www.python.org/downloads/release/python-31010/) 环境

```bash
# 克隆项目到本地，轻雪使用Git进行版本管理，该步骤为必要项
git clone https://github.com/snowykami/LiteyukiBot --depth=1
# 切换到Bot目录下
cd LiteyukiBot
# 安装依赖
pip install -r requirements.txt
# 启动Bot
python main.py
```

> [!tip]
> 推荐使用虚拟环境来运行轻雪，以避免依赖冲突，你可以使用`python -m venv venv`来创建虚拟环境，然后使用`venv\Scripts\activate`来激活虚拟环境

### **使用Docker构建镜像部署**

1. 安装 [`Docker`](https://docs.docker.com/get-docker/)
2. 克隆项目 `git clone https://github.com/snowykami/LiteyukiBot`
3. 进入轻雪目录 `cd LiteyukiBot`
4. 构建镜像 `docker build -t liteyukibot .`
5. 启动容器 `docker run -p 20216:20216 -v $(pwd):/liteyukibot -v $(pwd)/.cache:/root/.cache liteyukibot`

> [!tip]
> Windows请使用项目绝对目录`/path/to/LiteyukiBot`代替`$(pwd)` <br>
> 若你修改了端口号请将`20216:20216`中的`20216`替换为你的端口号

### **使用TRSS Scripts部署**
 [TRSS_Liteyuki轻雪机器人管理脚本](https://timerainstarsky.github.io/TRSS_Liteyuki/)，该功能由TRSS提供支持，不是LiteyukiBot官方提供的功能，推荐使用`Arch Linux`


## **设备要求**

- Windows系统版本最低`Windows10+`/`Windows Server 2019+`
- Linux系统要支持Python3.10+，推荐`Ubuntu 20.04+`(~~别用你那b CentOS~~)
- CPU: 至少`1vCPU`
- 内存: Bot无其他插件会占用`300~500MB`，包括`chromium` `node`等进程，其他插件占用视具体插件而定，建议`1GB`以上
- 硬盘: 至少`1GB`空间

> [!warning]
> 如果设备上有多个环境，请使用`path/to/python -m pip install -r requirements.txt`来安装依赖，`path/to/python`为你的Python可执行文件路径

> [!warning]
> 轻雪的更新功能依赖Git，如果你没有安装Git直接下载源代码运行，你将无法使用更新功能

#### 其他问题请移步至[答疑](/deployment/fandq)