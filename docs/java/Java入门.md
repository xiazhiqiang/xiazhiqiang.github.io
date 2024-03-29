![](../public/img/bg/post-bg-java-study.png)

> 一天掌握 Java 基本概念和语法

## Java 概述

### Java 特点

- Java 是面向对象语言，并具有跨平台特性，可以一次编译，到处运行
- 主要应用方向 Web 开发、Android 开发、客户端开发（面向政府和企业）
- Java 编写的客户端资源占用较多；GUI 库不算丰富；操作硬件方面不足，需要虚拟机支持

> 历史：Java 是 SUN 公司 1995 年推出的编程语言，成为大型互联网项目的首选；2009 年被甲骨文收购，获得 Java 版权。

### Java 跨平台原理

不同平台上安装了适合该平台的 JVM（Java 虚拟机）后，JVM 将 Java 编译后的.class 字节码文件，转换成对应平台的机器码运行。

![java跨平台原理图](../public/img/content/java跨平台原理.png)

### J2SE、J2EE、J2ME 区别

> 1998 年 12 月，SUN 公司发布了 Java 1.2，开始使用“Java 2” 这一名称，目前我们已经很少使用 1.2 之前的版本，所以通常所说的 Java 都是指 Java2。

- J2SE(Java 2 Platform Standard Edition) 标准版：J2SE 是 Java 的标准版，主要用于开发客户端（桌面应用软件），它包含了 Java 的核心类库，例如数据库连接、接口定义、输入/输出、网络编程等。
- J2EE(Java 2 Platform Enterprise Edition) 企业版：J2EE 是功能最丰富的一个版本，主要用于开发高访问量、大数据量、高并发量的网站；也可以用来开发技术比较庞杂的管理软件，例如 ERP 系统。
- J2ME(Java 2 Platform Micro Edition) 微型版：只包含 J2SE 中的一部分类，受平台影响比较大，主要用于嵌入式系统和移动平台的开发。

> Java5.0 版本后，J2SE、J2EE、J2ME 分别更名为 Java SE、Java EE、Java ME，由于习惯的原因，我们依然称之为 J2SE、J2EE、J2ME。

### Java 环境搭建

- JDK 安装
- 环境变量配置
- IntelliJ IDE 编辑器

#### JDK 安装

JDK（Java Development Kit）Java 开发工具箱：是一系列工具的集合，这些工具是编译 Java 源码、运行 Java 程序所必需的，例如 JVM、基础类库、编译器、打包工具等。

JDK 所提供的部分工具：

- java 编译器：javac
- java 解释器：java
- java 文档生成器：javadoc
- java 调试器：jdb

JDK 有不同的版本（J2SE、J2EE、J2ME），初学 Java，一般都选择 J2SE。

[下载 JDK8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)，如果安装具体的历史版本，点击下载链接下方的“Java Archive”进入选择安装，一般需要 Oracle 账号登录

#### 环境变量配置

```
# Mac下配置
sudo vi ~/.bash_profile

# 添加配置
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_151.jdk/Contents/Home
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME
export CLASSPATH
export PATH=$PATH:$JAVA_HOME/bin

# 生效
source ~/.bash_profile

# 验证是否成功
java -version
```

#### IntelliJ IDE

