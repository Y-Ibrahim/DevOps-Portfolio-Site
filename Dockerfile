FROM python:3.12-slim-bookworm
WORKDIR /devops-portfolio
COPY requirements.txt requirements.txt
# Install system dependencies required by mysqlclient
RUN apt-get update \
    && apt-get install -y default-libmysqlclient-dev  gcc\
    && pip install --no-cache-dir -r requirements.txt \
    && pip install gunicorn
COPY . /devops-portfolio

# Run the flask app using Gunicorn
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000"]
