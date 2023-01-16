# Vue-3 Note 5 (部署)
1. 部署一个Vite+Vue3默认项目
   1. npm打包vue项目
      ```bash
      cd path # path为项目根目录
      npm install # 下载项目依赖
      npm run dev
      npm run build # 打包生成/dist文件夹
      npm run preview # 预览项目部署
      ``` 
   2. 修改nginx配置，`conf.d/default.conf`下修改server块
      ```js
      server {
         listen       80;
         server_name  <ip>;  # 服务器公网ip或域名

         error_page   500 502 503 504  /50x.html;
         location = /50x.html {
            root   /usr/share/nginx/html;
         }

         location / {
            root path/dist
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
         }
      }
      ``` 
   3. 重启nginx
      ```bash
      systemctl restart nginx
      systemctl status nginx
      ```  
2. 
    