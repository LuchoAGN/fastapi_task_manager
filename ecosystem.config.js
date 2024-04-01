module.exports = {
  apps : [{
    name   : "fastapi_task_manager",
    script : "uvicorn --host 0.0.0.0 --port 5080  main:app"
  }]
}
