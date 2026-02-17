FROM python:3.12-slim-bookworm
RUN addgroup --system appgroup && \
adduser --system --ingroup appgroup appuser
WORKDIR /devops-portfolio
COPY requirements.txt requirements.txt
# Install system dependencies required by mysqlclient
RUN apt-get update \
    && apt-get install --no-install-recommends -y default-libmysqlclient-dev  gcc\
    && pip install --no-cache-dir -r requirements.txt \
    && pip install pytest \
    && pip install gunicorn
COPY . /devops-portfolio
# Change ownership of app directory
RUN chown -R appuser:appgroup /devops-portfolio
# Switch to non-root user
USER appuser
# Run the flask app using Gunicorn
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000"]
