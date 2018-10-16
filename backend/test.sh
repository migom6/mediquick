#!/bin/bash

python app.py &
server_pid=$!

sleep 8

echo "Server running with PID : $server_pid"

echo "Running tests..."

curl http://$HOST:$PORT/alive

python test/diagnosis.test.py
python test/symptoms.test.py
python test/results.test.py

echo "All tests done. Shutting down server..."
kill $server_pid
ps | grep firefox | cut -d\  -f1 | xargs kill
ps | grep geckodriver | cut -d\  -f1 | xargs kill
