#!/usr/bin/env bash
set -euo pipefail

git fetch --tags

DATE=$(date -u +%Y-%m-%d)
EXISTING=$(git tag -l "${DATE}.*" | sort -t. -k2 -n | tail -1)

if [ -z "$EXISTING" ]; then
  X=1
else
  X=$(( $(echo "$EXISTING" | cut -d. -f2) + 1 ))
fi

TAG="${DATE}.${X}"
git tag "$TAG"
git push origin "$TAG"

echo "Created and pushed tag: $TAG"
