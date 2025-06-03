from PIL import Image
import os

# Get the current directory (where the script is located)
current_dir = os.path.dirname(os.path.abspath(__file__))

# Loop through all files in the directory
for filename in os.listdir(current_dir):
    if filename.lower().endswith(".png"):
        png_path = os.path.join(current_dir, filename)
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(current_dir, webp_filename)

        try:
            with Image.open(png_path) as img:
                img.save(webp_path, "webp")
                print(f"Converted: {filename} -> {webp_filename}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

