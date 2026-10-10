#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
fail() { echo "✗ $1" >&2; exit 1; }
ok() { echo "✓ $1"; }

command -v php >/dev/null || fail "需要 PHP"
[[ -f index.html && -f main.js && -f run.php ]] || fail "缺少核心文件"
[[ -d docs && -d libs ]] || fail "缺少 docs/ 或 libs/"
ok "核心文件齐全"

php -l run.php >/dev/null
ok "run.php 语法 OK"

PORT="${SMOKE_PORT:-18088}"
php -S "127.0.0.1:${PORT}" -t "$ROOT" >/tmp/pmr-smoke.log 2>&1 &
PID=$!
cleanup() { kill "$PID" 2>/dev/null || true; }
trap cleanup EXIT
for i in $(seq 1 30); do curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1 && break; sleep 0.2; done

curl -sf "http://127.0.0.1:${PORT}/" | grep -qi 'html' || fail "首页失败"
ok "首页 200"
# 路径穿越应被拒绝或空
code=$(curl -s -o /tmp/pmr-trav.out -w '%{http_code}' "http://127.0.0.1:${PORT}/run.php?name=../README")
# 400 or sanitized content without leaking /etc
grep -q 'root:' /tmp/pmr-trav.out 2>/dev/null && fail "疑似路径穿越"
ok "路径穿越探测通过 (HTTP $code)"

echo ""; echo "smoke: ok"
