### 1.Centos下安装Node.js

yum安装⽅法 https://rpm.nodesource.com/

```
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
yum install -y nodejs
node -v
```

### 2.Centos下安装vscode并生成快捷方式

```
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo yum check-update
sudo yum install code
```

vscode快捷方式：位置 -> 计算机 -> 进入 /usr/share/applications 文件夹 -> 找到 Visual Studio Code -> 复制到桌面 -> 在桌面双击启动并 Trust and Launch

### 3.yum下载慢的解决方式

```
yum clean all
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
yum makecache
yum update -y
```

### 4.Centos下安装xampp集成环境

```
1、通过以下两种方式下载xampp
https://www.apachefriends.org/index.html
wget https://excellmedia.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.3.10/xampp-linux-x64-7.3.10-0-installer.run
2、移动到opt目录下
mv xampp-linux-x64-7.3.10-0-installer.run /opt
3、安装前，需要先给xampp安装包可执行的权限
chmod 777 xampp-linux-x64-7.3.10-0-installer.run
4、运行 ./xampp-linux-x64-7.3.10-0-installer.run 进行安装操作。
5、环境安装完成后，通过sudo /opt/lampp/lampp security依次设定密码

```

<img src="C:\Users\xuw-i\AppData\Roaming\Typora\typora-user-images\1570791569925.png" alt="1570791569925" style="zoom:67%;" />

```
6、安装完成后通过systemctl stop firewalld.service关闭防火墙既可以通过主机访问虚拟机的地址来查看是否安装成功。
7、启动xampp：
/opt/lampp/lampp start
8、停止xampp：
/opt/lampp/lampp stop
9、卸载xampp：
/opt/lampp/lampp stop
rm -rf /opt/lampp
```

