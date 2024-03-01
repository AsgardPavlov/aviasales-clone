FROM python:3.11

# Install system dependencies
#RUN apt-get update \
#    && apt-get install -y --no-install-recommends \
#       build-essential \
#       python3-dev \
#    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements
COPY ./server/pyproject.toml ./server/poetry.lock /app/

# Install Poetry
RUN pip install poetry

# Install dependencies
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction

# Copy the rest of the application code
COPY ./server /app

EXPOSE 8000

# Command to run the application
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
