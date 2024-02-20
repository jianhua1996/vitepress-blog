---
title: python 中的一些语法糖释义
tags: 
    - python
---

# python 中的一些语法糖释义

### with 关键字

> Python 中的  with  关键字用于异常处理，它封装了  try…except…finally  编码范式，提高了易用性，使代码更清晰可读。

如果不使用不使用 with，也不使用 try…except…finally

```python
file = open('./test_runoob.txt', 'w')
file.write('hello world !')
file.close()
```

如果使用 try…except…finally

```python
file = open('./test_runoob.txt', 'w')
try:
    file.write('hello world')
finally:
    file.close()
```

使用 with 关键字

```python
with open('./test_runoob.txt', 'w') as file:
    file.write('hello world !')
```
