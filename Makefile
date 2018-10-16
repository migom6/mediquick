build-frontend:
	@cd frontend && npm run build

serve:
	@cd backend && python app.py

test-backend:
	@cd backend && bash test.sh
test-frontend:
	@cd frontend && npm run test
