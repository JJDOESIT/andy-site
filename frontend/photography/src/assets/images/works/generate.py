import os
from PIL import Image
import random

# Set the folder path
folder_path = os.path.dirname(os.path.abspath(__file__))

# Generate and save 1000 random pictures
for i in range(1000):
    # Generate a random image
    image = Image.new('RGB', (128, 128))
    pixels = image.load()
    for x in range(image.width):
        for y in range(image.height):
            pixels[x, y] = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
    
    # Save the image with a unique filename
    image.save(os.path.join(folder_path, f"random_image_{i}.png"))

print("Random images generated and saved successfully!")
