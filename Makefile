build-frontend:
	@cd frontend && npm run build

serve: 	
	@cd backend && python app.py

test-backend: 
	@cd backend && bash test.sh

test-frontend:
	@cd frontend && npm run test

clean:
	@rm frontend/build -r
	@rm backend/*.log

netlify:
	cp netlify.toml ./frontend/build/netlify.toml
	./frontend/node_modules/netlify-cli/bin/run deploy --prod --dir=./frontend/build/
