#!/bin/bash
# TMC Website Deploy Script
# Usage: ./deploy.sh [--preview]

SITE_DIR="/Users/JCCangilla/Library/Mobile Documents/com~apple~CloudDocs/Areas/A7 Learning & Leadership/Tuesday Men's Club/Website/tuesday-mens-club"

cd "$SITE_DIR"

if [ "$1" == "--preview" ]; then
    echo "Deploying preview..."
    netlify deploy
else
    echo "Deploying to production..."
    netlify deploy --prod
fi
