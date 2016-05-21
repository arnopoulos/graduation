import os
import sys
import json

photos = [sys.argv[1] + p for p in os.listdir(sys.argv[1])]
photos_json = {"photos": photos}
print(photos_json)
