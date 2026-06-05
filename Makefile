.PHONY: dev build preview lint type-check clean install update update-latest audit

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

# Update within the version ranges in package.json (safe — no major bumps)
update:
	pnpm update

# Bump everything to the latest, including major versions (may break)
update-latest:
	pnpm update --latest

audit:
	pnpm audit

clean:
	rm -rf node_modules pnpm-lock.yaml && pnpm install
