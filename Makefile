.PHONY: dev build preview lint type-check clean install

dev:
	pnpm vite --port 5173

build:
	pnpm build

preview:
	pnpm preview

lint:
	pnpm lint

type-check:
	pnpm type-check

install:
	pnpm install

clean:
	rm -rf node_modules pnpm-lock.yaml && pnpm install
