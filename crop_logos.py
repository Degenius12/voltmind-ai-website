#!/usr/bin/env python3
"""
Crop VoltMind AI logos to remove excess transparent padding.
This script detects the actual content boundaries and crops the images
while adding minimal padding around the actual content.
"""

from PIL import Image
import numpy as np
import os

def get_content_bbox(image):
    """
    Get the bounding box of non-transparent content in an image.

    Args:
        image: PIL Image object with alpha channel

    Returns:
        tuple: (left, top, right, bottom) bounding box coordinates
    """
    # Convert image to numpy array
    img_array = np.array(image)

    # Get alpha channel (transparency)
    if img_array.shape[2] == 4:  # RGBA
        alpha = img_array[:, :, 3]
    else:
        # If no alpha channel, assume entire image is content
        return (0, 0, image.width, image.height)

    # Find rows and columns with any non-transparent pixels (alpha > 0)
    rows = np.any(alpha > 0, axis=1)
    cols = np.any(alpha > 0, axis=0)

    # Get the indices of the first and last True values
    if not np.any(rows) or not np.any(cols):
        # No content found, return full image
        return (0, 0, image.width, image.height)

    top = np.argmax(rows)
    bottom = len(rows) - np.argmax(rows[::-1])
    left = np.argmax(cols)
    right = len(cols) - np.argmax(cols[::-1])

    return (left, top, right, bottom)

def crop_logo(input_path, output_path, padding=10):
    """
    Crop a logo image to remove excess transparent padding.

    Args:
        input_path: Path to input image
        output_path: Path to save cropped image
        padding: Pixels of padding to add around content (default: 10)
    """
    print(f"\nProcessing: {input_path}")

    # Open image
    img = Image.open(input_path)
    original_size = img.size
    print(f"Original size: {original_size[0]}x{original_size[1]}")

    # Get content bounding box
    left, top, right, bottom = get_content_bbox(img)
    print(f"Content bbox: left={left}, top={top}, right={right}, bottom={bottom}")

    # Add padding (but don't go outside original image bounds)
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(img.width, right + padding)
    bottom = min(img.height, bottom + padding)

    print(f"Crop bbox with padding: left={left}, top={top}, right={right}, bottom={bottom}")

    # Crop image
    cropped_img = img.crop((left, top, right, bottom))
    new_size = cropped_img.size
    print(f"New size: {new_size[0]}x{new_size[1]}")

    # Calculate size reduction
    width_reduction = ((original_size[0] - new_size[0]) / original_size[0]) * 100
    height_reduction = ((original_size[1] - new_size[1]) / original_size[1]) * 100
    print(f"Size reduction: {width_reduction:.1f}% width, {height_reduction:.1f}% height")

    # Save cropped image
    cropped_img.save(output_path, 'PNG', optimize=True)
    print(f"Saved: {output_path}")

    return new_size

def main():
    """Main function to crop both logo files."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(script_dir, 'images')

    logos = [
        'voltmind-logo-primary.png',
        'voltmind-logo-white-header.png'
    ]

    print("=" * 60)
    print("VoltMind AI Logo Cropper")
    print("=" * 60)

    new_sizes = {}

    for logo in logos:
        input_path = os.path.join(images_dir, logo)
        output_path = input_path  # Overwrite original

        if not os.path.exists(input_path):
            print(f"\nWarning: {input_path} not found, skipping...")
            continue

        # Crop with 10px padding
        new_size = crop_logo(input_path, output_path, padding=10)
        new_sizes[logo] = new_size

    print("\n" + "=" * 60)
    print("Summary:")
    print("=" * 60)
    for logo, size in new_sizes.items():
        print(f"{logo}: {size[0]}x{size[1]}")

    print("\nCropping complete! The logos now have minimal transparent padding.")

if __name__ == '__main__':
    main()
