FROM nginx:alpine

# Çalışma dizinini ayarla
WORKDIR /usr/share/nginx/html

# HTML dosyalarını kopyala
COPY html/ ./

# CSS, JS ve diğer statik dosyaları doğru yapıda kopyala
COPY css/ ./css/
COPY js/ ./js/
COPY images/ ./images/
COPY data/ ./data/

# Nginx yapılandırması
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80'de dinle
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]

