FROM python:3.9-slim

# Install Requirements.
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

RUN pip install Flask gunicorn

# PORT is specified in main.py
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 main:app