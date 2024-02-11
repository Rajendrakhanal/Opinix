FROM python:3.11.4-alpine
WORKDIR /usr/src/backend
RUN pip install --upgrade pip
COPY ./requirement.txt .
RUN pip install -r requirement.txt
EXPOSE 8000
COPY . .
CMD [ "sh","startup.sh" ]