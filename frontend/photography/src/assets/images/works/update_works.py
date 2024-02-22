import os
import json

# Get the current script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))

# Get the list of file names in the current folder
file_names = os.listdir(script_dir)

# Filter out directories and non-file items
file_names = [name for name in file_names if os.path.isfile(os.path.join(script_dir, name)) and name.endswith('.jpg') or name.endswith('.png')]

# Write the file names into a JSON list
with open(os.path.join(script_dir, 'files.json'), 'w') as file:
    json.dump(file_names, file)
