import tensorflow as tf
from tensorflow.keras import layers, models
import cv2
import numpy as np
import os

def analyze_headshot(image_path):
    # 1. Check if the file exists
    if not os.path.exists(image_path):
        print(f"Error: Could not find image at {image_path}")
        return None

    # 2. Load and Preprocess the image
    img = cv2.imread(image_path)
    if img is None:
        print("Error: Could not decode image. Check file format.")
        return None
        
    img = cv2.resize(img, (128, 128))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)

    # 3. Define the CNN Architecture
    model = models.Sequential([
        # Convolutional Layer: Detects edges and textures
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
        layers.MaxPooling2D((2, 2)),
        
        # Second Layer: Detects complex patterns (eyes, nose, geometry)
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Flattening and Dense Layers: The "decision making" part
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(1, activation='sigmoid')
    ])

    print("CNN Model for Headshot Analysis initialized successfully! 🚀")
    model.summary()
    
    # Perform a test prediction (feature extraction)
    features = model.predict(img)
    print(f"\nProcessed Image Shape: {img.shape}")
    print(f"CNN Feature Output: {features}")
    
    return model

# Define the path to your headshot
# Since this script is in ML_CNN/, we go up one level to find the public folder
path_to_image = os.path.join('..', 'public', 'headshot.jpg')

# Call the function directly
analyze_headshot(path_to_image)
