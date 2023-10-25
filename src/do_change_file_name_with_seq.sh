#!/usr/bin/bash

counter=1

for file in *; do
    if [ -f "$file" ]; then
        new_name="${counter}.png"
        mv "$file" "$new_name"
        ((counter++))
    fi
done

echo "Renamed files to a sequence from 1 to $((counter - 1))"
