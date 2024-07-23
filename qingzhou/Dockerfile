FROM acr.baijia.com/gaotu-image/mes-fe-build:0.0.1 as builder

FROM alpine:latest as dist
WORKDIR /apps/website/

COPY --from=0 /app/output /apps/website/static
COPY ./qingzhou/config/ /apps/website/conf/
