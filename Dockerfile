FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1

RUN apk update \
    apk add python3-dev && \
    apk add gcc musl-dev musl-dev
ADD ./backend/pblog /app
RUN pip install -r app/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
