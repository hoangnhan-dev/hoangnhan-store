build:
	docker-compose down --remove-orphans
	docker-compose build --no-cache

up:
	docker-compose down --remove-orphans
	docker-compose up

down:
	docker-compose down

connect-frontend:
	docker-compose exec frontend sh

connect-server:
	docker-compose exec server sh

start-server:
	docker-compose exec server sh -c "npm run dev"