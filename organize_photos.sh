#! /bin/bash

x=1
mkdir -p "photos/"
for photo in $1/*
do
    extension=$(basename "$photo" | cut -d. -f2)
    filename="$x.$extension"
    cp "$photo" "photos/$filename"
    x=$(($x+1))
done

python create_json.py photos/ > photos.json
