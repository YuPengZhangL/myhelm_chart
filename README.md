# myhelm_chart
A github chart repository demo
## helm的chart仓库地址为：https://yupengzhangl.github.io/myhelm_chart/


## 本Chart仓库制作方法

1、创建git respositry并开启page页面(略)


2、拉取项目并创建helm项目代码
```
# git clone https://github.com/YuPengZhangL/myhelm_chart.git
# helm create myhelm
```

3、打包helm项目代码
```
# helm package myhelm
```


4、创建index.yaml到/目录
```
# helm repo index --url https://yupengzhangl.github.io/myhelm_chart/ .
```


5、推送
```
# git add . 
# git commit -m "add mychart"
# git push origin main
```

## 本Chart仓库的使用方法

1、添加chart仓库
```
# helm repo add myrepo https://yupengzhangl.github.io/myhelm_chart/
```

2、添加成功
```
# helm repo list
NAME	URL                                   
myrepo	https://yupengzhangl.github.io/myhelm_chart/
```

3、搜索chart包
```
# helm search repo
NAME				    CHART VERSION   APP VERSION	DESCRIPTION                                   
```

4、安装chart包
```
# helm install xxx myrepo/test
```

xxx为relaese名字
