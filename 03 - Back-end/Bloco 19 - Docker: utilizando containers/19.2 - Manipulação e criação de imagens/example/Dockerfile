FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 3000
WORKDIR /usr/share/nginx/html
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]