- [官网下载 IDE](https://www.jetbrains.com/idea/download/#section=mac)，选择 Ultimate 版
- [注册方法](http://idea.lanyus.com/)

### Java 第一个 Hello world

// todo

```java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

`Java 中主类名应该和要保存的 Java 文件名相同，也就是说，这里定义的类名是“Main”，则文件应该保存为”Main.java“`

### Java 类和对象的概念

在 Java 中，仅仅通过类来定义变量不会分配内存空间，必须使用 new 关键字来完成内存空间的分配。

在 Java 中，可以将完成某个功能的代码块定义为方法，将具有相似功能的方法定义在一个类中，也就是定义在一个源文件中（因为一个源文件只能包含一个公共的类），多个源文件可以位于一个文件夹，这个文件夹有特定的称呼，叫做包。

![java项目组织结构](../public/img/content/java项目组织结构.png)

### Java 类库

#### 类库及文档

[Java API 文档](http://www.oracle.com/technetwork/java/api/index.html)

Java 类库中有很多包：

- 以 java.\* 开头的是 Java 的核心包，所有程序都会使用这些包中的类；
- 以 javax._ 开头的是扩展包，x 是 extension 的意思，也就是扩展。虽然 javax._ 是对 java._ 的优化和扩展，但是由于 javax._ 使用的越来越多，很多程序都依赖于 javax._，所以 javax._ 也是核心的一部分了，也随 JDK 一起发布。
- 以 org.\* 开头的是各个机构或组织发布的包，因为这些组织很有影响力，它们的代码质量很高，所以也将它们开发的部分常用的类随 JDK 一起发布。

在包的命名方面，为了防止重名，有一个惯例：大家都以自己域名的倒写形式作为开头来为自己开发的包命名，例如百度发布的包会以 com.baidu._ 开头，w3c 组织发布的包会以 org.w3c._ 开头，微学苑发布的包会以 net.weixueyuan.\* 开头……

<table>
  <caption>java中常用的几个包介绍</caption>
  <tbody>
    <tr>
      <th>包名</th>
      <th>说明</th>
    </tr>
    <tr>
      <td>java.lang</td>
      <td>该包提供了Java编程的基础类，例如 Object、Math、String、StringBuffer、System、Thread等，不使用该包就很难编写Java代码了。</td>
    </tr>
    <tr>
      <td>java.util</td>
      <td>该包提供了包含集合框架、遗留的集合类、事件模型、日期和时间实施、国际化和各种实用工具类（字符串标记生成器、随机数生成器和位数组）。</td>
    </tr>
    <tr>
      <td>java.io</td>
      <td>该包通过文件系统、数据流和序列化提供系统的输入与输出。</td>
    </tr>
    <tr>
      <td>java.net</td>
      <td>该包提供实现网络应用与开发的类。</td>
    </tr>
    <tr>
      <td>java.sql</td>
      <td>该包提供了使用Java语言访问并处理存储在数据源（通常是一个关系型数据库）中的数据API。</td>
    </tr>
    <tr>
      <td>java.awt</td>
      <td colspan="1" rowspan="2">这两个包提供了GUI设计与开发的类。java.awt包提供了创建界面和绘制图形图像的所有类，而javax.swing包提供了一组“轻量级”的组件，尽量让这些组件在所有平台上的工作方式相同。</td>
    </tr>
    <tr>
      <td>javax.swing</td>
    </tr>
    <tr>
      <td>java.text</td>
      <td>提供了与自然语言无关的方式来处理文本、日期、数字和消息的类和接口。</td>
    </tr>
  </tbody>
</table>

#### 类库引用

如果你希望使用 Java 包中的类，就必须先使用 import 语句导入。

```java
import java.util.Date;  // 导入 java.util 包下的 Date 类
import java.util.*;  // 导入 java.util 包下的所有类
```

Java 引用类库搜索机制：

- import 语句中的路径寻找
- CLASSPATH 环境变量中寻找

> 如果在第一个路径下找到了所需的类文件，则停止搜索，否则继续搜索后面的路径，如果在所有的路径下都未能找到所需的类文件，则编译或运行出错。

## Java 基础语法

### 数据类型

<table>
  <caption>Java基本数据类型</caption>
  <tbody>
    <tr>
      <th width="80">数据类型</th>
      <th width="90">说明</th>
      <th width="80">所占内存</th>
      <th>举例</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>byte</td>
      <td>字节型</td>
      <td>1 byte</td>
      <td>3,&nbsp;127</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>short</td>
      <td>短整型</td>
      <td>2 bytes</td>
      <td>3,&nbsp;32767</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>int</td>
      <td>整型</td>
      <td>4 bytes</td>
      <td>3,&nbsp;21474836</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>long</td>
      <td>长整型</td>
      <td>8 bytes</td>
      <td>3L,&nbsp;92233720368L</td>
      <td>long最后要有一个L字母（大小写无所谓）。</td>
    </tr>
    <tr>
      <td>float</td>
      <td>单精度浮点型</td>
      <td>4 bytes</td>
      <td>1.2F,&nbsp;223.56F</td>
      <td>float最后要有一个F字母（大小写无所谓）。</td>
    </tr>
    <tr>
      <td>double</td>
      <td>双精度浮点型</td>
      <td>8 bytes</td>
      <td>1.2, 1.2D,&nbsp;223.56,&nbsp;223.56D</td>
      <td>double最后最好有一个D字母（大小写无所谓）。</td>
    </tr>
    <tr>
      <td>char</td>
      <td>字符型</td>
      <td>2 bytes</td>
      <td>'a', ‘A’</td>
      <td>字符型数据只能是一个字符，由单引号包围。</td>
    </tr>
    <tr>
      <td>boolean</td>
      <td>布尔型</td>
      <td>1 bit</td>
      <td>true, false</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>

> `注意：不带任何标志的浮点型数据，系统默认是 double 类型。`

示例用法：

```java
public class Main {

  public static void main(String[] args) {
    System.out.println("Hello World!");

    // 字符型
    char webName1 = 'A';
    char webName2 = 'B';
    char webName3 = 'C';
    System.out.println("名字是：" + webName1 + webName2 + webName3);

    // 整型
    short x = 22;  // 十进制
    int y = 022;  // 八进制
    long z = 0x22L;  // 十六进制
    System.out.println("转化成十进制：x = " + x + ", y = " + y + ", z = " + z);

    // 浮点型
    float m = 22.45f;
    double n = 10;
    System.out.println("计算乘积：" + m + " * " + n + "=" + m * n);
  }
}
```

自动数据类型转换：按从低到高的顺序转换。不同类型数据间的优先关系如下：

`低--------------------------------------------->高`

`byte,short,char -> int -> long -> float -> double`

### 运算符

Java 中的运算符和 C/C++相差无几：数学运算、关系运算符、位运算符、条件运算符（包括三目运算），此处略，不了解的可以看一下[Java 运算符](http://www.weixueyuan.net/view/6314.html)章节

### 流程控制

Java 流程控制的语法与 C/C++ 类似 if...else、while、do...while、for、switch...case 等，此处略。

---

### 练习

九九乘法表（右上角）

```java
public class Main {

  public static void main(String[] args) {
    // 九九乘法表
    int i, j;
    for (i = 1;i < 10;i++) {
        for (j = 1;j < 10;j++) {
            if (j < i) {
                System.out.print("        ");
            } else {
                System.out.printf("%d*%d=%2d  ", i, j, i*j);
            }
        }
        System.out.print("\n");
    }
  }
}
```

---

### 静态数组使用

几点说明：

> - 静态数组一旦被定义，它的容量就固定了，不容改变。所以在定义数组时，一定要考虑数组的最大容量，防止容量不够的现象。
> - 如果想在运行程序时改变容量，就需要用到数组列表(ArrayList，也称动态数组)或向量(Vector)。

正是由于静态数组容量固定的缺点，实际开发中使用频率不高，被 ArrayList 或 Vector 代替，因为实际开发中经常需要向数组中添加或删除元素，而它的容量不好预估。

#### 声明

```java
# 一维数组
int arr[];# 个人习惯用这种方式，下面统一用这种
int[] arr;

# 二维数组
int arr[][];
```

> Java 在声明数组时并不为数组元素分配内存，因此[]中无需指定数组元素的个数。

#### 初始化

##### 一维数组

```java
# 静态初始化
int arr1[];
arr1 = {1,2,3,4};
int arr2[] = {5,6,7};# 声明同时为数组初始化

# 动态初始化
int arr3[];
arr3 = new int[4];
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;
```

##### 二位数组

```java
# 静态初始化
int arr1[][];
arr1={ {1, 2}, {3, 4}, {5, 6} };

# 动态初始化
int arr2[][] = new int[3][2];
arr2[0][0] = 1;
arr2[0][1] = 2;

int arr3[][] = new int[2][];
arr3[0] = new int[3];
arr3[1] = new int[4];
```

> 静态初始化和 new 运算符，Java 会分配内存空间
> Java 把二维数组看作是数组的数组，数组空间不是连续分配的，所以不要求二维数组每一维的大小相同。

#### 数组取值和长度

- 取值：arr[index]
- 长度：arr.length

### 字符串使用

#### 声明

```java
String str = 'test';
String stringName = new String("abc");
```

不推荐第二种定义方式，因为实际上创建了两个 String 对象，一个是”abc”对象，存储在常量空间中，一个是使用 new 关键字为对象 stringName 申请的空间。

字符串可以通过“+”连接，基本数据类型与字符串进行“+”操作一般也会自动转换为字符串。

`String字符串与数组有一个共同点，就是它们被初始化后，长度是不变的，并且内容也不变。如果要改变它的值，就会产生一个新的字符串。`

```java
String str = "Hello ";
str += "World!";
```

其运行原理是：首先产生了 str1 字符串，并在内存中申请了一段空间。此时要追加新的字符串是不可能的，因为字符串被初始化后，长度是固定的。如果要改变它，只有放弃原来的空间，重新申请能够容纳“Hello World!”字符串的内存空间，然后将“Hello World!”字符串放到内存中。

#### 字符串操作

常用操作：

- str.length()：返回字符串长度
- str.charAt(index)：返回索引值对应的字符
- str.replace('origin 原始值', '新值')：用来替换字符串中所有指定的子串，不会改变原来数组，会生成一个新的字符串
- str.split('分隔符')：对当前字符串进行分割，分割的结果是一个数组

> 更多方法和详细解释请参考 API 文档。

#### StringBuffer 类

String 的值是不可变的，每次对 String 的操作都会生成新的 String 对象，不仅效率低，而且耗费大量内存空间。

StringBuffer 类和 String 类一样，也用来表示字符串，但是 StringBuffer 的内部实现方式和 String 不同，在进行字符串处理时，不生成新的对象，在内存使用上要优于 String。

StringBuffer 默认分配 16 字节长度的缓冲区，当字符串超过该大小时，会自动增加缓冲区长度，而不是生成新的对象。

```
// 分配16个字节长度的缓冲区
StringBuffer str1 = new StringBuffer();

// 分配512个字节长度的缓冲区
StringBuffer str2 = =new StringBuffer(512);

// 在缓冲区中存放了字符串，并在后面预留了16个字节长度的空缓冲区
StringBuffer str3 = new StringBuffer("abcdefg");
```

`StringBuffer类中的方法主要偏重于对于字符串的操作，例如追加、插入和删除等`

`StringBuffer的执行效率比String快上千倍，这个差异随着叠加次数的增加越来越明显，强烈建议在涉及大量字符串操作时使用StringBuffer`

##### StringBuffer 方法

- append() 方法用于向当前字符串的末尾追加内容，类似于字符串的连接
- deleteCharAt() 方法用来删除指定位置的字符，并将剩余的字符形成新的字符串
- delete() 方法一次性删除多个字符
- insert() 用来在指定位置插入字符串
- setCharAt() 方法用来修改指定位置的字符

## 参考资料

- [Java 入门教程](http://www.weixueyuan.net/java/rumen/)
