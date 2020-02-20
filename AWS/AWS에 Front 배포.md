# AWS에 Front 배포



## 배포 전 Setting

#### 1. ubuntu에 nginx 설치

`sudo apt-get install nginx` 로 nginx 설치



#### 2. ubuntu의 `/etc/nginx/sites-enabled`, `/etc/nginx/sites-available` 의 default 파일 수정 

`vim default` 로 default 파일 수정

```
# include snippets/snakeoil.conf;
root /var/www/html/build;
# Add index.php to the list if you are using PHP=
#index index.html index.htm index.nginx-debian.html;
index index.html
try_files $uri $uri/ /index.html;
```

파일 변경 후 `sudo service nginx restart` 로 재시작, 설정 반영

폴더 안의 index.nginx-debian.html 삭제



## 배포 시작

#### 1. React에서 yarn run build

#### 2. `/var/www/html` 에 Front(React)에생성된 `build` 폴더 붙여넣기

#### 3. `sudo service nginx start` 로 nginx 시작

#### 4. `sudo service nginx stop` 로 nginx 종료